import React from 'react';
import { useLocation } from 'react-router-dom';

const DataPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as { cars: any[] } | null;
  const cars = state?.cars || [];

  if (!state || !cars.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">No data available</h1>
        <p className="mt-4">Please go back to the <a href="/" className="text-blue-500 underline">Home page</a> or the <a href="/cars" className="text-blue-500 underline">Cars list</a> to load data.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Processed Car Data</h1>
      <div className="overflow-auto h-[calc(100vh-200px)] border border-gray-200 rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b sticky top-0 bg-gray-100 z-50">#</th>
              {cars.length > 0 &&
                Object.keys(cars[0]).map((key) => (
                  <th key={key} className="py-2 px-4 border-b sticky top-0 bg-gray-100 z-50">
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                {Object.values(car).map((value: any, i) => (
                  <td key={i} className="py-2 px-4 border-b">
                    {typeof value === 'object' ? JSON.stringify(value) : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPage;
