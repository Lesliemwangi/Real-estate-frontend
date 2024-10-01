// import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PropertyDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const {
    name,
    location: propertyLocation,
    price,
    bedrooms,
    bathrooms,
    size,
    county,
    subdivision,
    description,
    imageUrl,
    photos
  } = location.state;

  const handleBack = () => {
    navigate('/properties'); // Change this path to your properties page route
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#fe8e3c] mb-6">{name}</h1>
          <p className="text-black text-2xl mb-4">{propertyLocation}</p>
          <p className="text-black text-3xl font-bold mb-8">{price}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={imageUrl} alt={name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-gray-700 text-lg">{description}</p>
            <ul className="space-y-2 text-lg text-gray-600">
              <li><span className="font-bold text-gray-800">Bedrooms:</span> {bedrooms}</li>
              <li><span className="font-bold text-gray-800">Bathrooms:</span> {bathrooms}</li>
              <li><span className="font-bold text-gray-800">Size:</span> {size}</li>
              <li><span className="font-bold text-gray-800">County:</span> {county}</li>
              <li><span className="font-bold text-gray-800">Subdivision:</span> {subdivision}</li>
            </ul>
            <button className="inline-flex items-center px-6 py-2 text-lg font-bold text-center text-white bg-[#fe8e3c] rounded-3xl hover:bg-[#fcd443] focus:ring-4 focus:outline-none focus:ring-[#fe8e3c] transition duration-300 ease-in-out">
              Contact Agent
            </button>
          </div>
        </div>

        {/* More Photos Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[#fe8e3c] mb-6">More Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Room ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button 
            onClick={handleBack}
            className="inline-flex items-center px-4 py-2 text-lg font-bold text-white bg-gray-800 rounded hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Back to Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
