import React from "react";

const topics = [
  {
    title: "Applied Science & Innovations",
    color: "border-red-500 bg-red-100 hover:bg-red-200",
    points: [
      "Advancements in Physics, Chemistry, and Mathematics",
      "Nanotechnology and Material Science Innovations",
      "Biomedical Engineering and Healthcare Technologies",
      "Biotechnology and Genetic Engineering",
      "Renewable Energy and Sustainable Practices",
      "Environmental Science and Climate Change Solutions",
      "Artificial Intelligence in Applied Science",
    ],
  },
  {
    title: "Multidisciplinary Engineering Trends",
    color: "border-blue-500 bg-blue-100 hover:bg-blue-200",
    points: [
      "Smart Manufacturing and Industry 4.0",
      "Robotics, Automation, and Mechatronics",
      "Structural and Civil Engineering Innovations",
      "Electronics and Communication Advancements",
      "Aerodynamics and Aerospace Engineering",
      "Advanced Computing and Simulation Technologies",
      "Engineering Education and Research Trends",
    ],
  },
  {
    title: "Emerging Technologies & Future Advancements",
    color: "border-green-500 bg-green-100 hover:bg-green-200",
    points: [
      "Quantum Computing and Quantum Information Science",
      "Internet of Things (IoT) and Smart Systems",
      "Cybersecurity and Digital Forensics",
      "Blockchain, Web3, and Decentralized Applications",
      "Human-Computer Interaction and Augmented Reality",
      "5G, 6G, and Future Communication Networks",
      "Autonomous Systems and Artificial Intelligence Ethics",
    ],
  },
  {
    title: "Sustainability & Industrial Applications",
    color: "border-yellow-500 bg-yellow-100 hover:bg-yellow-200",
    points: [
      "Green Energy and Carbon Footprint Reduction",
      "Smart Cities and Sustainable Infrastructure",
      "Waste Management and Circular Economy",
      "Agro-Tech and Precision Farming",
      "Intelligent Transportation and Logistics",
      "Risk Management and Safety Engineering",
      "Space Exploration and Satellite Technologies",
    ],
  },
];

const ConferenceScope = () => {
  return (
    <div className="container mx-auto p-6 my-14">
  
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-2xl p-6 border-l-4 transition duration-300 ease-in-out ${topic.color}`}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {topic.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {topic.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceScope;
