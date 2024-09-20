import { useState } from "react";
import { Link } from "react-router-dom";
import WhiteLogo from "../assets/Bluelogo.png";
import LookupLogo from "../assets/TransparentLogo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto pl-0 pr-2 sm:pl-0 sm:pr-6 lg:pl-0 lg:pr-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-5">
            <img src={LookupLogo} alt="Lookup Logo" className="h-14 w-36" />
            <img
              src={WhiteLogo}
              alt="White Logo"
              className="h-18 w-40"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="block py-2 px-3 text-l hover:text-[#fe8e3c] hover:scale-150 duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 px-3 text-l hover:text-[#fe8e3c] hover:scale-150 duration-300"
              >
                About
              </Link>

              <Link
                to="/services"
                className="block py-2 px-3 text-l hover:text-[#fe8e3c] hover:scale-150 duration-300"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-3 text-l hover:text-[#fe8e3c] hover:scale-150 duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-1 rounded-md text-white hover:text-black hover:bg-[#fe8e3c]focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-5 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-black block px-3 py-2 rounded-md text-xl font-medium hover:text-[#fe8e3c] hover:scale-105 focus:text-[#fe8e3c]focus:scale-105 active:text-[#fe8e3c] active:scale-105 duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black block px-3 py-2 rounded-md text-xl font-medium hover:text-[#fe8e3c] hover:scale-105 focus:text-[#fe8e3c] focus:scale-105 active:text-[#fe8e3c] active:scale-105 duration-200"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-black block px-3 py-2 rounded-md text-xl font-medium hover:text-[#fe8e3c] hover:scale-105 focus:text-[#fe8e3c] focus:scale-105 active:text-[#fe8e3c] active:scale-105 duration-200"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-black block px-3 py-2 rounded-md text-xl font-medium hover:text-[#fe8e3c] hover:scale-105 focus:text-[#fe8e3c] focus:scale-105 active:text-[#fe8e3c] active:scale-105 duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
