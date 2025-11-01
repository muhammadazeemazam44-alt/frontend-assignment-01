import React from 'react'
import { useState } from 'react';
 const dogYearFactors = { first:15, second:9, later: { small:4, medium:5, large:6 }};

function Petagecalculator() {


  const [species,setSpecies] = useState('dog');
  const [size,setSize] = useState('medium');
  const [years,setYears] = useState(1);

  const calc = () => {
    const y = parseFloat(years)||0;
    if(species==='dog'){
      if(y<=1) return Math.round(y*dogYearFactors.first);
      if(y<=2) return dogYearFactors.first + Math.round((y-1)*dogYearFactors.second);
      return dogYearFactors.first + dogYearFactors.second + Math.round((y-2)*dogYearFactors.later[size]);
    }
    if(species==='cat'){
      if(y<=1) return 15;
      if(y<=2) return 24;
      return 24 + Math.round((y-2)*4);
    }
    return Math.round(y*7);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded">
      <h3 className="text-xl font-semibold mb-3">Pet Age Calculator</h3>
      <select value={species} onChange={e=>setSpecies(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="other">Other</option>
      </select>
      {species==='dog' && (
        <select value={size} onChange={e=>setSize(e.target.value)} className="p-2 border rounded w-full mb-2">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      )}
      <input type="number" value={years} onChange={e=>setYears(e.target.value)} step="0.1" className="p-2 border rounded w-full mb-3" />
      <div className="p-3 bg-gray-50 rounded">
        Human-equivalent age: <strong>{calc()}</strong> years
      </div>
    </div> 
  );
}


export default Petagecalculator