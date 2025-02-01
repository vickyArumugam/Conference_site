import React from "react";

const Editorial = (props) => {
  // Static data for members
  const members = [
    {
      name: "John Doe",
      position: "Editor-in-Chief",
      institution: "XYZ University",
      location: "New York, USA",
    },
    {
      name: "Jane Smith",
      position: "Managing Editor",
      institution: "ABC Institute",
      location: "London, UK",
    },
    {
      name: "Alex Johnson",
      position: "Technical Editor",
      institution: "Tech World Inc.",
      location: "San Francisco, USA",
    },
    {
      name: "Emily Davis",
      position: "Associate Editor",
      institution: "Global Research Hub",
      location: "Toronto, Canada",
    },
  ];

  return (
    <div>
      <div className="w-auto h-auto flex flex-wrap justify-center my-20 gap-6 p-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-[300px] bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 text-white font-Trebuchet p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <p className="text-xl font-semibold mb-2">{member.name}</p>
            <p className="text-lg mb-2 italic">{member.position}</p>
            <p className="text-sm mb-2">{member.institution}</p>
            <p className="text-sm">{member.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editorial;
