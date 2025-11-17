import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import FilterSidebar from './FilterSidebar';

interface Car {
  name: string;
  grade: string;
  model_year: string;
  pictures: string;
  image: string; // Keep for now, will be empty
  details: string; // Keep for now, will be empty
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/1uqwgVOtPtRQErRoRM8D5659b0_4mVZ8eI3hiwzGgYlU/export?format=csv');
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result?.value);
      console.log("Raw CSV:", csv);

      Papa.parse(csv, {
        header: true,
        complete: (results) => {
          console.log("Parsed data:", results.data);
          const processedCars = results.data.map((car: any) => {
            const carName = car['Car Name'];
            const carGrade = car['Grade'];
            const carModelYear = car['Model'];
            const carPictures = car['pictures'];

            // For now, image and details will be empty strings
            const carImage = '';
            const carDetails = '';

            if (carName && carGrade && carModelYear && carPictures) {
              return { name: carName, grade: carGrade, model_year: carModelYear, pictures: carPictures, image: carImage, details: carDetails };
            }
            return null;
          }).filter(Boolean);
          console.log("Processed cars:", processedCars);
          setCars(processedCars as Car[]);
        }
      });
    };

    fetchCars();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cars.slice(indexOfFirstItem, indexOfLastItem);
  console.log("Current items:", currentItems);

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
              {currentItems.map((car, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
                  <img src={car.pictures} alt={car.name} className="w-full h-64 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
                      <div className="flex justify-between text-lg text-gray-700 mt-1">
                        <span>{car.model_year}</span>
                        <span>{car.grade}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 bg-orange-500 text-white rounded-md disabled:bg-gray-300"
              >
                Previous
              </button>
              <span className="px-4 py-2 mx-1 text-gray-700">
                Page {currentPage} of {Math.ceil(cars.length / itemsPerPage)}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={indexOfLastItem >= cars.length}
                className="px-4 py-2 mx-1 bg-orange-500 text-white rounded-md disabled:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
