import React from 'react';
import FilterSidebar from './FilterSidebar';

const cars = [
  {
    name: 'Toyota Camry',
    price: '$25,000',
    image: '/cars/car1.jpg',
    details: '4-door, 5-seat, automatic'
  },
  {
    name: 'Honda Accord',
    price: '$27,000',
    image: '/cars/car2.jpg',
    details: '4-door, 5-seat, automatic'
  },
  {
    name: 'Toyota RAV4',
    price: '$30,000',
    image: '/cars/car3.jpg',
    details: '4-door, 5-seat, automatic'
  },
  // Add more cars if needed, duplicating for now
  {
    name: 'Nissan Rogue',
    price: '$28,000',
    image: '/cars/car1.jpg',
    details: '4-door, 5-seat, automatic'
  },
  {
    name: 'Ford Explorer',
    price: '$35,000',
    image: '/cars/car2.jpg',
    details: '4-door, 5-seat, automatic'
  },
  {
    name: 'Chevrolet Equinox',
    price: '$29,000',
    image: '/cars/car3.jpg',
    details: '4-door, 5-seat, automatic'
  }
];

const CarList: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mt-16">
            <FilterSidebar />
          </div>

          {/* Car Grid */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Cars</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl">
                  <img src={car.image} alt={car.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
                    <p className="text-xl text-orange-500 font-semibold mt-2">{car.price}</p>
                    <p className="text-gray-600 mt-2">{car.details}</p>
                    <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
