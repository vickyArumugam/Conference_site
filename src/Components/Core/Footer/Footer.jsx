import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        
        <div className="flex flex-wrap justify-between items-start  border-b border-gray-700 pb-6 ml-[150px]">
          
          {/* About Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm leading-relaxed w-44">
              We provide cutting-edge technology insights and solutions to help individuals and businesses thrive in the digital age.
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm"><a href="mailto:support@yourbrand.com" className="hover:text-blue-400 transition">support@yourbrand.com</a></p>
            <p className="text-sm"><a href="tel:+1234567890" className="hover:text-blue-400 transition">+123 456 7890</a></p>
            <p className="text-sm">1234 Your Street, Your City</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-5">
              <a href="#" className="text-gray-400 text-2xl transition hover:text-blue-600"><FaFacebook /></a>
              <a href="#" className="text-gray-400 text-2xl transition hover:text-gray-300"><TbBrandX /></a>
              <a href="#" className="text-gray-400 text-2xl transition hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="text-gray-400 text-2xl transition hover:text-blue-700"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm pt-4">
          &copy; {new Date().getFullYear()} <span className="text-white font-semibold">YourBrand</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
