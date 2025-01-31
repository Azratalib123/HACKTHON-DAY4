
'use client';

import React, { useState } from "react";

interface PriceFilterProps {
  onFilterChange: (priceRange: [number, number]) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (e.target.name === "minPrice" && value <= priceRange[1]) {
      setPriceRange([value, priceRange[1]]);
    } else if (e.target.name === "maxPrice" && value >= priceRange[0]) {
      setPriceRange([priceRange[0], value]);
    }
  };

  const handleApply = () => {
    
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-black text-center bg-stone-100">Filter by Price</h3>

      <div className="space-y-1">
   
        <button
          onClick={() => onFilterChange([0, 100])}
          className="w-full px-4 py-2 rounded-md text-sm hover:bg-stone-100 text-black font-bold"
        >
          Below $100
        </button>
        <button
          onClick={() => onFilterChange([100, 500])}
          className="w-full px-4 py-2 rounded-md text-sm hover:bg-stone-100 text-black font-bold"
        >
          $100 - $500
        </button>
        <button
          onClick={() => onFilterChange([500, 1000])}
          className="w-full px-4 py-2 rounded-md text-sm hover:bg-stone-100 text-black font-bold"
        >
          $500 - $1000
        </button>
        <button
          onClick={() => onFilterChange([1000, 10000])}
          className="w-full px-4 py-2 rounded-md text-sm hover:bg-stone-100 text-black font-bold"
        >
          Above $1000
        </button>

        {/* Price Range Slider */}
        <div className="mt-4">
          <div className="flex justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <input
            type="range"
            name="minPrice"
            min={0}
            max={1000}
            value={priceRange[0]}
            onChange={handleSliderChange}
            className="w-full"
          />
          <input
            type="range"
            name="maxPrice"
            min={0}
            max={1000}
            value={priceRange[1]}
            onChange={handleSliderChange}
            className="w-full"
          />
        </div>

        <button
          onClick={handleApply}
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-400">
          Apply Range
        </button>
      </div>
    </div>
  );
};
export default PriceFilter;




