import React from "react";

const Conference = () => {
  return (
    <div>
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Big Data, Cloud, and Intelligent Computing
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-center">
              Big Data, Cloud Computing, and Intelligent Computing are 
              transforming the digital landscape. <span className="font-semibold">Big Data</span> enables organizations 
              to analyze vast amounts of structured and unstructured data for insights. 
              <span className="font-semibold">Cloud Computing</span> provides scalable, on-demand resources 
              for data storage and processing, reducing infrastructure costs. 
              <span className="font-semibold">Intelligent Computing</span> integrates AI and machine learning 
              to automate decision-making and optimize processes. Together, these technologies 
              drive innovation across industries, enhancing efficiency, security, and real-time analytics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conference;
