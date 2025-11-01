import React from 'react'
import { useState ,useEffect } from 'react';
import API from './api';

function Petcareguides() {
   const [guides, setGuides] = useState([]);

  useEffect(() => {
    API.getGuides()
      .then((data) => setGuides(data))
      .catch(() => {});
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h3 className="text-2xl font-semibold mb-4 text-center">Pet Care Guides</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guides.map((g) => (
          <div
            key={g.id}
            className="p-4 bg-white border rounded flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <h4 className="font-semibold text-lg">{g.title}</h4>
              <p className="text-sm text-gray-600">{g.description}</p>
            </div>
            <a
              className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              href={g.file}
              download
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Petcareguides