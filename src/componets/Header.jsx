import React from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";


function Header() {
  return (
    <div className="bg-orange-400 text-gray-1000 text-base py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <FaPhone className="text-black-500" />
            <p>+92 300 1234567</p>
          </span>
          <span className="flex items-center space-x-1">
            <FaEnvelope className="text-black-500" />
            <p>info@happypaws.com</p>
          </span>
        </div>

        <div className="flex space-x-3">
          <a href="#" className="hover:text-orange-500"><FaFacebook className="text-2xl" /></a>
          <a href="#" className="hover:text-orange-500"><FaInstagram className="text-2xl" /></a>
        </div>
      </div>
    </div>
  )
}

export default Header