import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-gray-700 pb-12 lg:ml-52">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mt-2 mb-2">About Us</h3>
            <p className="text-sm leading-relaxed lg:w-72 sm:mb-2">
              We provide cutting-edge technology insights and solutions to help
              individuals and businesses thrive in the digital age.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              Contact Us
            </h3>
            <p className="text-sm">
              <a
                href="mailto:support@yourbrand.com"
                className="hover:text-blue-400 transition"
              >
                support@yourbrand.com
              </a>
            </p>
            <p className="text-sm">
              <a
                href="tel:+1234567890"
                className="hover:text-blue-400 transition"
              >
                +123 456 7890
              </a>
            </p>
            <p className="text-sm sm:mb-2">1234 Your Street, Your City</p>
          </div>

          {/* Navigation Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition mb-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mt-6 mb-4">Follow Us</h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-5 lg:w-20">
              <a
                href="#"
                className="text-gray-400 text-2xl transition hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 text-2xl transition hover:text-gray-300"
              >
                <TbBrandX />
              </a>
              <a
                href="#"
                className="text-gray-400 text-2xl transition hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 text-2xl transition hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm pt-6">
          &copy; {new Date().getFullYear()}{"  "}
          <span className="text-white font-semibold"> V.R.S. College of Engineering </span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// Copyright 2025 - V.R.S. College of Engineering and Technology