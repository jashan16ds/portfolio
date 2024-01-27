/*
  File Name: components/common/NavigationBar.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Navigation Bar Component
*/
import { NavLink, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function NavigationBar() {
  const location = useLocation();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 shadow z-10">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl flex items-center justify-center">
          <NavLink to="/">
            <img
              src="/logo/logo.png"
              alt=""
              className="object-cover w-[32px] h-[32px]"
            />
          </NavLink>
        </div>
        {/* hidden on small devices */}
        <div className={`hidden md:flex space-x-4`}>
          <NavLink
            to="/"
            className={`${
              location.pathname === "/" ? "text-orange-500" : "text-white"
            } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`${
              location.pathname === "/about" ? "text-orange-500" : "text-white"
            } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          >
            About
          </NavLink>
          <NavLink
            to="projects"
            className={`${
              location.pathname === "/projects"
                ? "text-orange-500"
                : "text-white"
            } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className={`${
              location.pathname === "/services"
                ? "text-orange-500"
                : "text-white"
            } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={`${
              location.pathname === "/contact"
                ? "text-orange-500"
                : "text-white"
            } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          >
            Contact
          </NavLink>
        </div>

        {/* mobile menu */}
        <button
          className="text-white hover:text-gray-300 text-2xl focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
        >
          <FiMenu size="" />
        </button>
        <MobileMenu
          showMobileMenu={showMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </nav>
  );
}
