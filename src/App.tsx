import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TechnologiesCart from "./components/TechnologiesCart";
import type { Itechnologie } from "./types/technologiesType";
import SelectedCard from "./components/SelectedCard";
import toast, { Toaster } from "react-hot-toast";

const tech = async (): Promise<Itechnologie[]> => {
  const res = await fetch("/content.json");

  if (!res.ok) {
    throw new Error("Unable to load the Technologies.");
  }

  const data = await res.json();

  return data;
};

const techno = tech();

function App() {
  const [savedT, setSavedT] = useState<Itechnologie[]>([]);

  
  const savetech = (tech: Itechnologie) => {
    const exists = savedT.some(
      (item) => item.heading === tech.heading
    );

    if (exists) {
      toast.success(`${tech.heading} is already on your list.`);
      return;
    }

    setSavedT([...savedT, tech]);
    toast.success(`${tech.heading} added to your list.`);
  };

  
  const removeTech = (heading: string) => {
    const tech = savedT.find(
      (item) => item.heading === heading
    );

    setSavedT((prev) =>
      prev.filter((item) => item.heading !== heading)
    );

    if (tech) {
      toast.success(`${tech.heading} removed from your list.`);
    }
  };

  
  const clearList = () => {
    if (!savedT.length) return;

    setSavedT([]);
    toast.success("Your technology list is clear.");
  };

  return (
    <>
      <Toaster />

      <Nav />

      <hr className="border-gray-200 border-1" />

      <Banner />

      <main className="container mx-auto">

        
        <div className="mb-6">
          <h3 className="text-2xl font-bold">
            Explore the Technologies
          </h3>

          <p className="text-gray-600">
            Pick the technology per category to build your ideal stack.
          </p>
        </div>

        
        <div className="grid grid-cols-4 gap-5">

          <Suspense fallback={<h2>Loading....</h2>}>
            <div className="col-span-3">
              <TechnologiesCart
                techno={techno}
                savetech={savetech}
              />
            </div>
          </Suspense>

          <div className="col-span-1">
            <SelectedCard
              tech={savedT}
              onRemove={removeTech}
              onClear={clearList}
            />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;