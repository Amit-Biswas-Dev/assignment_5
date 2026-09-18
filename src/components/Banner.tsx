
import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

       
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Ideal
            <br />
            Development Stack
          </h1>

          <p className="my-4 text-gray-600 leading-7">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden md:block" />
            compare them side by side, and put together the stack that fits your
            <br className="hidden md:block" />
            next project.
          </p>

          <div className="flex gap-3">
            <button className="bg-cyan-500 px-4 py-2 rounded-md text-white font-medium hover:bg-cyan-600 transition">
              Explore Technologies
            </button>

            <button className="px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;

