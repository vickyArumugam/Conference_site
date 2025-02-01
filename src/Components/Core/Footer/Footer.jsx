import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around gap-8 text-center md:text-left">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="text-gray-400 text-xl transition-colors duration-300 hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 text-xl transition-colors duration-300 hover:text-gray-300"
              >
                <TbBrandX />
              </a>
              <a
                href="#"
                className="text-gray-400 text-xl transition-colors duration-300 hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 text-xl transition-colors duration-300 hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-sm">
              <a
                href="mailto:support@yourbrand.com"
                className="hover:text-white transition-colors"
              >
                Email: support@yourbrand.com
              </a>
            </p>
            <p className="text-sm">
              <a
                href="tel:+1234567890"
                className="hover:text-white transition-colors"
              >
                Phone: +123 456 7890
              </a>
            </p>
            <p className="text-sm">Address: 1234 Your Street, Your City</p>
          </div>
        </div>

        {/* Social Media Section */}

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()}  All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
