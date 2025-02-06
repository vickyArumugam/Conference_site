const JournalPublications = () => {
  const journals = [
    "International Journal of Research in Engineering Science (IJRES)",
    "Journal of Emerging Technologies (JET)",
    "International Journal of Research and Analytical Reviews (IJRAR)"
  ];

  return (
    <div className="h-[600px] bg-white flex flex-col items-center justify-center p-4">
      <p className="text-center text-lg font-medium text-blue-800 mb-6">
        Selected, Peer reviewed and Plagiarism free high quality article will <br />
        be recommended for publication in IEEE access and SCOPUS.
      </p>
      <div className="space-y-4 w-full max-w-3xl mt-8">
        {journals.map((journal, index) => (
          <button
            key={index}
            className="w-full bg-blue-500 text-white font-bold py-4 rounded-md text-center text-xl hover:bg-blue-700 transition duration-300"
          >
            {journal}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JournalPublications;