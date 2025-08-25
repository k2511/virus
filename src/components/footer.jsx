import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Anitvirus<span className="text-[#65A30D]">Guard</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Protecting your devices with next-gen antivirus & cybersecurity
            solutions. Fast, reliable, and always up to date.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#65A30D]">Antivirus Pro</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Internet Security</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Total Security Suite</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Free Antivirus</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#65A30D]">About Us</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Careers</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Blog</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#65A30D]">Help Center</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Downloads</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Report an Issue</a></li>
            <li><a href="#" className="hover:text-[#65A30D]">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
          
          {/* Copyright */}
          <p className="text-sm">&copy; {new Date().getFullYear()} Antivirus. All rights reserved.</p>

          {/* Socials */}
          <div className="flex space-x-6 mt-4 md:mt-0 text-lg">
            <a href="#" className="hover:text-[#65A30D]"><FaGlobe /></a>
            <a href="#" className="hover:text-[#65A30D]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#65A30D]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#65A30D]"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
