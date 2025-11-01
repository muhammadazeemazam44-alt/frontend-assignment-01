import React from 'react'
import { useState } from 'react'
const ranges = { dog: { small:[1,10], medium:[11,25], large:[26,80]}, cat: { default:[2,8] }};


function Petweightchecker() {
const [species,setSpecies]=useState('dog');
  const [size,setSize]=useState('medium');
  const [weight,setWeight]=useState('');

  const res = (() => {
    const w = parseFloat(weight);
    if(Number.isNaN(w)) return null;
    const [min,max] = species==='cat' ? ranges.cat.default : ranges.dog[size];
    if(w < min) return {status:'underweight', min, max};
    if(w > max) return {status:'overweight', min, max};
    return {status:'healthy', min, max};
  })();

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded">
      <h3 className="text-xl font-semibold mb-3">Pet Weight Checker</h3>
      <select value={species} onChange={e=>setSpecies(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      {species==='dog' && (
        <select value={size} onChange={e=>setSize(e.target.value)} className="p-2 border rounded w-full mb-2">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      )}
      <input placeholder="Weight (kg)" value={weight} onChange={e=>setWeight(e.target.value)} className="p-2 border rounded w-full mb-3" />
      <div className="p-3 bg-gray-50 rounded">
        {res ? (
          <>
            <p>Status: <strong className={res.status==='healthy'?'text-green-600':'text-red-600'}>{res.status}</strong></p>
            <p className="text-sm text-gray-600">Typical range: {res.min}kg — {res.max}kg</p>
          </>
        ) : <p className="text-gray-600">Enter a weight to see results</p>}
      </div>
    </div>
  )
}

export default Petweightchecker