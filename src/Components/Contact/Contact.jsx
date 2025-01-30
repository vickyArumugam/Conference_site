import React, { useState } from 'react';

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

    // Calculate tilt based on mouse position
    const angleX = (offsetY - centerY) / height * 10; // Limit tilt range
    const angleY = (offsetX - centerX) / width * -10; // Limit tilt range

    // Random shaking effect
    const shakeX = (Math.random() - 0.5) * 5; // Random shake for X-axis
    const shakeY = (Math.random() - 0.5) * 5; // Random shake for Y-axis

    setTilt({ x: angleX, y: angleY });
    setShake({ x: shakeX, y: shakeY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setShake({ x: 0, y: 0 });
  };

  return (
    <div className="bg-cover bg-center h-[750px] bg-[#E8E8E8]">
      <div className="container mx-auto flex justify-center items-center min-h-full px-4">
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl w-full p-8">
          {/* Image Section (Hidden on small devices) */}
          <div
            className="w-full md:w-1/3 p-4 relative mt-8 md:mt-26 hidden md:block"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="images/img-01.png"
              alt="Contact"
              className={`w-full transform transition-all duration-300 ease-in-out ${isHovered ? 'scale-105' : ''}`}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateX(${shake.x}px) translateY(${shake.y}px)`,
                transition: 'transform 0.1s ease-in-out',
              }}
            />
          </div>

          {/* Form Section (Increased Input Width on Small Devices) */}
          <form className="w-full md:w-2/3 p-4 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in touch</h2>

            {/* Name Input */}
            <div className="relative mb-4">
              <input
                className="w-full p-4 pl-12 rounded-full bg-gray-200 text-gray-700 placeholder-gray-400"
                type="text"
                name="name"
                placeholder="Name"
              />
              <i className="fa fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <input
                className="w-full p-4 pl-12 rounded-full bg-gray-200 text-gray-700 placeholder-gray-400"
                type="email"
                name="email"
                placeholder="Email"
              />
              <i className="fa fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            {/* Phone Input */}
            <div className="relative mb-4">
              <input
                className="w-full p-4 pl-12 rounded-full bg-gray-200 text-gray-700 placeholder-gray-400"
                type="text"
                name="Phone"
                placeholder="Phone"
              />
              <i className="fa fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            {/* Message Textarea */}
            <div className="relative mb-6">
              <textarea
                className="w-full p-4 pl-12 rounded-lg bg-gray-200 text-gray-700 placeholder-gray-400"
                name="message"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                className="w-full py-3 px-4 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
