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
    },
    {
      title: "Cybersecurity Innovations",
      members: [
        { name: "Emma Davis", position: "Security Analyst" },
        { name: "William Brown", position: "Network Security Expert" },
      ],
    },
    {
      title: "Blockchain & Distributed Systems",
      members: [
        { name: "Olivia Lee", position: "Blockchain Developer" },
        { name: "Liam White", position: "Distributed Systems Architect" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 gap-6 bg-gray-100">
      {/* Unified section for all titles and cards */}
      <div className="w-full flex flex-col items-center text-center relative bg-white rounded-lg shadow-lg p-6">
  

        <div className="w-full max-w-7xl">
          <div className="font-Trebuchet text-base md:text-lg font-medium text-gray-700">
            {/* Map through all sections and display members */}
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                {/* Section Title */}
                <div className="text-xl font-bold text-blue-800 mb-4">
                  {section.title}
                </div>

                {/* Member Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                  {section.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 border-2 border-blue-300 p-4 w-full max-w-xs mx-auto rounded-lg mb-4"
                    >
                      <p className="text-xl font-semibold text-blue-700">{member.name}</p>
                      <p className="text-md text-gray-600">{member.position}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizing_members;
