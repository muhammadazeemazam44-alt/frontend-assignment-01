import React from 'react'
import {   Link } from 'react-router-dom';

function Servicecard({title,desc,to}) {
  return (
    <Link to={to} className="block p-4 border rounded-lg hover:shadow-md bg-white">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </Link>
  )
}

export default Servicecard