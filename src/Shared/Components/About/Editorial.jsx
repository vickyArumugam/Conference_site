import React from "react";

const Editorial = () => {
  const members = [
    {
      name: "Dr.N.Anbazhaghan, M.E., Ph.D.",
      position: "Principal",
      institution: "VRS College",
      location: "Tamil Nadu, India",
      photo: "public/images/profile2.jpeg",
      bio: "Dr. Anbazhaghan has over 25 years of experience in education and research.",
      color: "blue",
    },
    {
      name: "Dr.J. Joseph Ignatious, M.E., Ph.D.",
      position: "Professor / ECE",
      institution: "VRS College",
      location: "Tamil Nadu, India",
      photo: "public/images/profile2.jpeg",
      bio: "Expert in VLSI and Embedded Systems, with multiple patents.",
      color: "green",
    },
    {
      name: "Dr.G.Perumal sammy, M.E., Ph.D.",
      position: "Professor & Head / MECH",
      institution: "VRS College",
      location: "Tamil Nadu, India",
      photo: "public/images/profile2.jpeg",
      bio: "Specialist in thermal engineering and renewable energy research.",
      color: "purple",
    },
    {
      name: "Dr.J.K. Jothi Kalpana, M.Tech., Ph.D.",
      position: "Professor / CSE",
      institution: "VRS College",
      location: "Tamil Nadu, India",
      photo: "public/images/profile2.jpeg",
      bio: "Researcher in artificial intelligence and machine learning applications.",
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-300" };
      case "green":
        return { bg: "bg-green-50", text: "text-green-800", border: "border-green-300" };
      case "purple":
        return { bg: "bg-purple-50", text: "text-purple-800", border: "border-purple-300" };
      case "orange":
        return { bg: "bg-orange-50", text: "text-orange-800", border: "border-orange-300" };
      default:
        return { bg: "bg-gray-50", text: "text-gray-800", border: "border-gray-300" };
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 my-10">
      {members.map((member, index) => {
        const colorClasses = getColorClasses(member.color);
        return (
          <div key={index} className="w-80 h-[450px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className={`p-6 ${colorClasses.bg} ${colorClasses.border} border rounded-t-xl text-center`}>
              <img src={member.photo} alt={member.name} className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-white" />
              <h3 className={`text-xl font-semibold mt-4 ${colorClasses.text}`}>{member.name}</h3>
              <p className="text-gray-600 text-sm font-medium">{member.position}</p>
              <p className="text-gray-500 text-sm">{member.institution}</p>
              <p className="text-gray-400 text-xs">{member.location}</p>
            </div>
            <div className="p-4 text-gray-700 text-sm text-justify h-[120px] overflow-auto">
              {member.bio}
            </div>
          </div>
        );
      })}
    </div>
  );
};



export default Editorial;
