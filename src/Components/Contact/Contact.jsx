import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios"; // Import axios for API requests

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/mailapp/contactmail.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", phone: "", location: "", message: "" }); // Reset form on success
    } catch (error) {
      setResponseMessage("Error sending message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center px-4 py-8 lg:flex-row lg:justify-center lg:space-x-8 gap-10">
      {/* Form Section */}
      <form
        className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg w-full space-y-6 my-10 md:my-20"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-600">
          Get in Touch
        </h2>

        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg transition duration-200 bg-blue-600 text-white hover:bg-blue-700"
        >
          Send
        </button>

        {responseMessage && (
          <p className="text-center text-green-600 font-medium mt-4">
            {responseMessage}
          </p>
        )}
      </form>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg  flex flex-col justify-center items-center h-[710px]">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Information
        </h2>

        <div className="space-y-4 text-center">
          <div className="flex flex-col items-center space-y-2">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <p className="text-gray-700">icvrscet@gmail.com</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <p className="text-gray-700">+91 8870301652</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <p className="text-gray-700">
              123 Vit Street, Vellore, Tamil Nadu, 632014
            </p>
          </div>
        </div>

        {/* Conference Venue & Map */}
        <h2 className="text-xl font-semibold mt-8 mb-4 text-center">
          Conference Venue
        </h2>
        <div className="w-full">
          <iframe
            title="Conference Venue"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4899704095584!2d79.13338031458935!3d12.969777890854377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad4742af7c4109%3A0xa8064469d2d4b80e!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1640937055761!5m2!1sen!2sin"
            width="100%"
            height="280"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;