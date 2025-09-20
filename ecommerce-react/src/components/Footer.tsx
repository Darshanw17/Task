import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-bg mt-20 pt-15">
      <div className="max-w-1499 mx-auto px-38 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-9">
              <svg width="39" height="36" viewBox="0 0 39 36" fill="none">
                <rect width="39" height="36" rx="16" fill="#40BFFF"/>
                <path d="M10.83 9.98H28.15V25.95H10.83V9.98Z" fill="white"/>
              </svg>
            </div>
            <span className="font-poppins font-bold text-lg text-text-dark">E-Comm</span>
          </div>
          <p className="font-proxima text-xs text-text-dark mb-5 leading-tight">
            Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <p className="font-proxima text-xs text-text-dark max-w-55 leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-poppins font-medium text-lg text-text-dark mb-5">Contact Us</h4>
          <p className="font-proxima text-xs text-text-dark leading-tight">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </p>
        </div>

        {/* Our Offers */}
        <div>
          <h4 className="font-poppins font-medium text-lg text-text-dark mb-5">Our Offers</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">About Us</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Information</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Privacy Policy</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4 className="font-poppins font-medium text-lg text-text-dark mb-5">My Account</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">About Us</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Information</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Privacy Policy</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h4 className="font-poppins font-medium text-lg text-text-dark mb-5">Service</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">About Us</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Information</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Privacy Policy</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-poppins font-medium text-lg text-text-dark mb-5">Information</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">About Us</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Information</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Privacy Policy</a></li>
            <li><a href="#" className="font-proxima text-xs text-text-secondary hover:text-primary-blue transition-colors leading-tight">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-poppins font-medium text-lg text-text-dark mb-5">Follow Us</h4>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              title="Follow us on Facebook"
              aria-label="Facebook"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7.64 1.94H5.89V0.7C5.89 0.5 6.05 0.34 6.25 0.34H7.64V-1.68H5.89C4.85 -1.68 4 -0.83 4 0.21V1.94H2.61V4.56H4V13.64H5.89V4.56H7.64V1.94Z" fill="#385C8E"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              title="Follow us on Twitter"
              aria-label="Twitter"
            >
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                <path d="M14.62 1.31C14.62 1.31 13.85 1.65 13.08 1.65C12.31 1.65 11.54 1.31 11.54 1.31C11.54 1.31 11.54 2.08 11.54 2.85C11.54 3.62 11.54 4.39 11.54 4.39C11.54 4.39 12.31 4.73 13.08 4.73C13.85 4.73 14.62 4.39 14.62 4.39C14.62 4.39 14.62 3.62 14.62 2.85C14.62 2.08 14.62 1.31 14.62 1.31Z" fill="#03A9F4"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="h-px bg-white mb-8"></div>
        <div className="max-w-1499 mx-auto px-38 flex flex-col md:flex-row justify-between items-center pb-8">
          <p className="font-proxima text-sm text-gray-400">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="w-10 h-6 bg-gradient-to-b from-yellow-500 to-blue-600 rounded-sm"></div>
            <div className="w-10 h-6 bg-blue-600 rounded-sm"></div>
            <div className="w-10 h-6 bg-gray-200 rounded-sm"></div>
            <div className="w-10 h-6 bg-gray-700 rounded-sm"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
