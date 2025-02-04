import React from "react";

const Organizing_members = () => {
  // Static data for sections and members
  const sections = [
    {
      title: "Big Data, Cloud, and Intelligent Computing",
      members: [
        { name: "John Doe", position: "Data Scientist" },
        { name: "Jane Smith", position: "Cloud Architect" },
        { name: "Alex Johnson", position: "AI Specialist" },
      ],
      color: "blue", // Color for this section
    },
    {
      title: "Cybersecurity Innovations",
      members: [
        { name: "Emma Davis", position: "Security Analyst" },
        { name: "William Brown", position: "Network Security Expert" },
      ],
      color: "green", // Color for this section
    },
    {
      title: "Blockchain & Distributed Systems",
      members: [
        { name: "Olivia Lee", position: "Blockchain Developer" },
        { name: "Liam White", position: "Distributed Systems Architect" },
      ],
      color: "purple", // Color for this section
    },
  ];

  // Function to get Tailwind classes based on color
  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50",
          hoverBg: "hover:bg-blue-100",
          border: "border-blue-300",
          text: "text-blue-700",
        };
      case "green":
        return {
          bg: "bg-green-50",
          hoverBg: "hover:bg-green-100",
          border: "border-green-300",
          text: "text-green-700",
        };
      case "purple":
        return {
          bg: "bg-purple-50",
          hoverBg: "hover:bg-purple-100",
          border: "border-purple-300",
          text: "text-purple-700",
        };
      default:
        return {
          bg: "bg-gray-50",
          hoverBg: "hover:bg-gray-100",
          border: "border-gray-300",
          text: "text-gray-700",
        };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 gap-6 bg-gray-100 ">
      {/* Unified section for all titles and cards */}
      <div className="w-full flex flex-col items-center text-center relative bg-white rounded-lg shadow-lg p-6">
        <div className="w-full max-w-7xl">
          <div className="font-Trebuchet text-base md:text-lg font-medium text-gray-700">
            {/* Map through all sections and display members */}
            {sections.map((section, index) => {
              const colorClasses = getColorClasses(section.color);
              return (
                <div key={index} className="mb-8">
                  {/* Section Title */}
                  <div className={`text-2xl font-bold ${colorClasses.text} mb-6`}>
                    {section.title}
                  </div>

                  {/* Member Cards */}
                  <div className="flex flex-wrap justify-center gap-6">
                    {section.members.map((member, idx) => (
                      <div
                        key={idx}
                        className={`${colorClasses.bg} ${colorClasses.hoverBg} ${colorClasses.border} transition-colors duration-300 border-2 p-6 w-full max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg`}
                      >
                        <p className={`text-xl font-semibold ${colorClasses.text}`}>
                          {member.name}
                        </p>
                        <p className="text-md text-gray-600">{member.position}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizing_members;