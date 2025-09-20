import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary-blue py-15">
      <div className="max-w-1069 mx-auto px-15 flex items-center gap-15">
        <div className="flex-1">
          <h1 className="font-poppins font-medium text-3xl text-white mb-5 leading-tight">
            Adidas Men Running<br />
            Sneakers
          </h1>
          <p className="font-poppins text-sm text-white mb-8">
            Performance and design. Taken right to the edge.
          </p>
          <a 
            href="#" 
            className="inline-block font-poppins font-semibold text-xs text-white uppercase tracking-wide relative hover:opacity-80 transition-opacity"
          >
            SHOP NOW
            <span className="absolute -bottom-0.5 left-0 w-10 h-0.5 bg-white"></span>
          </a>
        </div>
        <div className="flex-shrink-0">
          <img 
            src="/images/hero-shoe.png" 
            alt="Adidas Men Running Sneakers" 
            className="w-110 h-56 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
