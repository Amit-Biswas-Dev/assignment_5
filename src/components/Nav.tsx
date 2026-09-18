
const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">

        
        <div className="flex items-center gap-2">
          <h4 className="bg-pink-500 px-2 py-1 font-bold rounded-2xl text-white">
            DS
          </h4>

          <h3 className="font-bold text-lg">
            Dev Stack
          </h3>
        </div>

        
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-pink-500 transition">
            Home
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            Technologies
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            Projects
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            About
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            Contact
          </a>
        </div>

        
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 hover:text-pink-500 transition">
            Sign In
          </button>

          <button className="rounded-full px-5 py-2 bg-pink-500 text-white hover:bg-pink-600 transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;

