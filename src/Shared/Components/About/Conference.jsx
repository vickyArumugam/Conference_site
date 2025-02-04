import React from "react";

const Conference = () => {
  return (
    <div>
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
              Big Data, Cloud, and Intelligent Computing
            </h2>

            {/* Big Data Paragraph */}
            <div className="bg-white p-8 mb-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Big Data</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Big Data refers to massive and complex datasets that traditional tools cannot handle, defined by the <strong>3 Vs</strong>: Volume, Velocity, and Variety. It is generated from sources like social media, sensors, and IoT devices, enabling data-driven decision-making and predictive analytics. Technologies like <strong>Hadoop</strong> and <strong>Spark</strong> are used to process and analyze this data. Businesses use Big Data to improve efficiency, personalize experiences, and innovate. However, challenges like data privacy and the need for skilled professionals persist. The future of Big Data lies in real-time processing, AI integration, and ethical data usage.
              </p>
            </div>

            {/* Cloud Computing Paragraph */}
            <div className="bg-white p-8 mb-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Cloud Computing</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Cloud Computing is the delivery of computing services like storage, servers, databases, and software over the internet. It offers <strong>scalability</strong>, <strong>flexibility</strong>, and <strong>cost-efficiency</strong> by eliminating the need for physical infrastructure. Services are categorized into <strong>IaaS</strong> (Infrastructure as a Service), <strong>PaaS</strong> (Platform as a Service), and <strong>SaaS</strong> (Software as a Service). Businesses use cloud computing for data storage, application hosting, and disaster recovery. Popular providers include <strong>AWS</strong>, <strong>Microsoft Azure</strong>, and <strong>Google Cloud</strong>. It enables remote access, collaboration, and innovation while reducing operational costs.
              </p>
            </div>

            {/* Intelligent Computing Paragraph */}
            <div className="bg-white p-8 mb-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Intelligent Computing</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Intelligent Computing refers to advanced systems that combine <strong>AI</strong>, <strong>machine learning</strong>, and <strong>data analytics</strong> to mimic human-like decision-making. It leverages technologies like neural networks, natural language processing, and computer vision to solve complex problems. Applications include <strong>autonomous vehicles</strong>, <strong>smart cities</strong>, <strong>healthcare diagnostics</strong>, and <strong>personalized recommendations</strong>. Intelligent computing systems learn from data, adapt to new information, and improve over time. It aims to enhance efficiency, accuracy, and innovation across industries. The future of intelligent computing lies in integrating AI with <strong>edge computing</strong> and <strong>quantum computing</strong> for faster, smarter solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conference;