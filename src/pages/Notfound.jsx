import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
   <div className="text-center py-20">
      <h2 className="text-3xl font-bold">404 — Page Not Found</h2>
      <p className="mt-2 text-gray-600">Return to <Link to="/" className="text-pink-600">Home</Link></p>
    </div> 
  )
}

export default Notfound