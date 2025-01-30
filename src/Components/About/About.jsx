import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-gray-100 py-10 flex items-center">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 my-10">
          {/* Content Section */}
          <div className="md:w-2/5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-center">
              Cloud Computing
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              The Cloud Computing International Conference serves as a premier
              gathering for professionals, researchers, academicians, and
              practitioners from around the globe to discuss the latest
              advancements, challenges, and future trends in cloud computing.
            </p>
          </div>

          {/* Video Section */}
          <div className="md:w-1/2 flex justify-center">
            <video
              src="/Videos/128211-747086069_small.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-lg aspect-video"
              preload="none"
              poster="/images/video-placeholder.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-100 pb-10 flex ">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between space-y-6 md:space-y-0 my-10">
          {/* Video Section */}
          <div className=" flex justify-center mt-5">
            <video
              src="/Videos/128210-747086064_small.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full max-w-lg aspect-video"
              preload="none"
              poster="/images/video-placeholder.jpg"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content Section */}
          <div className="md:w-2/5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6 text-center">
              Big Data
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
              The Cloud Computing International Conference serves as a premier
              gathering for professionals, researchers, academicians, and
              practitioners from around the globe to discuss the latest
              advancements, challenges, and future trends in cloud computing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
