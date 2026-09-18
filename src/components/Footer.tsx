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

          <div className="flex gap-5 mt-4">
            <h5>GitHub</h5>
            <h5>Twitter</h5>
            <h5>LinkedIn</h5>
          </div>
        </div>

        <div>
          <h3 className="font-bold">PRODUCT</h3>
          <p>Home</p>
          <p>Technologies</p>
          <p>Projects</p>
        </div>

        <div>
          <h3 className="font-bold">COMPANY</h3>
          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>

        <div>
          <h3 className="font-bold">LEGAL</h3>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
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