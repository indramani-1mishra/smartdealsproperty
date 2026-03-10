import React, { useState } from 'react';
import { Search } from 'lucide-react';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    type: '',
    city: '',
    minArea: '',
    maxArea: '',
    bedrooms: '',
    bathrooms: '',
    priceRange: [0, 5000000],
  });

  const handleInputChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    const newFilters = { ...filters, priceRange: [0, value] };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
      <h3 className="text-2xl font-bold mb-6 border-b-4 border-orange-500 pb-2 inline-block">
        Filters
      </h3>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search properties by title ..."
            value={filters.search}
            onChange={(e) => handleInputChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Status Dropdown */}
      <div className="mb-6">
        <select
          value={filters.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
        >
          <option value="">Select Status</option>
          <option value="for-sale">For Sale</option>
          <option value="for-rent">For Rent</option>
          <option value="new-launch">New Launch</option>
          <option value="under-construction">Under Construction</option>
        </select>
      </div>

      {/* Type Dropdown */}
      <div className="mb-6">
        <select
          value={filters.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
        >
          <option value="">Select Type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="plots">Plots</option>
          <option value="villa">Villa</option>
          <option value="apartment">Apartment</option>
        </select>
      </div>

      {/* City Dropdown */}
      <div className="mb-6">
        <select
          value={filters.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
        >
          <option value="">Select City</option>
          <option value="noida">Noida</option>
          <option value="greater-noida">Greater Noida</option>
          <option value="delhi">Delhi</option>
          <option value="gurgaon">Gurgaon</option>
          <option value="ghaziabad">Ghaziabad</option>
        </select>
      </div>

      {/* Area Range */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Min Area ()"
          value={filters.minArea}
          onChange={(e) => handleInputChange('minArea', e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        />
        <input
          type="number"
          placeholder="Max Area ()"
          value={filters.maxArea}
          onChange={(e) => handleInputChange('maxArea', e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Bedrooms & Bathrooms */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Bedrooms"
          value={filters.bedrooms}
          onChange={(e) => handleInputChange('bedrooms', e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        />
        <input
          type="number"
          placeholder="Bathrooms"
          value={filters.bathrooms}
          onChange={(e) => handleInputChange('bathrooms', e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Price Range Slider */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range: ₹0 - ₹{filters.priceRange[1].toLocaleString('en-IN')}
        </label>
        <input
          type="range"
          min="0"
          max="5000000"
          step="100000"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          const resetFilters = {
            search: '',
            status: '',
            type: '',
            city: '',
            minArea: '',
            maxArea: '',
            bedrooms: '',
            bathrooms: '',
            priceRange: [0, 5000000],
          };
          setFilters(resetFilters);
          onFilterChange?.(resetFilters);
        }}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
