// types/index.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    image: string;
    isHot: boolean;
  }
  
  export interface ColorOption {
    name: string;
    value: string;
    isSelected: boolean;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }
  
  export interface FilterOption {
    name: string;
    count: number;
    isActive: boolean;
  }
  
  export interface PriceRange {
    min: number;
    max: number;
    currentMin: number;
    currentMax: number;
  }
  
  export interface SortOption {
    value: string;
    label: string;
  }
  
  export interface ViewMode {
    type: 'grid' | 'list';
    label: string;
  }
  