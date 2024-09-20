import React from 'react'

function Services() {
  return (
    <div className="min-h-screen bg-white py-16">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Property Listings</h3>
          <p className="text-gray-600">
            Explore a wide range of properties available for sale or rent, tailored to your preferences.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Consultations</h3>
          <p className="text-gray-600">
            Receive expert advice from our real estate professionals to help you make informed decisions.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Mortgage Assistance</h3>
          <p className="text-gray-600">
            We’ll guide you through the mortgage process and help you find the best financing options available.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services
