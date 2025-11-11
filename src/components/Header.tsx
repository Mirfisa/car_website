import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              Home
            </a>
            <a href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              About Us
            </a>
            <a href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              Pre-Order
            </a>
            <a href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              Cars
            </a>
            <a href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              Car Loan
            </a>
            <a href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
