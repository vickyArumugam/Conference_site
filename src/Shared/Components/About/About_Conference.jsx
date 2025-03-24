import React from "react";
import Conference from "./Conference";
import MetaTags from "../SEO/MetaData";

const AboutConference = () => {
  const pageTitle = "About Conference | ICASMET 2025";
  const pageDescription =
    "Learn more about ICASMET 2025, an international conference on Applied Science and Multidisciplinary Engineering.";
  const pageUrl = "https://icasmet.com/about_conference";
  return (
    <>
      <MetaTags title={pageTitle} description={pageDescription} url={pageUrl} />

      <div
        className="h-[40vh] bg-cover bg-center flex justify-center items-center text-white px-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/images/business-8941891_1920.jpg')`,
        }}
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">About the Conference</h1>
        </div>
      </div>
      <Conference />
    </>
  );
};

export default AboutConference;
