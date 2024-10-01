// import React from "react";
import Shye from "../assets/Shye.jpg";
import shyee from "../assets/shyee.jpg";

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Left Side: Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 bg-white">
          <div className="md:w-1/2 mb-0 md:mb-0 ml-0">
            <h1
              className="text-5xl font-extrabold text-[#fe8e3c] underline decoration-black mb-5"
              style={{ textUnderlineOffset: "10px" }}
            >
              About Me
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Hi, I am{" "}
              <span className="font-bold text-[#fe8e3c]">Vivian Karanja</span>,
              a real estate agent dedicated and committed to helping my clients.
              Whether you are looking to buy, sell, or rent, I am here to guide
              you through every step of the process.
            </p>
          </div>

          {/* Right Side: Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={shyee}
              alt="Vivian Wambui"
              className="w-80 h-90 rounded-full shadow-xl border-4 border-[#fe8e3c] ml-4 mb-2 md:mb-0 mt-5"
            />
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-15 bg-white">
        <div className="container mx-auto text-center">
          <h1
            className="text-5xl font-extrabold text-[#fe8e3c] underline decoration-black mb-5"
            style={{ textUnderlineOffset: "10px" }}
          >
            Who I Am
          </h1>
          <div className="md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
            <img
              src={Shye}
              alt="Vivian Wambui"
              className="w-80 h-90 rounded-full shadow-xl border-4 border-[#fe8e3c] ml-4 mb-6 md:mb-0 mt-0"
            />
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              As your real estate agent, I am here to represent your best
              interest during the home buying process. My goal is walk you
              through the process of buying and selling a home. Assist you in
              your search for your ideal property and be your negotiator till
              you get possession of the property as you SAY YES TO THE ADDRESS.
              I have always had a passion for helping people find their dream
              homes. My approach is simple: I treat every client with the utmost
              respect, listen to their needs, and provide personalized services.
              With my extensive knowledge of the real estate market and
              attention to detail, you can rest assured that you are in good
              hands. I believe that your ideal home is out there waiting for you
              to claim it. Let me LEAD you to it..
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2
            className="text-5xl font-extrabold text-[#fe8e3c] underline decoration-black mb-5"
            style={{ textUnderlineOffset: "10px" }}
          >
            My Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-extrabold text-[#fe8e3c] mb-5 ml-5">
                {" "}
                Buying & Selling
              </h3>
              <p className="text-gray-600">
                Whether you are buying your first home or selling a property, I
                provide expert guidance and insights to ensure a smooth
                transaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-extrabold text-[#fe8e3c] mb-5">
                {" "}
                Market Analysis
              </h3>
              <p className="text-gray-600">
                I offer detailed market analysis, helping clients make informed
                decisions by understanding current market trends and property
                values.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-extrabold text-[#fe8e3c] mb-5 mr-10">
                {" "}
                Negotiation Skills
              </h3>
              <p className="text-gray-600">
                My strong negotiation skills ensure that you get the best
                possible deal, whether you are buying, selling, or renting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section
            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8">What My Clients Say</h2>
                    <div className="md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
                            <p className="text-lg text-gray-600 italic mb-4">
                                "Vivian made the process of selling our home effortless. Her professionalism and expertise were evident from day one. Highly recommend!"
                            </p>
                            <h4 className="text-xl font-bold text-blue-600">- Sarah L.</h4>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
                            <p className="text-lg text-gray-600 italic mb-4">
                                "Thanks to Vivian, we found the perfect home. He was patient, knowledgeable, and always available to answer our questions."
                            </p>
                            <h4 className="text-xl font-bold text-blue-600">- Michael K.</h4>
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
}

export default About;
