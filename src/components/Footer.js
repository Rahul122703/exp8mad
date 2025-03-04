import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="mb-4 md:mb-0 text-lg font-semibold">
          ShopEasy &copy; 2025. All rights reserved.
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400 text-lg">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-400 text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400 text-lg">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
