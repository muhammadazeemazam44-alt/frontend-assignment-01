import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';


function Contact(){
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Example POST request to API endpoint
      const response = await fetch("https://yourapi.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-6">
        We will answer any questions you may have about our online sales, rights or partnership service right here.
      </p>

      <div className="text-center mb-11">
        <h2 className="text-xl font-semibold">Store Timing</h2>
        <p className="text-gray-900 mt-2 space-x-6">
          Monday to Thursday and Saturday: 09:00 am – 08:00 pm<br />
          Friday: 09:00 pm – 1:30 pm<br />
          Sunday: Closed
        </p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-12 text-center w-full max-w-4xl">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600 text-base">
            B-3 Block 3, Gulistan-e-Jauhar, Karachi, Pakistan.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600 text-base">‪+92 33 33 811 332‬</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-800 text-base">
  <a
    href="mailto:petshoppak@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:underline"
  >
    petshoppak@gmail.com
  </a>
</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Website</h3>
          <p className="text-gray-800 text-base">
  <a
    href="https://petshoppak.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:underline"
  >
    petshoppak.com
  </a>
</p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg mb-12"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Send Us a Message</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Send Message
        </button>
        {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
      </form>

      {/* Google Map */}
      <div className="w-full max-w-6xl h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.174867721635!2d67.11436687447433!3d24.85747884584309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ee65bb8b60f%3A0x89e05034b99dd8dc!2sPETSHOPPAK.COM!5e0!3m2!1sen!2s!4v1695748194378!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location"
        ></iframe>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923333811332"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.79 11.79 0 0 0 12 0C5.38 0 .07 5.3.07 11.92a11.7 11.7 0 0 0 1.61 6.02L0 24l6.23-1.63a11.86 11.86 0 0 0 5.77 1.48h.01c6.62 0 11.93-5.31 11.93-11.93a11.87 11.87 0 0 0-3.42-8.44zM12 21.54h-.01a9.63 9.63 0 0 1-4.91-1.34l-.35-.21-3.7.96.99-3.6-.23-.37a9.68 9.68 0 0 1-1.49-5.09c0-5.33 4.34-9.67 9.68-9.67a9.63 9.63 0 0 1 6.83 2.84 9.67 9.67 0 0 1 2.84 6.83c0 5.34-4.34 9.68-9.67 9.68zm5.33-7.23c-.29-.15-1.7-.84-1.97-.93-.27-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.15-1.24-.46-2.36-1.47-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.13-.23-.55-.47-.48-.65-.49h-.55c-.19 0-.51.07-.77.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.81 1.2 3 .15.19 2.06 3.15 4.99 4.42.7.3 1.25.48 1.67.61.7.22 1.34.19 1.85.12.56-.08 1.7-.7 1.94-1.38.24-.68.24-1.27.17-1.38-.07-.11-.26-.18-.55-.33z" />
        </svg>
      </a>
    </div>

 

  );
} 


export default Contact