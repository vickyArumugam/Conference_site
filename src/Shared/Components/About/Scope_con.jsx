import React from "react";

const topics = [
  {
    title: "Big Data",
    color: "border-red-500 bg-red-100 hover:bg-red-200",
    points: [
      "Big Data Analytics and Visualization",
      "Data Mining and Knowledge Discovery",
      "Machine Learning and Deep Learning for Big Data",
      "Scalable Data Processing Frameworks",
      "Data Security, Privacy, and Governance",
      "Real-time Data Processing and Stream Analytics",
      "Blockchain and Big Data Applications",
    ],
  },
  {
    title: "Cloud Computing",
    color: "border-blue-500 bg-blue-100 hover:bg-blue-200",
    points: [
      "Cloud Architectures and Platforms",
      "Edge and Fog Computing",
      "Serverless Computing and Microservices",
      "Multi-cloud and Hybrid Cloud Environments",
      "Cloud Security, Privacy, and Compliance",
      "AI-driven Cloud Management",
      "Green Cloud Computing and Sustainability",
    ],
  },
  {
    title: "Intelligent Computing",
    color: "border-green-500 bg-green-100 hover:bg-green-200",
    points: [
      "Artificial Intelligence and Neural Networks",
      "Internet of Things (IoT) and Smart Systems",
      "Natural Language Processing and Chatbots",
      "Robotics, Automation, and Human-Machine Interaction",
      "Bio-inspired and Evolutionary Computing",
      "Explainable AI and Ethical AI Practices",
      "Cognitive Computing and Decision Support Systems",
    ],
  },
  {
    title: "Applications and Industry Use Cases",
    color: "border-yellow-500 bg-yellow-100 hover:bg-yellow-200",
    points: [
      "Smart Cities and Urban Analytics",
      "Healthcare, Bioinformatics, and Medical AI",
      "Financial Technology and Risk Management",
      "Industry 4.0 and Smart Manufacturing",
      "Cybersecurity and Fraud Detection",
      "Educational Technology and E-Learning",
      "Autonomous Vehicles and Smart Transportation",
    ],
  },
];

const ConferenceScope = () => {
  return (
    <div className="container mx-auto p-6 my-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Scope of the Conference
      </h2>
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
