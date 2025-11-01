import React from 'react'


function Printablecharts() {
  const printDiv = (id) => {
    const content = document.getElementById(id);
    if (!content) return alert("Element not found!");

    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            body {
              font-family: sans-serif;
              padding: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f5f5f5;
            }
          </style>
        </head>
        <body>
          ${content.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();

    // Wait for content to load before printing
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 py-10">
      <h3 className="text-2xl font-semibold text-center">Printable Charts</h3>

      <div
        id="feeding-chart"
        className="p-4 bg-white border rounded shadow-sm"
      >
        <h4 className="font-semibold mb-2">Feeding Schedule</h4>
        <table className="w-full text-sm mt-2 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Food</th>
              <th className="border border-gray-300 p-2">Portion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">08:00</td>
              <td className="border border-gray-300 p-2">Dry Food</td>
              <td className="border border-gray-300 p-2">50g</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">18:00</td>
              <td className="border border-gray-300 p-2">Wet Food</td>
              <td className="border border-gray-300 p-2">75g</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <button
          onClick={() => printDiv("feeding-chart")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Print Feeding Chart
        </button>
      </div>
    </div>
  )
}

export default Printablecharts