import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
     <nav className="bg-white-500 shadow">    
      <div className="container mx-auto px-4 py-3 flex items-center justify-between mt-3 mb-3">
        <Link to="/" className="font-bold text-3xl text-pink-600">PetShopPak</Link>
        <div className="space-x-6 text-lg font-bold">
          <Link to="/" className="hover:text-pink-200">Home</Link>
          <Link to="/Shop" className="hover:text-pink-200">Shop</Link>
          <Link to="/About" className="hover:text-pink-200">About</Link>
          <Link to="/Services" className="hover:text-pink-200">Services</Link>
          <Link to="/Contact" className="hover:text-pink-200">Contact</Link>
        </div>
      </div>
    </nav>
      
  )
}

export default Navbar