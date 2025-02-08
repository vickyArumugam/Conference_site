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
          position: "Principal",
          photo: "public/images/profile2.jpeg",
        },
      ],
    },
    {
      title: "Convenors",
      color: "bg-green-200",
      hoverColor: "hover:bg-green-300",
      members: [
        {
          name: "Dr.J. Joseph Ignatious, M.E., Ph.D.",
          position: "Professor / ECE",
          photo: "public/images/profile2.jpeg",
        },
        {
          name: "Dr.G.Perumal, M.E., Ph.D.",
          position: "Professor & Head",
          photo: "public/images/profile2.jpeg",
        },
        {
          name: "Dr.J.K. Jothi Kalpana, M.Tech., Ph.D.",
          position: "Professor / CSE",
          photo: "public/images/profile2.jpeg",
        },
        {
          name: "Dr.S. Shanmuga Sundaram, M.E., Ph.D.",
          position: "Coordinator/ S&H",
          photo: "public/images/profile2.jpeg",
        },
      ],
    },
    {
      title: "Advisory Committee",
      color: "bg-purple-200",
      hoverColor: "hover:bg-purple-300",
      members: [
        {
          name: "Mr.G.Sadiq Basha",
          position: "HOD / ECE",
          photo: "public/images/profile2.jpeg",
        },
        {
          name: "Mr.K. Ramesh",
          position: "HOD / CSE",
          photo: "public/images/profile2.jpeg",
        },
        {
          name: "Mr.S. Manimaran",
          position: "HOD / EEE",
          photo: "public/images/profile2.jpeg",
        },
        {
          name: "Mr.A.Kumar",
          position: "HOD / CIVIL",
          photo: "public/images/prifile1.jpg",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gray-100">
      <div className="w-full max-w-5xl">
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Header */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 text-center">
              {section.title}
            </h3>

            {/* Members Grid */}
            <div
              className={`grid gap-6 justify-center ${
                section.members.length === 1
                  ? "grid-cols-1 place-items-center"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              }`}
            >
              {section.members.map((member, idx) => (
                <div
                  key={idx}
                  className={`border border-gray-300 p-4 rounded-lg shadow-md text-center transition duration-300 ${section.color} ${section.hoverColor} w-60 h-[320px] flex flex-col items-center justify-center`}
                >
                  {/* Member Photo */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-28 h-28 rounded-full mb-3 object-cover border-4 border-white shadow-lg"
                  />

                  {/* Member Name */}
                  <p className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </p>

                  {/* Member Position */}
                  <p className="text-[12px] sm:text-lg text-gray-600 font-medium">
                    {member.position}
                  </p>
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
