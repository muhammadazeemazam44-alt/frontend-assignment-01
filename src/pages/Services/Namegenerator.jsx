import React from 'react'
import { useState } from 'react'
const names = {
  dog: ['Buddy','Max','Bella','Luna','Charlie','Cooper','Rocky','Milo'],
  cat: ['Luna','Milo','Oliver','Bella','Simba','Nala','Chloe','Leo']
};
function Namegenerator() {
  const [species,setSpecies]=useState('dog');
  const [count,setCount]=useState(6);
  const pick = () => {
    const pool = names[species] || [];
    return [...pool].sort(()=>Math.random()-0.5).slice(0,count);
  };
  const list = pick();

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded">
      <h3 className="text-xl font-semibold mb-3">Pet Name Generator</h3>
      <select value={species} onChange={e=>setSpecies(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <input type="number" value={count} onChange={e=>setCount(Number(e.target.value))} className="p-2 border rounded w-full mb-3" />
      <div className="grid grid-cols-2 gap-2">
        {list.map(n=> <div key={n} className="p-2 border rounded">{n}</div>)}
      </div>
    </div>
  )
}

export default Namegenerator