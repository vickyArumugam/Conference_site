import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  // Function to check if the "About Us" section is active (for both main and dropdown links)
  const isAboutUsActive = () => {
    return (
      location.pathname.startsWith("/about_conference") ||
      location.pathname.startsWith("/scope_conference") ||
      location.pathname.startsWith("/organizing_committee") ||
      location.pathname.startsWith("/editorial_board")
    );
  };

  // Function to check if the "Author's Desk" section is active
  const isAuthorsDeskActive = () => {
    return (
      location.pathname.startsWith("/auth_conference_tracks") ||
      location.pathname.startsWith("/journal_publication") ||
      location.pathname.startsWith("/key_dates") ||
      location.pathname.startsWith("/registration_details") ||
      location.pathname.startsWith("/new_paper_submission")
    );
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
              src="/images/cropped-ICVRSCET-1.png"
              className="w-34"
              alt="Logo"
            />
          </RouterLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-white">
          <RouterLink
            to="/"
            className={`hover:text-gray-200 ${
              isActive("/") ? "text-yellow-400 " : ""
            }`}
          >
            Home
          </RouterLink>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button
              className={`hover:text-gray-200 flex items-center ${
                isAboutUsActive() ? "text-yellow-400" : ""
              }`}
            >
              About Us <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white text-blue-600 shadow-lg rounded invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <RouterLink
                to="/about_conference"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/about_conference") ? "text-yellow-400" : ""
                }`}
              >
                About the Conference
              </RouterLink>
              <RouterLink
                to="/scope_conference"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/scope_conference") ? "text-yellow-400 " : ""
                }`}
              >
                Scope of Conference
              </RouterLink>
              <RouterLink
                to="/organizing_committee"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/organizing_committee") ? "text-yellow-400" : ""
                }`}
              >
                Organizing Committee
              </RouterLink>
              <RouterLink
                to="/editorial_board"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/editorial_board") ? "text-yellow-400 " : ""
                }`}
              >
                Editorial Board
              </RouterLink>
            </div>
          </div>

          {/* Author's Desk Dropdown */}
          <div className="relative group">
            <button
              className={`hover:text-gray-200 flex items-center ${
                isAuthorsDeskActive() ? "text-yellow-400 " : ""
              }`}
            >
              Author's Desk <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white text-blue-600 shadow-lg rounded invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <RouterLink
                to="/auth_conference_tracks"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/auth_conference_tracks") ? "text-yellow-400" : ""
                }`}
              >
                Conference Tracks
              </RouterLink>
              <RouterLink
                to="/journal_publication"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/journal_publication") ? "text-yellow-400" : ""
                }`}
              >
                Journal Publication
              </RouterLink>
              <RouterLink
                to="/key_dates"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/key_dates") ? "text-yellow-400 " : ""
                }`}
              >
                Key Dates
              </RouterLink>
              <RouterLink
                to="/registration_details"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/registration_details") ? "text-yellow-400 " : ""
                }`}
              >
                Registration Details
              </RouterLink>
              <RouterLink
                to="/new_paper_submission"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/new_paper_submission") ? "text-yellow-400 " : ""
                }`}
              >
                New Paper Submission
              </RouterLink>
            </div>
          </div>

          {/* Contact Us Link */}
          <RouterLink
            to="/contact"
            className={`hover:text-gray-200 ${
              isActive("/contact") ? "text-yellow-400 " : ""
            }`}
          >
            Contact Us
          </RouterLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <RouterLink
              to="/"
              className={`hover:text-gray-200 ${
                isActive("/") ? "text-yellow-400 " : ""
              }`}
            >
              Home
            </RouterLink>

            {/* About Us Dropdown */}
            <div className="w-full px-4">
              <button
                className={`flex justify-between w-full text-left py-2 text-blue-600 font-semibold ${
                  isAboutUsActive() ? "text-yellow-400 " : ""
                }`}
                onClick={() => toggleDropdown("aboutUs")}
              >
                About Us <ChevronDown className="w-5 h-5" />
              </button>
              {activeMenu === "aboutUs" && (
                <div className="flex flex-col space-y-2 mt-2 px-4">
                  <RouterLink
                    to="/about_conference"
                    className="block py-2 text-blue-600"
                  >
                    About the Conference
                  </RouterLink>
                  <RouterLink
                    to="/scope_conference"
                    className="block py-2 text-blue-600"
                  >
                    Scope of Conference
                  </RouterLink>
                  <RouterLink
                    to="/organizing_committee"
                    className="block py-2 text-blue-600"
                  >
                    Organizing Committee
                  </RouterLink>
                  <RouterLink
                    to="/editorial_board"
                    className="block py-2 text-blue-600"
                  >
                    Editorial Board
                  </RouterLink>
                </div>
              )}
            </div>

            {/* Author's Desk Dropdown */}
            <div className="w-full px-4">
              <button
                className={`flex justify-between w-full text-left py-2 text-blue-600 font-semibold ${
                  isAuthorsDeskActive() ? "text-yellow-400" : ""
                }`}
                onClick={() => toggleDropdown("authorsDesk")}
              >
                Author's Desk <ChevronDown className="w-5 h-5" />
              </button>
              {activeMenu === "authorsDesk" && (
                <div className="flex flex-col space-y-2 mt-2 px-4">
                  <RouterLink
                    to="/auth_conference_tracks"
                    className="block py-2 text-blue-600"
                  >
                    Conference Tracks
                  </RouterLink>
                  <RouterLink
                    to="/journal_publication"
                    className="block py-2 text-blue-600"
                  >
                    Journal Publication
                  </RouterLink>
                  <RouterLink
                    to="/key_dates"
                    className="block py-2 text-blue-600"
                  >
                    Key Dates
                  </RouterLink>
                  <RouterLink
                    to="/registration_details"
                    className="block py-2 text-blue-600"
                  >
                    Registration Details
                  </RouterLink>
                  <RouterLink
                    to="/new_paper_submission"
                    className="block py-2 text-blue-600"
                  >
                    New Paper Submission
                  </RouterLink>
                </div>
              )}
            </div>

            {/* Contact Us Link */}
            <RouterLink
              to="/contact"
              className={`block py-2 text-blue-600 ${
                isActive("/contact") ? "text-yellow-400 " : ""
              }`}
            >
              Contact Us
            </RouterLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
