// import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links Section */}
          <div>
            <h3
              className="text-2xl font-bold mb-4 text-[#fe8e3c] underline decoration-black"
              style={{ textUnderlineOffset: '5px' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block text-l hover:text-[#fe8e3c] hover:scale-105 duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-l hover:text-[#fe8e3c] hover:scale-105 duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block text-l hover:text-[#fe8e3c] hover:scale-105 duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-l hover:text-[#fe8e3c] hover:scale-105 duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3
              className="text-2xl font-bold mb-4 text-[#fe8e3c] underline decoration-black"
              style={{ textUnderlineOffset: '5px' }}
            >
              Contact Us
            </h3>
            <p className="text-black mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
              Email: vivianwambui@gmail.com
            </p>
            <p className="text-black mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-500" />
              Phone: +123 456 7890
            </p>
            <p className="text-black mb-2">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-green-500" />
              WhatsApp: +123 456 7890
            </p>
            <p className="text-black">
              <FontAwesomeIcon icon={faFacebook} className="mr-2 text-blue-600" />
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#fe8e3c]">
                Facebook
              </a>
            </p>
          </div>

          {/* Location Section */}
          <div>
            <h3
              className="text-2xl font-bold mb-4 text-[#fe8e3c] underline decoration-black"
              style={{ textUnderlineOffset: '5px' }}
            >
              Our Location
            </h3>
            <p className="text-black">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-[#fe8e3c]" />
              123 Real Estate Street
            </p>
            <p className="text-black">City, Country 45678</p>
          </div>
        </div>

        <div className="mt-8 border-t border-black pt-4 text-center">
          <p className="text-black">
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
