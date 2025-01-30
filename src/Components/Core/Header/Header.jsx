import React, { useState, useEffect } from "react";
import { Link, Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom"; // Import the Link from react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#000435] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <RouterLink to="/">
            <img
              src="public/images/cropped-ICVRSCET-1.png"
              className="w-34"
              alt="Logo"
            />
          </RouterLink>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-10 text-white">
          <RouterLink to="/" className="hover:text-gray-200">
            Home
          </RouterLink>

          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center">
              About Us <span className="ml-1">&#9662;</span>
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-blue-600 shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <RouterLink
                to="/conference_tracks"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                Earlier Conferences
              </RouterLink>
              <RouterLink
                to="/about_conference"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                About the Conference
              </RouterLink>
              <RouterLink
                to="/scope_conference"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                Scope of Conference
              </RouterLink>
              <RouterLink
                to="/about_vrscet"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                About VRSCET
              </RouterLink>
              <RouterLink
                to="/organizing_committee"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                Organizing Committee
              </RouterLink>
              <RouterLink
                to="/editorial_board"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                Editorial Board
              </RouterLink>
            </div>
          </div>

          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center">
              Author's Desk <span className="ml-1">&#9662;</span>
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-blue-600 shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <RouterLink
                to="/auth_conference_tracks"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                Conference Tracks
              </RouterLink>
              <RouterLink
                to="/journal publication"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                Journal Publication
              </RouterLink>
              <RouterLink
                to="/key_dates"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                Key Dates
              </RouterLink>
              <RouterLink
                to="/registration details"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                Registration Details
              </RouterLink>
              <RouterLink
                to="/new paper submission"
                className="block px-4 py-2 hover:bg-blue-100 uppercase"
              >
                New Paper Submission
              </RouterLink>
            </div>
          </div>

          <RouterLink to="#contact" className="hover:text-gray-200">
            Contact Us
          </RouterLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <RouterLink to="#home" className="hover:text-gray-700">
              Home
            </RouterLink>

            <div className="relative group">
              <button className="hover:text-gray-200 flex items-center">
                About Us <span className="ml-1">&#9662;</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white text-blue-600 shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <RouterLink
                  to="#conference_tracks"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Editorial Board
                </RouterLink>
                <RouterLink
                  to="#review-process"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Review Process
                </RouterLink>
                <RouterLink
                  to="#submission-guidelines"
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  Submission Guidelines
                </RouterLink>
              </div>
            </div>

            <div>
              <button className="hover:text-gray-700 flex items-center">
                Author's Desk <span className="ml-1">&#9662;</span>
              </button>
              <div className="bg-blue-600 text-white mt-2 rounded shadow-lg">
                <RouterLink
                  to="#editorial-board"
                  className="block px-4 py-2 hover:bg-blue-700"
                >
                  Editorial Board
                </RouterLink>
                <RouterLink
                  to="#review-process"
                  className="block px-4 py-2 hover:bg-blue-700"
                >
                  Review Process
                </RouterLink>
                <RouterLink
                  to="#submission-guidelines"
                  className="block px-4 py-2 hover:bg-blue-700"
                >
                  Submission Guidelines
                </RouterLink>
              </div>
            </div>

            <RouterLink to="#contact" className="hover:text-gray-700">
              Contact Us
            </RouterLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
