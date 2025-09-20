import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-border-divider">
      <div className="max-w-1499 mx-auto px-7 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-11">
            <svg width="51" height="44" viewBox="0 0 51 44" fill="none">
              <rect width="51" height="44" rx="16" fill="#40BFFF"/>
              <path d="M14.17 12.22H36.84V31.78H14.17V12.22Z" fill="white"/>
            </svg>
          </div>
          <span className="font-poppins font-bold text-2xl text-text-dark">E-Comm</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-10">
          <a href="#" className="font-poppins font-medium text-2xl text-text-dark hover:text-primary-blue transition-colors">
            HOME
          </a>
          <a href="#" className="font-poppins font-medium text-2xl text-text-dark hover:text-primary-blue transition-colors">
            BAG
          </a>
          <a href="#" className="font-poppins font-medium text-2xl text-text-dark hover:text-primary-blue transition-colors">
            SNEAKERS
          </a>
          <a href="#" className="font-poppins font-medium text-2xl text-text-dark hover:text-primary-blue transition-colors">
            BELT
          </a>
          <a href="#" className="font-poppins font-medium text-2xl text-text-dark hover:text-primary-blue transition-colors">
            CONTACT
          </a>
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-5">
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none">
              <path d="M5.26 13.15L6.31 14.02L12.63 13.15L13.68 14.02" stroke="#22262A" strokeWidth="2" strokeLinecap="round"/>
              <path d="M0 0L16.84 10.52" stroke="#22262A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-proxima text-xl text-text-secondary">0 Items</span>
            <span className="font-proxima text-xl text-text-secondary opacity-50">$0.00</span>
          </div>
        </div>
      </div>
      <div className="h-1 bg-border-divider"></div>
    </header>
  );
};

export default Header;
