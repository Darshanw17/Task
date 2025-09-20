import React from 'react';
import type { Product } from "@/types";


interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-base ${i <= rating ? 'star-filled' : 'star-empty'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  if (viewMode === 'list') {
    return (
      <div className="product-card flex flex-row p-5 items-center">
        <div className="w-50 h-50 flex-shrink-0 mr-8 relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.isHot && (
            <div className="absolute top-0.5 left-0 bg-badge text-white font-proxima text-lg px-3.5 py-1">
              HOT
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-1">
            {renderStars(product.rating)}
          </div>
          <h3 className="font-poppins font-bold text-lg text-neutral-dark text-left">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-poppins font-bold text-lg text-primary-blue tracking-wide">
              ${product.price.toFixed(2)}
            </span>
            <span className="font-poppins text-sm text-neutral-grey line-through tracking-wider">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="font-poppins font-bold text-sm text-primary-red tracking-wider">
              {product.discount}% Off
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card">
      <div className="relative w-full h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isHot && (
          <div className="absolute top-0.5 left-0 bg-badge text-white font-proxima text-lg px-3.5 py-1">
            HOT
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-center gap-1 mb-4">
          {renderStars(product.rating)}
        </div>
        <h3 className="font-poppins font-bold text-lg text-neutral-dark text-center mb-4 tracking-wide">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <span className="font-poppins font-bold text-lg text-primary-blue tracking-wide">
            ${product.price.toFixed(2)}
          </span>
          <span className="font-poppins text-sm text-neutral-grey line-through tracking-wider">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="font-poppins font-bold text-sm text-primary-red tracking-wider">
            {product.discount}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
