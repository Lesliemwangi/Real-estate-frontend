// import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center h-screen text-center bg-white mb-4"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1582948937/photo/layout-of-new-house-on-white-background-sale-of-cottage-house-mockup-for-design-copy-space-3d.jpg?s=612x612&w=0&k=20&c=D-yNONHjTSteY273YKDeDU10NbwR6mCfdDBbK96-gLI=')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 w-full h-full flex flex-col justify-center items-center">
          <h1
            className="text-5xl font-extrabold text-[#fe8e3c] underline decoration-white mb-5"
            style={{ textUnderlineOffset: "5px" }}
          >
            Find Your Dream Home
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Discover the best properties for sale and rent, tailored to your
            preferences. Your dream home is just a click away.
          </p>
          <a
            href="/services"
            className="inline-flex items-center px-6 py-3 text-lg font-bold text-center text-white bg-[#fe8e3c] rounded-3xl hover:bg-[#fcd443] focus:ring-4 focus:outline-none focus:ring-[#fe8e3c] transition duration-300 ease-in-out"
          >
            Explore My Services
          </a>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="py-10 bg-white">
        {" "}
        {/* Reduced padding-top */}
        <div className="container mx-auto">
          <h2
            className="text-5xl font-extrabold text-center text-[#fe8e3c] underline decoration-black mb-10"
            style={{ textUnderlineOffset: "5px" }}
          >
            {" "}
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden ml-5 transition duration-300 transform hover:-translate-y-1">
              <img
                src="https://media.istockphoto.com/id/477790721/photo/modern-building-with-swimming-pool-at-dusk.jpg?s=612x612&w=0&k=20&c=Y3xWpNLrkQaxP2RSNnvYI_gFghRkA8J4Ty9GptDarh4="
                alt="Property 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Luxury Villa in Beverly Hills
                </h3>
                <p className="text-gray-600 mb-4">$2,500,000</p>
                <a href="#">
                  <div className="flex justify-center mt-8">
                    <button className="inline-flex items-center px-6 py-2 text-lg font-bold text-center text-white bg-[#fe8e3c] rounded-3xl hover:bg-[#fcd443] focus:ring-4 focus:outline-none focus:ring-[#fe8e3c] transition duration-300 ease-in-out">
                      View Details
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-1">
              <img
                src="https://media.istockphoto.com/id/645199404/photo/apartment-buildings.jpg?s=612x612&w=0&k=20&c=_PcytWkxDtfrx-OxjSi4ZPj08Hm_NpxJrOq9DHp0JRg="
                alt="Property 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Modern Apartment in NYC
                </h3>
                <p className="text-gray-600 mb-4">$1,200,000</p>
                <a href="#">
                  <div className="flex justify-center mt-8">
                    <button className="inline-flex items-center px-6 py-2 text-lg font-bold text-center text-white bg-[#fe8e3c] rounded-3xl hover:bg-[#fcd443] focus:ring-4 focus:outline-none focus:ring-[#fe8e3c] transition duration-300 ease-in-out">
                      View Details
                    </button>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden mr-5 transition duration-300 transform hover:-translate-y-1">
              <img
                src="https://media.istockphoto.com/id/185012250/photo/beautiful-beach-house-on-sanibel-island-florida.jpg?s=612x612&w=0&k=20&c=kk4JJNrZXWTZ3QwNOgocGEx-EvRApijEFuWVFMYDqbo="
                alt="Property 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 mr-5">
                <h3 className="text-2xl font-bold mb-3">
                  Beach House in Malibu
                </h3>
                <p className="text-gray-600 mb-4">$3,750,000</p>
                <a href="#">
                  <div className="flex justify-center mt-8">
                    <button className="inline-flex items-center px-6 py-2 text-lg font-bold text-center text-white bg-[#fe8e3c] rounded-3xl hover:bg-[#fcd443] focus:ring-4 focus:outline-none focus:ring-[#fe8e3c] transition duration-300 ease-in-out">
                      View Details
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <p className="text-gray-600 italic mb-4">"The team helped us find the perfect home. Excellent service and support throughout the entire process!"</p>
              <h3 className="text-xl font-semibold text-gray-800">- John & Mary Doe</h3>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <p className="text-gray-600 italic mb-4">"I highly recommend them. They truly care about their clients and make sure everything goes smoothly."</p>
              <h3 className="text-xl font-semibold text-gray-800">- Sarah Smith</h3>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm">
              <p className="text-gray-600 italic mb-4">"Professional, reliable, and friendly. They helped me find a great investment property!"</p>
              <h3 className="text-xl font-semibold text-gray-800">- Mark Johnson</h3>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="bg-white text-black py-10 text-center">
        <h2
          className="text-5xl font-extrabold text-center text-[#fe8e3c] underline decoration-black mb-10"
          style={{ textUnderlineOffset: "5px" }}
        >
          Ready to Find Your New Home?
        </h2>
        <p className="text-lg mb-8">
          Contact us today and let us help you find the perfect property.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-2 text-lg font-bold text-center text-white bg-[#fe8e3c] rounded-3xl hover:bg-[#fcd443] focus:ring-4 focus:outline-none focus:ring-[#fe8e3c] transition duration-300 ease-in-out"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
};

export default HomePage;
