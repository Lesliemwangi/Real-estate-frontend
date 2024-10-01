// import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; // Solid icons
import {
  faFacebook,
  faWhatsapp as faWhatsappBrand,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons

// Define the Zod schema
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(1, { message: "Number is required" })
    .regex(/^(\+?\d{1,2}[-\s]?(\(?\d{3}\)?)[-\s]?)?\d{3}[-\s]?\d{4}$/, {
      message: "Invalid phone number format.",
    }),
  message: z.string().min(1, { message: "Message is required" }),
});

// In your Contacts component
const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto">
        <h3
          className="text-2xl font-bold text-center text-[#fe8e3c] underline decoration-black mb-5"
          style={{
            textUnderlineOffset: "5px",
            fontStyle: "italic",
            transform: "skewX(-15deg)",
            fontFamily: "Homemade Apple",
          }}
        >
          Get In Touch
        </h3>

        {/* Icons and Agent Details Section */}
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-12 mb-8 flex-wrap">
          {/* Email */}
          <div className="flex flex-col items-center">
            <a href="mailto:example@example.com" aria-label="Email">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-8 w-8 text-blue-500"
              />{" "}
              {/* Red for email */}
            </a>
            <p className="text-sm text-gray-500 mt-2">vivianwambui@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <a href="tel:+1234567890" aria-label="Phone">
              <FontAwesomeIcon
                icon={faPhone}
                className="h-8 w-8 text-green-500"
              />{" "}
              {/* Green for Phone */}
            </a>
            <p className="text-sm text-gray-500 mt-2">+1234567890</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <a href="https://wa.me/1234567890" aria-label="WhatsApp">
              <FontAwesomeIcon
                icon={faWhatsappBrand}
                className="h-8 w-8 text-green-500"
              />{" "}
              {/* Green for WhatsApp */}
            </a>
            <p className="text-sm text-gray-500 mt-2">+1234567890</p>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center">
            <a href="https://facebook.com/yourprofile" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-8 w-8 text-blue-600"
              />{" "}
              {/* Blue for Facebook */}
            </a>
            <p className="text-sm text-gray-500 mt-2">
              facebook.com/yourprofile
            </p>
          </div>
        </div>

        <h1
          className="text-5xl font-extrabold text-center text-[#fe8e3c] underline decoration-black mb-5"
          style={{ textUnderlineOffset: "10px" }}
        >
          Contact Me
        </h1>

        <form
          className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-lg font-bold text-center text-white bg-[#fe8e3c] rounded-3xl hover:bg-[#fcd443] focus:ring-4 focus:outline-none focus:ring-[#fe8e3c] transition duration-300 ease-in-out w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
