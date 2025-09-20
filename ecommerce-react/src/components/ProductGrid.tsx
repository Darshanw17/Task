import React, { useState } from 'react';
import { products, sortOptions, showOptions } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onFilterChange: (filterType: string, value: any) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onFilterChange }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [showPerPage, setShowPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    onFilterChange('sort', value);
  };

  const handleShowChange = (value: number) => {
    setShowPerPage(value);
    onFilterChange('show', value);
  };

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    setViewMode(mode);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onFilterChange('page', page);
  };

  const totalPages = Math.ceil(products.length / showPerPage);

  return (
    <div className="flex-1">
      {/* Product Controls */}
      <div className="bg-background-light px-6 py-5 mb-5 flex items-center justify-between gap-5">
        <span className="font-proxima text-base text-text-dark">13 Items</span>
        
        <div className="flex items-center gap-3">
          <label className="font-proxima text-base text-text-dark">Sort By</label>
          <select 
            className="input-field"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            aria-label="Sort products by"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          <button 
            className={`p-4 transition-colors ${viewMode === 'grid' ? 'bg-primary-blue' : 'bg-gray-200'}`}
            onClick={() => handleViewModeChange('grid')}
            title="Grid View"
            aria-label="Switch to grid view"
          >
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
              <rect width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
              <rect x="9" width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
              <rect x="18" width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
              <rect y="6" width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
              <rect x="9" y="6" width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
              <rect x="18" y="6" width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
              <rect y="13" width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
              <rect x="9" y="13" width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
              <rect x="18" y="13" width="4" height="4" fill={viewMode === 'grid' ? 'white' : '#C1C8CE'}/>
            </svg>
          </button>
          <button 
            className={`p-4 transition-colors ${viewMode === 'list' ? 'bg-primary-blue' : 'bg-gray-200'}`}
            onClick={() => handleViewModeChange('list')}
            title="List View"
            aria-label="Switch to list view"
          >
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none">
              <rect width="22" height="2" fill={viewMode === 'list' ? 'white' : '#C1C8CE'}/>
              <rect y="7" width="22" height="2" fill={viewMode === 'list' ? 'white' : '#C1C8CE'}/>
              <rect y="15" width="22" height="2" fill={viewMode === 'list' ? 'white' : '#C1C8CE'}/>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <label className="font-proxima text-base text-text-dark">Show</label>
          <select 
            className="input-field"
            value={showPerPage}
            onChange={(e) => handleShowChange(Number(e.target.value))}
            aria-label="Number of products to show per page"
          >
            {showOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`mb-10 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' : 'flex flex-col gap-8'}`}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            viewMode={viewMode}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`w-17 h-17 font-proxima text-lg transition-colors ${
              page === currentPage 
                ? 'bg-primary-blue text-white' 
                : 'bg-gray-100 text-text-dark hover:bg-primary-blue hover:text-white'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
