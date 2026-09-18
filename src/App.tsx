import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TechnologiesCart from "./components/TechnologiesCart";
import type { Itechnologie } from "./types/technologiesType";
import SelectedCard from "./components/selectedCard";

const tech = async (): Promise<Itechnologie[]> => {
  const res = await fetch("/content.json");
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
      return;
    }

    setSavedT([...savedT, tech]);
  };

  return (
    <>
      <div>
        <Nav />

        <Banner />

        <main className="container mx-auto grid grid-cols-4 gap-5">
          <Suspense fallback={<h2>Loading....</h2>}>
            <div className="col-span-3">
              <TechnologiesCart
              techno={techno}
              savetech={savetech}
            />
            </div>
          </Suspense>

          <div className="col-span-1">
            <SelectedCard tech={savedT} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;