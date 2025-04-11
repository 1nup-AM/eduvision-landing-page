import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //Auto close when clicking nav links
  useEffect(() => {
    const handleClick = () => closeMenu();
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => link.addEventListener("click", handleClick));
    return () => {
      links.forEach(link => link.removeEventListener("click", handleClick));
      };
  }, [])
  
  //Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` bg-white shadow-sm fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      } `}
    >
      <div className="container mx-auto py-3 px-6 md:px-8 flex justify-between items-center">
        <div>
          <a href="#home" className="nav-link">
            <img
              src="owl.png"
              alt="Edu Vision"
              className="h-14 cursor-pointer rounded transition-transform hover:scale-105 object-contain"
            />
          </a>
        </div>

        {/*Desktop navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-6 lg:space-x-8">
          <a
            href="#skills"
            className=" nav-link text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group font-medium"
          >
            Why choose us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#courses"
            className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
          >
            Courses
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#stories"
            className="nav-link text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 realtive group"
          >
            Success stories
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="nav-link text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg  cursor-pointer py-2.5 px-6 transition-all duration-300 hover:shadow-lg"
          >
            Free demo class
          </a>
        </nav>

        {/*Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none transition-transform hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-xl text-blue-600" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/*Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 py-3 flex flex-col space-y-3">
            <a
              href="#skills"
              className="nav-link text-gray-700 hover:text-blue-600 py-2.5 px-2 transition-colors font-medium duration-300 border-b border-gray-100"
            >
              Why choose us
            </a>
            <a
              href="#courses"
              className="nav-link text-gray-700 hover:text-blue-600 py-2.5 px-2 transition-colors font-medium duration-300 border-b border-gray-100"
            >
              Courses
            </a>
            <a
              href="#stories"
             className="nav-link text-gray-700 hover:text-blue-600 py-2.5 px-2 transition-colors font-medium duration-300 border-b border-gray-100"
            >
              Success stories
            </a>
            <a
              href="#contact"
              className="nav-link bg-blue-600 text-white hover:bg-blue-700 py-3 px-4 font-medium rounded-lg text-center transition-colors duration-300"
            >
              Free demo class
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
