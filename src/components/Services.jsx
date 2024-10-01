// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComments, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-5 text-[#fe8e3c] underline decoration-black" style={{ textUnderlineOffset: '10px' }}> My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <FontAwesomeIcon icon={faHome} className="text-[#fe8e3c] text-6xl mb-4" />
            <h3 className="text-3xl font-bold mb-2 text-[#fe8e3c]">Property Listings</h3>
            <p className="text-gray-600">
              Explore a wide range of properties available for sale or rent, tailored to your preferences.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <FontAwesomeIcon icon={faComments} className="text-[#fe8e3c] text-6xl mb-4" />
            <h3 className="text-3xl font-bold mb-2 text-[#fe8e3c]">Consultations</h3>
            <p className="text-gray-600">
              Receive expert advice from our real estate professionals to help you make informed decisions.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <FontAwesomeIcon icon={faPiggyBank} className="text-[#fe8e3c] text-6xl mb-4" />
            <h3 className="text-3xl font-bold mb-2 text-[#fe8e3c]">Mortgage Assistance</h3>
            <p className="text-gray-600">
              We’ll guide you through the mortgage process and help you find the best financing options available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
