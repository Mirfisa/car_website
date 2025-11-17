import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-gray-600">
              &copy; 2025 Your Company. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <a href="/" className="mx-4 text-gray-600 hover:text-gray-700">
              Privacy Policy
            </a>
            <a href="/" className="mx-4 text-gray-600 hover:text-gray-700">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
