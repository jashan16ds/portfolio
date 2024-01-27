/*
  File Name: components/Contact/index.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Contact Form/Page Component
*/
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  function submitForm(e) {
    e.preventDefault();
    console.log("Form data =>", formData);
    showToast("Your message has been sent", "success", () => navigate("/"));
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:px-8 lg:px-16">
      <h1 className="text-3xl font-bold mb-4 text-orange-500">Contact Us</h1>
      <p>Feel free to reach out to us using the form below:</p>

      <form className="mt-4" method="POST" onSubmit={submitForm}>
        <label className="block mb-2" htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            required
            onChange={handleInput}
          />
        </label>

        <label className="block mb-2 mt-2" htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            required
            onChange={handleInput}
          />
        </label>

        <label className="block mb-2 mt-2" htmlFor="message">
          Message:
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border rounded"
            placeholder="Your Message"
            required
            onChange={handleInput}
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-orange-500 hover:text-gray-800 mt-4"
        >
          <span className="flex items-center gap-1 ">
            <FiSend />
            Send Message
          </span>
        </button>
      </form>
    </div>
  );
}
