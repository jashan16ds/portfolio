/*
  File Name: components/About/index.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: About Page / Component
*/

import { FiDownload, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function About() {
  return (
    <section className="relative container mx-auto p-4 text-center">
      <div className="fixed -right-[30px] top-1/2 -translate-y-1/2 p-2 transform -rotate-90">
        <a
          href="/files/Jashandeep_Singh_Resume.pdf"
          className="relative text-white py-2 px-4 rounded   w-fit h-fit"
          download={"Jashandeep Singh Resume"}
        >
          <span className="relative bg-orange-300  flex items-center px-2 py-1 rounded gap-2 shadow opacity-75">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <FiDownload />
            <span>My Resume</span>
          </span>
        </a>
      </div>
      <div className="flex flex-col items-center space-x-4 mb-4 space-y-1">
        <img
          src="/me.jpg"
          alt="Jashandeep Singh"
          className="rounded-full object-cover w-32 h-32 border-2 p-1"
        />
        <div>
          <h2 className="text-xl font-bold">Jashandeep Singh</h2>
          <p>
            Software Developer and Tester | Health Informatics Technology
            Student
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="flex items-center px-2 py-1 rounded h-full gap-2 shadow">
            <FiMail />
            <span>jsin1761@my.centennialcollege.ca</span>
          </div>
          <div className="flex items-center px-2 py-1 rounded h-full gap-2 shadow">
            <FiPhone />
            <span>437-258-0899</span>
          </div>
          <div className="flex items-center px-2 py-1 rounded h-full gap-2 shadow">
            <FiMapPin />
            <span>40 Treasure Drive, Brampton, ON L7A 3L1</span>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-orange-500 mb-4">
        A Gist About Me
      </h1>

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Experience */}
        <div className="md:col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Professional Experience</h2>
          <p>
            I am a dedicated Software Developer and Tester with over 2 years of
            professional work experience.
          </p>
        </div>

        {/* Education */}
        <div className="md:col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <p>
            Currently, I am pursuing an advanced diploma in Health Informatics
            Technology at Centennial College.
          </p>
        </div>

        {/* Expertise */}
        <div className="md:col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Expertise</h2>
          <p>
            My expertise includes designing user-friendly software, both
            frontend and backend development, and creating software applications
            from concept to design to testing.
          </p>
        </div>
      </div>
    </section>
  );
}
