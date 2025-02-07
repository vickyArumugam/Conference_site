import React from "react";

const OrganizingMembers = () => {
  const sections = [
    {
      title: "Chairman",
      color: "bg-blue-200",
      hoverColor: "hover:bg-blue-300",
      members: [
        {
          name: "Dr.N.Anbazhaghan, M.E., Ph.D.",
          position: "Principal"
        }
      ]
    },
    {
      title: "Convenors",
      color: "bg-green-200",
      hoverColor: "hover:bg-green-300",
      members: [
        { name: "Dr.J. Joseph Ignatious, M.E., Ph.D.", position: "Professor / ECE" },
        { name: "Dr.G.Perumal, M.E., Ph.D.", position: "Professor & Head / MECH" },
        { name: "Dr.J.K. Jothi Kalpana, M.Tech., Ph.D.", position: "Professor / CSE" },
        { name: "Dr.S. Shanmuga Sundaram, M.E., Ph.D.", position: "Coordinator/ S&H" },
      ],
    },
    {
      title: "Advisory Committee",
      color: "bg-purple-200",
      hoverColor: "hover:bg-purple-300",
      members: [
        { name: "Mr.G.Sadiq Basha", position: "HOD / ECE" },
        { name: "Mr.K. Ramesh", position: "HOD / CSE" },
        { name: "Mr.S. Manimaran", position: "HOD / EEE" },
        { name: "Mr.A.Kumar", position: "HOD / CIVIL" },
      ],
    },
    // {
    //   title: "member",
    //   color: "bg-orange-200",
    //   hoverColor: "hover:bg-orange-300",
    //   members: [
    //     { name: "Mr.G.Sadiq Basha", position: "HOD / ECE" },
    //     { name: "Mr.K. Ramesh", position: "HOD / CSE" },
    //     { name: "Mr.S. Manimaran", position: "HOD / EEE" },
    //     { name: "Mr.A.Kumar", position: "HOD / CIVIL" },
    //   ],
    // },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gray-100">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mb-8">
          {/* Organizing Committee */}
        </h2>
      </div>
      <div className="w-full max-w-6xl">
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {section.title}
            </h3>
            <div
              className={`grid ${section.members.length === 1 ? "grid-cols-1 place-items-center" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}`}
            >
              {section.members.map((member, idx) => (
                <div
                  key={idx}
                  className={`border border-gray-300 p-6 rounded-lg shadow-md text-center transition duration-300 ${section.color} ${section.hoverColor}`}
                >
                  <p className="text-lg font-semibold text-gray-700">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizingMembers;
