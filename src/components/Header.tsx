import React from 'react';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              <img src="./favicon.png" alt="Shahab's Trading Logo" className="h-8 w-auto"/>
            </a>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex">
              <a href="/" className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                Home
              </a>
              <a href="/" className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                About Us
              </a>
              <a href="/" className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                Pre-Order
              </a>
              <a href="/" className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                Cars
              </a>
              <a href="/" className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                Car Loan
              </a>
              <a href="/" className="mx-4 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
