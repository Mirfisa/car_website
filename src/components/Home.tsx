import React from 'react';
import Carousel from './Carousel';
import BrandLogos from './BrandLogos';
import AboutUs from './AboutUs';
import BookingForm from './BookingForm';
import { Slide } from '../types';

const slides: Slide[] = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/cars/car1.jpg`,
    alt: "Modern Cars"
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/cars/car2.jpg`,
    alt: "Easy Financing"
  },
];

const Home: React.FC = () => {
  return (
    <main>
      <Carousel slides={slides} />
      <BrandLogos />
      <AboutUs />
      <BookingForm />
    </main>
  );
};

export default Home;
