
import React from 'react';
import footer from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div className=" continer mx-auto flex justify-around py-8">
            
            {/* Logo & Social */}
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

            {/* Product */}
            <div>
                <h3>PRODUCT</h3>
                <p>Home</p>
                <p>Technologies</p>
                <p>Projects</p>
            </div>

            {/* Company */}
            <div>
                <h3>COMPANY</h3>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
            </div>

            {/* Legal */}
            <div>
                <h3>LEGAL</h3>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>

        </div>
    );
};

export default Footer;
