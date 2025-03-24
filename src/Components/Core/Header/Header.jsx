import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation(); 

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

  const isActive = (path) => location.pathname === path;

  const isAboutUsActive = () => {
    return (
      location.pathname.startsWith("/about_conference") ||
      location.pathname.startsWith("/scope_conference") ||
      location.pathname.startsWith("/organizing_committee") ||
      location.pathname.startsWith("/editorial_board")
    );
  };

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
      <div className="container mx-auto flex items-center justify-between p-2">

        <div className="text-2xl font-bold">
          <RouterLink to="/">
            <img
              src="/images/icacsitArtboard 1ICAMET.png"
              className="w-[70px] sm:w-[60px] md:w-[90px] lg:w-[100px] sm:ml-4"
              alt="Logo"
            />
          </RouterLink>
        </div>

        <nav className="hidden md:flex space-x-10 text-white">
          <RouterLink
            to="/"
            className={`hover:text-gray-200 ${
              isActive("/") ? "text-blue-400" : ""
            }`}
          >
            Home
          </RouterLink>

          <div className="relative group">
            <button
              className={`hover:text-gray-200 flex items-center ${
                isAboutUsActive() ? "text-blue-400" : ""
              }`}
            >
              About Us <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-[-40px] mt-4 w-64 bg-white text-black shadow-lg rounded invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <RouterLink
                to="/about_conference"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/about_conference") ? "text-blue-400" : ""
                }`}
              >
                About the Conference
              </RouterLink>
              <RouterLink
                to="/scope_conference"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/scope_conference") ? "text-blue-400" : ""
                }`}
              >
                Scope of Conference
              </RouterLink>
              <RouterLink
                to="/organizing_committee"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/organizing_committee") ? "text-blue-400" : ""
                }`}
              >
                Organizing Committee
              </RouterLink>
              <RouterLink
                to="/editorial_board"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/editorial_board") ? "text-blue-400" : ""
                }`}
              >
                Editorial Board
              </RouterLink>
            </div>
          </div>

          <div className="relative group">
            <button
              className={`hover:text-gray-200 flex items-center ${
                isAuthorsDeskActive() ? "text-blue-400" : ""
              }`}
            >
              Author's Desk <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-4 w-64 bg-white text-black shadow-lg rounded invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <RouterLink
                to="/auth_conference_tracks"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/auth_conference_tracks") ? "text-blue-400" : ""
                }`}
              >
                Conference Tracks
              </RouterLink>
              <RouterLink
                to="/journal_publication"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/journal_publication") ? "text-blue-400" : ""
                }`}
              >
                Journal Publication
              </RouterLink>
              <RouterLink
                to="/key_dates"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/key_dates") ? "text-blue-400" : ""
                }`}
              >
                Key Dates
              </RouterLink>
              <RouterLink
                to="/registration_details"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/registration_details") ? "text-blue-400" : ""
                }`}
              >
                Registration Details
              </RouterLink>
              <RouterLink
                to="/new_paper_submission"
                className={`block px-4 py-2 hover:bg-blue-100 ${
                  isActive("/new_paper_submission") ? "text-blue-400" : ""
                }`}
              >
                New Paper Submission
              </RouterLink>
            </div>
          </div>


          <RouterLink
            to="/contact"
            className={`hover:text-gray-200 ${
              isActive("/contact") ? "text-blue-400" : ""
            }`}
          >
            Contact Us
          </RouterLink>
        </nav>


        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <Menu size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-opacity-90 z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
          <div className="fixed top-14 right-0 h-auto w-64 z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden border-l bg-white p-4">
            <div className="flex justify-end">
              <button
                className="text-gray-600 focus:outline-none"
                onClick={toggleMenu}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-gray-800">
              <RouterLink
                to="/"
                className={`hover:text-blue-500 ${
                  isActive("/") ? "text-blue-500 font-bold" : ""
                }`}
                onClick={toggleMenu}
              >
                Home
              </RouterLink>

              <div>
                <button
                  className={`flex justify-between w-full text-left py-2 hover:text-blue-500 ${
                    isAboutUsActive() ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => toggleDropdown("aboutUs")}
                >
                  About Us <ChevronDown className="w-5 h-5" />
                </button>
                {activeMenu === "aboutUs" && (
                  <div className="flex flex-col space-y-2 mt-2 pl-4">
                    <RouterLink
                      to="/about_conference"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      About the Conference
                    </RouterLink>
                    <RouterLink
                      to="/scope_conference"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      Scope of Conference
                    </RouterLink>
                    <RouterLink
                      to="/organizing_committee"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      Organizing Committee
                    </RouterLink>
                    <RouterLink
                      to="/editorial_board"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      Editorial Board
                    </RouterLink>
                  </div>
                )}
              </div>

              <div>
                <button
                  className={`flex justify-between w-full text-left py-2 hover:text-blue-500 ${
                    isAuthorsDeskActive() ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={() => toggleDropdown("authorsDesk")}
                >
                  Author's Desk <ChevronDown className="w-5 h-5" />
                </button>
                {activeMenu === "authorsDesk" && (
                  <div className="flex flex-col space-y-2 mt-2 pl-4">
                    <RouterLink
                      to="/auth_conference_tracks"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      Conference Tracks
                    </RouterLink>
                    <RouterLink
                      to="/journal_publication"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      Journal Publication
                    </RouterLink>
                    <RouterLink
                      to="/key_dates"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      Key Dates
                    </RouterLink>
                    <RouterLink
                      to="/registration_details"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      Registration Details
                    </RouterLink>
                    <RouterLink
                      to="/new_paper_submission"
                      className="block py-2 hover:text-blue-500"
                      onClick={toggleMenu}
                    >
                      New Paper Submission
                    </RouterLink>
                  </div>
                )}
              </div>

              <RouterLink
                to="/contact"
                className={`hover:text-blue-500 ${
                  isActive("/contact") ? "text-blue-500 font-bold" : ""
                }`}
                onClick={toggleMenu}
              >
                Contact Us
              </RouterLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
