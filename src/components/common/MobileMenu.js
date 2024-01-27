/*
  File Name: components/common/MobileMenu.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Mobile Menu Component
*/
import { NavLink, useLocation } from "react-router-dom";

export default function MobileMenu({ showMobileMenu, toggleMobileMenu }) {
  const location = useLocation();

  if (!showMobileMenu) return null;

  return (
    <div
      className={`bg-gray-800 p-4 fixed top-14 right-0 h-screen w-64 z-30 md:hidden transform transition-transform duration-300 ease-in-out ${
        showMobileMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className={`grid grid-cols-1 space-y-2 `}>
        <NavLink
          to="/"
          className={`${
            location.pathname === "/" ? "text-orange-500" : "text-white"
          } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          onClick={() => toggleMobileMenu()}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`${
            location.pathname === "/about" ? "text-orange-500" : "text-white"
          } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          onClick={() => toggleMobileMenu()}
        >
          About
        </NavLink>
        <NavLink
          to="projects"
          className={`${
            location.pathname === "/projects" ? "text-orange-500" : "text-white"
          } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          onClick={() => toggleMobileMenu()}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={`${
            location.pathname === "/contact" ? "text-orange-500" : "text-white"
          } hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium`}
          onClick={() => toggleMobileMenu()}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}
