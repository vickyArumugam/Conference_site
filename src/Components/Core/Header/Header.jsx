import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Added state to manage active dropdown on mobile

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Toggle active menu
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
          <RouterLink to="/" className="hover:text-gray-200">
            Home
          </RouterLink>

          {/* Dropdown Menus */}
          {["About Us", "Author's Desk"].map((menu) => (
            <div className="relative group" key={menu}>
              <button className="hover:text-gray-200 flex items-center">
                {menu} <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg rounded invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                {menu === "About Us" ? (
                  <>
                    <RouterLink
                      to="/about_conference"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      About the Conference
                    </RouterLink>
                    <RouterLink
                      to="/scope_conference"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      Scope of Conference
                    </RouterLink>
                    <RouterLink
                      to="/organizing_committee"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      Organizing Committee
                    </RouterLink>
                    <RouterLink
                      to="/editorial_board"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      Editorial Board
                    </RouterLink>
                  </>
                ) : (
                  <>
                    <RouterLink
                      to="/auth_conference_tracks"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      Conference Tracks
                    </RouterLink>
                    <RouterLink
                      to="/journal_publication"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      Journal Publication
                    </RouterLink>
                    <RouterLink
                      to="/key_dates"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      Key Dates
                    </RouterLink>
                    <RouterLink
                      to="/registration_details"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      Registration Details
                    </RouterLink>
                    <RouterLink
                      to="/new_paper_submission"
                      className="block px-4 py-2 hover:bg-blue-100"
                    >
                      New Paper Submission
                    </RouterLink>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Contact Us Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-200 flex items-center">
              Contact Us <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-blue-600 shadow-lg rounded invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <RouterLink
                to="/contact"
                className="block px-4 py-2 hover:bg-blue-100"
              >
                Get in Touch
              </RouterLink>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <RouterLink to="/" className="hover:text-gray-700">
              Home
            </RouterLink>

            {/* Collapsible Dropdown for Mobile */}
            {["About Us", "Author's Desk"].map((menu) => (
              <div key={menu} className="w-full px-4">
                <button
                  className="flex justify-between w-full text-left py-2 text-blue-600 font-semibold"
                  onClick={() => toggleDropdown(menu)}
                >
                  {menu} <ChevronDown className="w-5 h-5" />
                </button>
                {activeMenu === menu && (
                  <div className="flex flex-col space-y-2 mt-2 px-4">
                    {menu === "About Us" ? (
                      <>
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
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Contact Us Dropdown */}
            <div className="w-full px-4">
              <button
                className="flex justify-between w-full text-left py-2 text-blue-600 font-semibold"
                onClick={() => toggleDropdown("Contact Us")}
              >
                Contact Us <ChevronDown className="w-5 h-5" />
              </button>
              {activeMenu === "Contact Us" && (
                <div className="flex flex-col space-y-2 mt-2 px-4">
                  <RouterLink
                    to="/contact"
                    className="block py-2 text-blue-600"
                  >
                    Get in Touch
                  </RouterLink>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
