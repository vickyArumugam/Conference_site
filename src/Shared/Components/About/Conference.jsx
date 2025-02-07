import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Conference = () => {
  const [activeTab, setActiveTab] = useState("Big Data");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case "Big Data":
        return (
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Big Data refers to massive and complex datasets that traditional
              tools cannot handle, defined by the <strong>3 Vs</strong>: Volume,
              Velocity, and Variety. It is generated from sources like social
              media, sensors, and IoT devices, enabling data-driven
              decision-making and predictive analytics. Technologies like{" "}
              <strong>Hadoop</strong> and <strong>Spark</strong> are used to
              process and analyze this data.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Moreover, organizations leverage Big Data to discover hidden
              patterns, optimize operations, and create innovative solutions. As
              data sources continue to expand, advanced analytics and machine
              learning models play a crucial role in transforming raw data into
              actionable insights.
            </p>
          </div>
        );
      case "Cloud Computing":
        return (
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cloud Computing is the delivery of computing services like
              storage, servers, databases, and software over the internet. It
              offers <strong>scalability</strong>, <strong>flexibility</strong>,
              and <strong>cost-efficiency</strong> by eliminating the need for
              physical infrastructure. Services are categorized into{" "}
              <strong>IaaS</strong>, <strong>PaaS</strong>, and{" "}
              <strong>SaaS</strong>.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              In addition, cloud solutions enable seamless collaboration and
              rapid deployment of applications. Enterprises can scale resources
              on-demand and benefit from robust security measures and disaster
              recovery options, making cloud computing an indispensable tool in
              today’s digital landscape.
            </p>
          </div>
        );
      case "Intelligent Computing":
        return (
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Intelligent Computing refers to advanced systems that combine{" "}
              <strong>AI</strong>, <strong>machine learning</strong>, and{" "}
              <strong>data analytics</strong> to mimic human-like
              decision-making. It leverages technologies like neural networks,
              natural language processing, and computer vision to solve complex
              problems.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Furthermore, these systems continuously learn and adapt, offering
              improved performance over time. Intelligent computing is
              revolutionizing various industries by automating processes,
              enhancing predictive capabilities, and creating personalized
              experiences for users.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mb-12">
            {/* About Conference */}
          </h2>
          <div>
            {/* Tabs for the topics */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setActiveTab("Big Data")}
                className={`px-4 py-2 mx-2 font-semibold border-b-2 transition-colors ${
                  activeTab === "Big Data"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600"
                }`}
              >
                Big Data
              </button>
              <button
                onClick={() => setActiveTab("Cloud Computing")}
                className={`px-4 py-2 mx-2 font-semibold border-b-2 transition-colors ${
                  activeTab === "Cloud Computing"
                    ? "border-green-600 text-green-600"
                    : "border-transparent text-gray-600 hover:text-green-600"
                }`}
              >
                Cloud Computing
              </button>
              <button
                onClick={() => setActiveTab("Intelligent Computing")}
                className={`px-4 py-2 mx-2 font-semibold border-b-2 transition-colors ${
                  activeTab === "Intelligent Computing"
                    ? "border-yellow-600 text-yellow-600"
                    : "border-transparent text-gray-600 hover:text-yellow-600"
                }`}
              >
                Intelligent Computing
              </button>
            </div>
            {/* Content Display with dynamic background colors */}
            <div
              className={`max-w-3xl mx-auto flex p-8 rounded-xl shadow-lg ${
                activeTab === "Big Data"
                  ? "bg-blue-100"
                  : activeTab === "Cloud Computing"
                  ? "bg-green-50"
                  : "bg-yellow-50"
              }`}
            >
              {renderContent()}
            </div>
            <button
              className=" lg:ml-[580px] uppercase px-6 md:px-8 py-2 md:py-3 my-10 font-medium bg-blue-600 border border-white rounded-lg text-white hover:bg-blue-700 transition-all duration-300"
              onClick={() => navigate("/new_paper_submission")} // Navigate to register page
              aria-label="Register for the conference"
            >
              Register Here
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conference;
