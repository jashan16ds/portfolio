/*
  File Name: components/Home/index.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Home Page Component
*/

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className=" w-full h-full flex-grow max-w-5xl mx-auto text-center">
      <div className="">
        <h1 className="text-3xl font-bold mb-4 mt-10">
          Welcome to My Portfolio
        </h1>

        <p className="mb-4">
          Thank you for visiting my portfolio. Explore my projects and learn
          more about me.
        </p>

        <p className="mb-4">
          <strong>Mission:</strong> I am passionate about creating innovative
          solutions that make a positive impact.
        </p>

        <div className="flex justify-center items-center space-x-4">
          <Link
            to="/about"
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-orange-500"
          >
            About Me
          </Link>

          <Link
            to="/contact"
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
