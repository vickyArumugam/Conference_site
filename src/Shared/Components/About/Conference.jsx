import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Core/Button/Button";

const Conference = () => {
  const [activeTab, setActiveTab] = useState("Applied Science");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case "Applied Science":
        return (
          <div className="mx-auto px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Applied Science plays a crucial role in translating theoretical
              knowledge into practical applications across industries. It
              integrates disciplines like physics, chemistry, and biology to
              develop innovative solutions for real-world challenges.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              This field contributes to advancements in <strong>healthcare</strong>,
              <strong>materials engineering</strong>, and <strong>energy efficiency</strong>,
              driving technological progress and improving everyday life.
            </p>
          </div>
        );
      case "Multidisciplinary Engineering":
        return (
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Multidisciplinary Engineering is an evolving field that combines
              multiple branches of engineering to solve complex challenges.
              It involves the integration of <strong>mechanical</strong>,
              <strong>electrical</strong>, <strong>civil</strong>, and
              <strong>software engineering</strong> to drive innovation.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              This approach is essential for modern advancements in areas such
              as sustainable infrastructure, smart cities, and robotics.
              Engineers collaborate across disciplines to enhance functionality,
              efficiency, and sustainability in technological developments.
            </p>
          </div>
        );
      case "Technology & Innovation":
        return (
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Technology & Innovation fuel the modern world by fostering
              groundbreaking advancements in various sectors. It encompasses
              emerging fields such as <strong>AI</strong>, <strong>quantum computing</strong>,
              and <strong>biotechnology</strong> to reshape industries and daily life.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              As new technologies emerge, businesses and researchers focus on
              improving efficiency, automation, and connectivity. The rapid
              evolution of technology continues to revolutionize industries,
              enhancing productivity and global communication.
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
        
          <div>
            {/* Tabs for the topics */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setActiveTab("Applied Science")}
                className={`px-4 py-2 mx-2 font-semibold border-b-2 transition-colors  ${
                  activeTab === "Applied Science"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-600 cursor-pointer"
                }`}
              >
                Applied Science
              </button>
              <button
                onClick={() => setActiveTab("Multidisciplinary Engineering")}
                className={`px-4 py-2 mx-2 font-semibold border-b-2 transition-colors ${
                  activeTab === "Multidisciplinary Engineering"
                    ? "border-green-600 text-green-600"
                    : "border-transparent text-gray-600 hover:text-green-600 cursor-pointer"
                }`}
              >
                Multidisciplinary Engineering
              </button>
              <button
                onClick={() => setActiveTab("Technology & Innovation")}
                className={`px-4 py-2 mx-2 font-semibold border-b-2 transition-colors ${
                  activeTab === "Technology & Innovation"
                    ? "border-yellow-600 text-yellow-600"
                    : "border-transparent text-gray-600 hover:text-yellow-600 cursor-pointer"
                }`}
              >
                Technology  Innovation
              </button>
            </div>
            {/* Content Display with dynamic background colors */}
            <div
              className={`max-w-3xl mx-auto flex p-8 rounded-xl shadow-lg ${
                activeTab === "Applied Science"
                  ? "bg-blue-100"
                  : activeTab === "Multidisciplinary Engineering"
                  ? "bg-green-50"
                  : "bg-yellow-50"
              }`}
            >
              {renderContent()}
            </div>
          </div>
        </div>
      </section>
      <Button />
    </div>
  );
};

export default Conference;
