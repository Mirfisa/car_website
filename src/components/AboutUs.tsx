import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="/about-us.png"
                                alt="Luxury Car Showroom"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="inline-block px-5 py-2 bg-blue-50 rounded-full text-lg font-bold text-blue-600 mb-4 shadow-sm">
                            About Us
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                            Driving Excellence, <br />
                            <span className="text-blue-600">Delivering Dreams</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Welcome to our premier destination for luxury and performance vehicles.
                            With over 20 years of experience in the automotive industry, we pride
                            ourselves on delivering an exceptional car buying experience.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our curated collection features the finest automobiles from around the world,
                            ensuring that you find the perfect vehicle to match your lifestyle. We believe
                            in transparency, quality, and customer satisfaction above all else.
                        </p>

                        <div className="pt-4 flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-gray-900">20+</span>
                                <span className="text-sm text-gray-500">Years Experience</span>
                            </div>
                            <div className="w-px bg-gray-300 h-12"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-gray-900">5k+</span>
                                <span className="text-sm text-gray-500">Happy Clients</span>
                            </div>
                            <div className="w-px bg-gray-300 h-12"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-gray-900">500+</span>
                                <span className="text-sm text-gray-500">Cars Sold</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
