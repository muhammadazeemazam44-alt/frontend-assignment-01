import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
     <footer className="bg-orange-500 text-black pt-10 pb-6 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* 🐾 Logo & About */}
        <div>
          <h2 className="text-2xl font-extrabold mb-3">PetShopPak</h2>
          <p className="text-black/90 mb-4">
            Caring for your pets with love, quality, and trust. Visit us for grooming, food, and accessories!
          </p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-yellow-200"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-200"><FaInstagram /></a>
          </div>
        </div>

        {/* 📍 Address & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="flex items-center space-x-2 mb-2">
            <FaMapMarkerAlt className="text-yellow-200" />
            <span>123 Pet Street, Karachi, Pakistan</span>
          </p>
          <p className="flex items-center space-x-2 mb-2">
            <FaPhone className="text-yellow-200" />
            <span>+92 300 1234567</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaEnvelope className="text-yellow-200" />
            <span>info@PetShopPak.com</span>
          </p>
        </div>

        {/* ⏰ Working Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaClock className="text-yellow-200" />
              <span>Mon - Fri: 9:00 AM - 8:00 PM</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClock className="text-yellow-200" />
              <span>Saturday: 10:00 AM - 6:00 PM</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClock className="text-yellow-200" />
              <span>Sunday: Closed</span>
            </li>
          </ul>
        </div>

        {/* 🧭 Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li><Link to="/" className="hover:text-yellow-200">Home</Link></li>
            <li><Link to="/shop" className="hover:text-yellow-200">Shop</Link></li>
            <li><Link to="/services" className="hover:text-yellow-200">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-200">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* 🔸 Bottom Bar */}
      <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} HappyPaws. All rights reserved.
      </div>
    </footer>
    
  )
}

export default Footer