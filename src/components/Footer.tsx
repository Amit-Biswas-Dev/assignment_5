import footer from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto py-20">

              <hr className="border-gray-200 my-8" />


      <div className="flex justify-around">

        <div>
          <img src={footer} alt="Dev Stack Logo" />

          <p>
            Curated tools, technologies, and resources for
            <br />
            building modern software.
          </p>

          <div className="flex justify-baseline gap-5 mt-4">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div >
          <h3 className="font-bold">PRODUCT</h3>

          
            <a href="#">Home</a><br />
            <a href="#">Technologies</a><br />
            <a href="#">Projects</a>
        
          
        </div>

        <div>
          <h3 className="font-bold">COMPANY</h3>
          <a href="#">About</a><br />
          <a href="#">Contact</a><br />
          <a href="#">Careers</a>
        </div>

        <div>
          <a href="#"><h3 className="font-bold">LEGAL</h3> </a>
          <a href="#">Privacy Policy</a><br />
          <a href="#">Terms of Service</a><br />
        </div>

      </div>

      <hr className="border-gray-200 my-8" />

      <p className="text-left text-gray-500 pl-4">
        © 2026 Dev Stack. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;