import React from 'react'
import {Link} from 'react-router-dom'
import { useState , useEffect } from 'react';
import {getProducts} from './Services/api';

function Shop() {
  
   const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => console.error("Error fetching pets:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-orange-600 text-center">
        🐾 Pet Shop — Our Lovely Companions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-3 text-lg font-semibold text-gray-800">
              {p.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{p.description}</p>
            <p className="text-orange-600 font-bold mb-3">
              Rs. {p.price.toLocaleString()}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop