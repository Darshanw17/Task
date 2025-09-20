import React, { useState } from 'react';
import type { PriceRange, Product, FilterOption, ColorOption, SortOption } from "@/types";

import { brandFilters, hotDealsFilters, colorOptions, priceRange } from '../data/products';

interface SidebarProps {
  onFilterChange: (filterType: string, value: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [brands, setBrands] = useState<FilterOption[]>(brandFilters);
  const [hotDeals, setHotDeals] = useState<FilterOption[]>(hotDealsFilters);
  const [colors, setColors] = useState<ColorOption[]>(colorOptions);
  const [price, setPrice] = useState<PriceRange>(priceRange);

  const handleBrandToggle = (index: number) => {
    const updatedBrands = [...brands];
    updatedBrands[index].isActive = !updatedBrands[index].isActive;
    setBrands(updatedBrands);
    onFilterChange('brand', updatedBrands);
  };

  const handleHotDealsToggle = (index: number) => {
    const updatedHotDeals = [...hotDeals];
    updatedHotDeals[index].isActive = !updatedHotDeals[index].isActive;
    setHotDeals(updatedHotDeals);
    onFilterChange('hotDeals', updatedHotDeals);
  };

  const handleColorSelect = (index: number) => {
    const updatedColors = colors.map((color, i) => ({
      ...color,
      isSelected: i === index
    }));
    setColors(updatedColors);
    onFilterChange('color', updatedColors);
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    const updatedPrice = { ...price, [`current${type === 'min' ? 'Min' : 'Max'}`]: value };
    setPrice(updatedPrice);
    onFilterChange('price', updatedPrice);
  };

  return (
    <div>
    <aside className="w-88 bg-background-light p-6 h-fit">
      {/* Brand Filter */}
      <div className="mb-10">
        <h3 className="font-poppins font-medium text-xl text-text-dark mb-6">BRAND</h3>
        <div className="flex flex-col gap-5">
          {brands.map((brand, index) => (
            <label 
              key={index}
              className={`filter-option ${brand.isActive ? 'active' : ''}`}
              onClick={() => handleBrandToggle(index)}
            >
              <input 
                type="checkbox" 
                checked={brand.isActive}
                onChange={() => {}}
                className="hidden"
              />
              <span className="font-proxima text-lg text-text-secondary">{brand.name}</span>
              <span className={`font-proxima text-lg ${brand.isActive ? 'text-primary-blue' : 'text-text-dark opacity-35'}`}>
                {brand.count}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-10">
        <h3 className="font-poppins font-medium text-xl text-text-dark mb-6">COLOR</h3>
        <div className="flex gap-5 flex-wrap">
          {colors.map((color, index) => (
            <div 
              key={index}
              className={`${color.isSelected ? 'selected' : ''}`}
              onClick={() => handleColorSelect(index)}
            >
              <div 
                className={`color-circle ${color.value} ${color.isSelected ? 'border-2 border-primary-blue' : ''}`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-10">
        <h3 className="font-poppins font-medium text-xl text-text-dark mb-6">PRICES</h3>
        <div className="mt-5">
          <span className="font-proxima text-lg text-text-secondary mb-4 block">
            Range: ${price.currentMin.toFixed(2)} - ${price.currentMax.toFixed(2)}
          </span>
          <div className="mt-5">
            <div className="relative h-1.5 bg-text-dark opacity-10 rounded-sm">
              <div className="absolute bg-slider-track rounded-sm left-1/4 w-1/2 h-full"></div>
              <div className="absolute -top-1.5 w-4 h-4 bg-slider-handle border-2 border-white rounded-full cursor-pointer left-1/4"></div>
              <div className="absolute -top-1.5 w-4 h-4 bg-slider-handle border-2 border-white rounded-full cursor-pointer left-3/4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hot Deals */}
      <div className="mb-10">
        <h3 className="font-poppins font-medium text-xl text-text-dark mb-6">Hot Deals</h3>
        <div className="flex flex-col gap-5">
          {hotDeals.map((deal, index) => (
            <label 
              key={index}
              className={`filter-option ${deal.isActive ? 'active' : ''}`}
              onClick={() => handleHotDealsToggle(index)}
            >
              <input 
                type="checkbox" 
                checked={deal.isActive}
                onChange={() => {}}
                className="hidden"
              />
              <span className="font-proxima text-lg text-text-secondary">{deal.name}</span>
              <span className={`font-proxima text-lg ${deal.isActive ? 'text-primary-blue' : 'text-text-dark opacity-35'}`}>
                {deal.count}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* More Button */}
      <div className="text-center mt-10">
        <button className="btn-secondary">MORE</button>
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;
