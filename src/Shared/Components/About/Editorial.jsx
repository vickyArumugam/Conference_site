import React from "react";

const Editorial = () => {
  // Static data for members
  const members = [
    {
      name: "John Doe",
      position: "Editor-in-Chief",
      institution: "XYZ University",
      location: "New York, USA",
      photo: "public/images/ceo.png", // Placeholder image URL
      bio: "John Doe is a renowned expert in data science and has published over 50 research papers.",
      color: "blue", // Color for this card
    },
    {
      name: "Jane Smith",
      position: "Managing Editor",
      institution: "ABC Institute",
      location: "London, UK",
      photo: "public/images/chair.png", // Placeholder image URL
      bio: "Jane Smith specializes in cloud computing and has led several large-scale projects.",
      color: "green", // Color for this card
    },
    {
      name: "Alex Johnson",
      position: "Technical Editor",
      institution: "Tech World Inc.",
      location: "San Francisco, USA",
      photo: "public/images/direc.png", // Placeholder image URL
      bio: "Alex Johnson is an AI enthusiast with a focus on natural language processing.",
      color: "purple", // Color for this card
    },
    {
      name: "Emily Davis",
      position: "Associate Editor",
      institution: "Global Research Hub",
      location: "Toronto, Canada",
      photo: "public/images/secret.png", // Placeholder image URL
      bio: "Emily Davis is passionate about blockchain technology and its applications.",
      color: "orange", // Color for this card
    },
  ];

  // Function to get Tailwind classes based on color
  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50",
          text: "text-blue-800",
          border: "border-blue-200",
        };
      case "green":
        return {
          bg: "bg-green-50",
          text: "text-green-800",
          border: "border-green-200",
        };
      case "purple":
        return {
          bg: "bg-purple-50",
          text: "text-purple-800",
          border: "border-purple-200",
        };
      case "orange":
        return {
          bg: "bg-orange-50",
          text: "text-orange-800",
          border: "border-orange-200",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-800",
          border: "border-gray-200",
        };
    }
  };

  return (
    <div className="w-auto h-auto flex flex-wrap justify-center my-20 gap-6 p-8">
      {members.map((member, index) => {
        const colorClasses = getColorClasses(member.color);
        return (
          <div
            key={index}
            className="w-[300px] h-[400px] relative group perspective"
          >
            {/* Front Side of the Card */}
            <div
              className={`w-full h-full ${colorClasses.bg} ${colorClasses.text} font-Trebuchet p-6 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out group-hover:rotate-y-180 absolute backface-hidden border ${colorClasses.border}`}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <p className="text-xl font-semibold mb-2 text-center">
                {member.name}
              </p>
              <p className="text-lg mb-2 italic text-center">{member.position}</p>
              <p className="text-sm mb-2 text-center">{member.institution}</p>
              <p className="text-sm text-center">{member.location}</p>
            </div>

            {/* Back Side of the Card */}
            <div
              className={`w-full h-full ${colorClasses.bg} ${colorClasses.text} font-Trebuchet p-6 rounded-lg shadow-lg transform rotate-y-180 transition-transform duration-500 ease-in-out group-hover:rotate-y-0 absolute backface-hidden border ${colorClasses.border}`}
            >
              <p className="text-xl font-semibold mb-4 text-center">
                {member.name}
              </p>
              <p className="text-sm text-justify">{member.bio}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Editorial;