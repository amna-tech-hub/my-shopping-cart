import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { footerLink } from "../constants/footerLink";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand/Logo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-900">AmnaStore</h2>
            <p className="text-gray-500 text-sm">
              Modern web development projects with a touch of creativity.
              Building the future of e-commerce, one component at a time.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-700 text-sm transition"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-700 text-sm transition"
                >
                  Jewelry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-700 text-sm transition"
                >
                  Men's Clothing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-700 text-sm transition"
                >
                  Women's Clothing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-700 text-sm transition"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-700 text-sm transition"
                >
                  Safety Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-teal-700 text-sm transition"
                >
                  Cancellation Options
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link to="#"></Link>{" "}
              <FaFacebook className="text-gray-400 hover:text-teal-700 cursor-pointer text-xl transition" />
              <Link to={footerLink.InstaLink}>
                {" "}
                <FaInstagram className="text-gray-400 hover:text-teal-700 cursor-pointer text-xl transition" />
              </Link>
              <Link to="#">
                <FaTwitter className="text-gray-400 hover:text-teal-700 cursor-pointer text-xl transition" />
              </Link>
              <Link to={footerLink.LinkdinLink}>
                <FaLinkedin className="text-gray-400 hover:text-teal-700 cursor-pointer text-xl transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 AmnaStore. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
