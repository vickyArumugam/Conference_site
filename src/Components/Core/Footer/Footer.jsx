import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-gray-700 pb-12  md:ml-20 lg:ml-30  xl:ml-52">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              About Us
            </h3>
            <p className="text-[16px] leading-relaxed lg:w-46 xl:w-72 sm:mb-2 ">
              We provide cutting-edge technology insights and solutions to help
              individuals and businesses thrive in the digital age.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left ">
            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              Contact Us
            </h3>
            <p className="text-sm">
              <a
                href="mailto:support@yourbrand.com"
                className="hover:text-blue-400 transition text-[16px]"
              >
                icasmet@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <a
                href="tel:+1234567890"
                className="hover:text-blue-400 transition text-[16px]"
              >
                +91 8870301652
              </a>
            </p>
            <p className="text-sm sm:mb-2 text-[16px]">
              123 Vit Street, Vellore, Tamil Nadu, 632014
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/about_conference">About Us</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact">Contact Us</RouterLink>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mt-6 mb-4">
              Follow Us
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-5 lg:w-20">
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-2xl transition hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-2xl transition hover:text-gray-300"
              >
                <TbBrandX />
              </a>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-2xl transition hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-2xl transition hover:text-blue-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-[16px] pt-6">
          &copy; {new Date().getFullYear()}
          {"  "}
          <span className="text-white font-semibold"> ICASMET </span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
