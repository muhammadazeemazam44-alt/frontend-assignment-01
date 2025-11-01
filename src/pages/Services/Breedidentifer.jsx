import React from 'react'
import API from './api'
import { useState } from 'react';
function breedidentifer() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const onFile = async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));

    const fd = new FormData();
    fd.append('image', f);
    setResult(null);

    try {
      // ✅ Correct API call (no need for axios-like syntax)
      const res = await API.postBreed(fd);
      setResult(res);
    } catch (err) {
      console.error('Breed identifier error:', err);
      setResult({ error: true });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h3 className="text-2xl font-semibold mb-3 text-center">🐾 Breed Identifier</h3>

      <input
        type="file"
        accept="image/*"
        onChange={onFile}
        className="block w-full border p-2 rounded-md cursor-pointer"
      />

      {preview && (
        <img
          src={preview}
          alt="Uploaded preview"
          className="mt-4 max-h-56 mx-auto object-contain rounded shadow"
        />
      )}

      <div className="mt-5">
        {result ? (
          result.error ? (
            <div className="text-red-600 text-center">❌ Error identifying breed</div>
          ) : (
            result.predictions?.map((p) => (
              <div
                key={p.breed}
                className="p-3 bg-white border rounded mb-2 flex justify-between shadow-sm"
              >
                <div className="font-medium">{p.breed}</div>
                <div className="text-gray-700">{Math.round(p.confidence * 100)}%</div>
              </div>
            ))
          )
        ) : (
          <p className="text-gray-600 text-center">Upload a pet photo to identify its breed.</p>
        )}
      </div>
    </div>
  )
}

export default breedidentifer