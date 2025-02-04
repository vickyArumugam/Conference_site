import React from "react";

const ServiceCards = () => {
  const services = [
    {
      title: "Advancements in AI & ML",
      description:
        "Dive into the latest advancements in AI and ML, exploring their real-world applications, impact on industries, and future developments.",
      image: "public/images/laptop-5572873_1280.png",
      bgColor: "hover:bg-blue-100",
    },
    {
      title: "Next-Gen Cloud & Edge Tech",
      description:
        "Explore the evolving landscape of cloud computing, from hybrid models to edge computing, and how they are transforming industries.",
      image: "public/images/cloud.png",
      bgColor: "hover:bg-red-100",
    },
    {
      title: "Cybersecurity Innovations",
      description:
        "Understand the cutting-edge cybersecurity innovations and solutions to protect data privacy in an increasingly digital world.",
      image: "public/images/big-data-7216839_1280.png",
      bgColor: "hover:bg-green-100",
    },
    {
      title: "Quantum Computing Exploration",
      description:
        "Delve into quantum computing's potential to revolutionize industries such as cryptography, medicine, and AI.",
      image: "public/images/business-1.jpg",
      bgColor: "hover:bg-violet-50",
    },
    {
      title: "IoT and Smart Systems",
      description:
        "Learn about the interconnected world of IoT devices and smart systems, and how they are reshaping everyday experiences.",
      image: "public/images/air-3807394_1280.png",
      bgColor: "hover:bg-yellow-50",
    },
    {
      title: "Blockchain & Distributed Systems",
      description:
        "Dive into blockchain technologies, decentralized finance, and distributed systems, and how they are transforming trust and transparency.",
      image: "public/images/network (1).png",
      bgColor: "hover:bg-pink-50",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center">
        {/* Page Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-20 mb-10">
          Our Team
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
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
