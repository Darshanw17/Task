import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [filters, setFilters] = useState({
    brand: [],
    color: [],
    price: { min: 13.99, max: 25.99 },
    hotDeals: [],
    sort: 'name',
    show: 12,
    page: 1
  });

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background-white">
      <Header />
      <Hero />
      
      <main className="max-w-1499 mx-auto px-5 flex gap-10 mt-10">
        <Sidebar onFilterChange={handleFilterChange} />
        <ProductGrid onFilterChange={handleFilterChange} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;