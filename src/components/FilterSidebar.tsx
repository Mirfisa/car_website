import React from 'react';

const FilterSidebar: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Filters</h2>
      
      {/* Search Bar */}
      <div className="mb-6">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
        <input type="text" name="search" id="search" className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="e.g., Toyota Camry" />
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
        <select id="brand" name="brand" className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>All Brands</option>
          <option>Toyota</option>
          <option>Honda</option>
          <option>Nissan</option>
          <option>Ford</option>
          <option>Chevrolet</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div>
        <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">Price Range</label>
        <input type="range" id="price-range" name="price-range" min="10000" max="50000" step="1000" className="mt-1 block w-full" />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>$10,000</span>
          <span>$50,000</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
