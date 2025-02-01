import React, { useState } from "react";


const ConferenceTracks = (props) => {
  const [aboutConference] = useState([
    { field_name: "Artificial Intelligence" },
    { field_name: "Machine Learning" },
    { field_name: "Data Science" },
    { field_name: "Robotics" },
    { field_name: "Cybersecurity" },
    { field_name: "Software Engineering" },
    { field_name: "Blockchain Technology" },
    { field_name: "Cloud Computing" },
  ]);
  const [hoverIndex, setHoverIndex] = useState(null); // For dynamic hover effect

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10 bg-white my-10">
        {aboutConference.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
            <h1
              className="relative z-10 text-2xl font-bold text-center"
              style={{
                color: hoverIndex === index ? props.hoverColor : "white", // Dynamic hover effect
              }}
            >
            
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 text-center text-sm italic text-gray-200">
               {item.field_name}.
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ConferenceTracks;
