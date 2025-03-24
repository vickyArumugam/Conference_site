import React from "react";

const JournalPublications = () => {
  const journals = [
    {
      name: "International Journal of Research in Engineering Science (IJRES)",
      description:
        "A peer-reviewed journal focusing on cutting-edge research in engineering and science.",
      icon: "📘",
      link: "#",
    },
    {
      name: "Journal of Emerging Technologies (JET)",
      description:
        "Explore the latest advancements in emerging technologies and their applications.",
      icon: "🚀",
      link: "#",
    },
    {
      name: "International Journal of Research and Analytical Reviews (IJRAR)",
      description:
        "A multidisciplinary journal providing in-depth analytical reviews of research topics.",
      icon: "🔍",
      link: "#",
    },
  ];

  return (
    <div className="min-h-auto bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* Subheading */}
      <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mt-10">
        Selected, peer-reviewed, and plagiarism-free high-quality articles will
        be recommended for publication in IEEE Access and SCOPUS-indexed journals.
      </p>

      {/* Journal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-6xl my-10">
        {journals.map((journal, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 mx-auto"
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{journal.icon}</div>

            {/* Journal Name */}
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              {journal.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">{journal.description}</p>

            {/* Call-to-Action Button */}
            <a
              href={journal.link}
              className="mt-auto bg-blue-500 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalPublications;
