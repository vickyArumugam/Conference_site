import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios'; // Import axios for API requests

const ContactForm = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [shake, setShake] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const width = e.currentTarget.offsetWidth;
    const height = e.currentTarget.offsetHeight;

    const centerX = width / 2;
    const centerY = height / 2;

    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    const angleX = (offsetY - centerY) / height * 10;
    const angleY = (offsetX - centerX) / width * -10;

    const shakeX = (Math.random() - 0.5) * 5;
    const shakeY = (Math.random() - 0.5) * 5;

    setTilt({ x: angleX, y: angleY });
    setShake({ x: shakeX, y: shakeY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setShake({ x: 0, y: 0 });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost/mailapp/contactmail.php', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      setResponseMessage(response.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form on success
    } catch (error) {
      setResponseMessage('Error sending message. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center  px-4 py-8 lg:flex-row ">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center my-16">
        
        {/* Form Section */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-4xl lg:w-[80%]">
          
          {/* Image Section */}
          <div
            className="hidden md:block md:w-1/3 p-4 relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="images/img-01.png"
              alt="Contact"
              className="w-full max-w-[250px] mx-auto transform transition-all duration-300 ease-in-out mt-32"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateX(${shake.x}px) translateY(${shake.y}px)`,
                transition: 'transform 0.1s ease-in-out',
              }}
            />
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="w-full md:w-2/3 p-6 flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 text-center">Get in Touch</h2>

            <input className="w-full p-3 rounded bg-gray-200 text-gray-700 placeholder-gray-400" 
              type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />

            <input className="w-full p-3 rounded bg-gray-200 text-gray-700 placeholder-gray-400" 
              type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

            <input className="w-full p-3 rounded bg-gray-200 text-gray-700 placeholder-gray-400" 
              type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />

            <textarea className="w-full p-3 rounded bg-gray-200 text-gray-700 placeholder-gray-400" 
              name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit" className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition">
              Send
            </button>

            {responseMessage && <p className="text-center mt-2 text-gray-700">{responseMessage}</p>}
          </form>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl lg:w-[80%] text-center mr-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>

        <div className="space-y-3">
          <div className="flex justify-center items-center space-x-3">
            <FaEnvelope className="text-blue-600" />
            <p className="text-gray-700">info@iccsi.com</p>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <FaPhoneAlt className="text-blue-600" />
            <p className="text-gray-700">+91 9876543219</p>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-600" />
            <p className="text-gray-700">123 Vit Street, Vellore, Tamil Nadu, 632014</p>
          </div>
        </div>

        {/* Conference Venue & Map */}
        <h2 className="text-xl font-semibold">Conference Venue</h2>
        <div className="mt-4">
          <iframe
            title="Conference Venue"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4899704095584!2d79.13338031458935!3d12.969777890854377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad4742af7c4109%3A0xa8064469d2d4b80e!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1640937055761!5m2!1sen!2sin"
            width="100%"
            height="240"
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
