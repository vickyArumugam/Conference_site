import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCards = () => {
  const navigate = useNavigate(); // For navigation

  const services = [
    {
      title: "Innovations in Applied Science",
      description:
        "Explore groundbreaking research and advancements in applied sciences, driving real-world applications and technological progress.",
      image: "/images/laptop-5572873_1280.webp",
      bgColor: "hover:bg-blue-100",
    },
    {
      title: "Emerging Trends in Engineering",
      description:
        "Discover the latest developments across multidisciplinary engineering fields, from automation to sustainable solutions.",
      image: "/images/vecteezy_cloud.webp",
      bgColor: "hover:bg-red-100",
    },
    {
      title: "Technology for a Sustainable Future",
      description:
        "Learn how innovative technologies are shaping a more sustainable and energy-efficient future for industries worldwide.",
      image: "/images/big-data-7216839_1280.webp",
      bgColor: "hover:bg-green-100",
    },
    {
      title: "Advanced Science",
      description:
        "Explore the latest scientific breakthroughs, from quantum mechanics to biotechnology, and their impact on global development.",
      image: "/images/artificial-intelligence.webp",
      bgColor: "hover:bg-violet-50",
    },
    {
      title: "Education",
      description:
        "Understand modern educational methodologies, digital learning innovations, and strategies to enhance global education systems.",
      image: "/images/air-3807394_1280.webp",
      bgColor: "hover:bg-yellow-50",
    },
    {
      title: "Social Science",
      description:
        "Analyze contemporary social science trends, including human behavior, societal transformations, and global policy impacts.",
      image: "/images/network (1).webp",
      bgColor: "hover:bg-pink-50",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Heading */}
      <h2 className="text-5xl md:text-5xl font-bold text-blue-700 mt-20 mb-10 text-center">
      Meeting Content
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14 p-4 w-[90%] sm:w-[80%] lg:w-[70%] mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg ${service.bgColor}`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-4">
              <h3 className="text-[20px] font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-[16px]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Register Button (Redirects to "/new_paper_submission") */}
      <button
        className="uppercase px-6 md:px-8 py-2 md:py-3 mb-20 font-medium bg-blue-600 border border-white rounded-lg text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        onClick={() => navigate("/new_paper_submission")} // Navigate to register page
        aria-label="Register for the conference"
      >
        Register Here
      </button>
    </div>
  );
};

export default ServiceCards;
