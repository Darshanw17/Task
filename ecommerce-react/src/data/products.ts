import type { Product, FilterOption, ColorOption, PriceRange, SortOption } from '@/types';


export const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-1-111e6a.png",
    isHot: true
  },
  {
    id: 2,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-2-4d03e6.png",
    isHot: true
  },
  {
    id: 3,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-3-3d822d.png",
    isHot: true
  },
  {
    id: 4,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-4.png",
    isHot: true
  },
  {
    id: 5,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-5.png",
    isHot: true
  },
  {
    id: 6,
    name: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 534.33,
    discount: 24,
    rating: 4,
    image: "/images/product-6.png",
    isHot: true
  }
];

export const brandFilters: FilterOption[] = [
  { name: "Nike", count: 99, isActive: true },
  { name: "Nike", count: 99, isActive: false },
  { name: "Adidas", count: 99, isActive: false },
  { name: "Siemens", count: 99, isActive: false }
];

export const hotDealsFilters: FilterOption[] = [
  { name: "Nike", count: 2, isActive: false },
  { name: "Airmax", count: 48, isActive: true },
  { name: "Nike", count: 14, isActive: false },
  { name: "Adidas", count: 15, isActive: false },
  { name: "Vans", count: 23, isActive: false },
  { name: "All Stars", count: 1, isActive: false },
  { name: "Adidas", count: 95, isActive: false }
];

export const colorOptions: ColorOption[] = [
  { name: "Blue", value: "color-blue", isSelected: true },
  { name: "Red", value: "color-red", isSelected: false },
  { name: "Black", value: "color-black", isSelected: false },
  { name: "Yellow", value: "color-yellow", isSelected: false },
  { name: "Pink", value: "color-pink", isSelected: false },
  { name: "Gray", value: "color-gray", isSelected: false }
];

export const priceRange: PriceRange = {
  min: 13.99,
  max: 25.99,
  currentMin: 13.99,
  currentMax: 25.99
};

export const sortOptions: SortOption[] = [
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
  { value: "rating", label: "Rating" }
];

export const showOptions = [12, 24, 48];
