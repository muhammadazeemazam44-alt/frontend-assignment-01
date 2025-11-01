import React from 'react'
import { useState } from 'react'
function Foodrecipcegenerator() {
  const [species,setSpecies]=useState('dog');
  const [weight,setWeight]=useState(5);

  const recipe = (() => {
    const w = Math.max(1, Number(weight)||1);
    const protein = Math.round(w * 20);
    const veg = Math.round(w * 10);
    const carbs = Math.round(w * 5);
    return {protein, veg, carbs};
  })();

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded">
      <h3 className="text-xl font-semibold mb-3">Food Recipe Generator</h3>
      <p className="text-sm text-gray-600 mb-3">This is a template — always consult your vet for exact recipes.</p>
      <select value={species} onChange={e=>setSpecies(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} className="p-2 border rounded w-full mb-3" />
      <div className="p-3 bg-gray-50 rounded">
        <p>Protein: {recipe.protein} g</p>
        <p>Vegetables: {recipe.veg} g</p>
        <p>Carbs: {recipe.carbs} g</p>
      </div>
    </div>
  )
}

export default Foodrecipcegenerator