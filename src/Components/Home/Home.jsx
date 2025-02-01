import React, { useState, useEffect } from "react";
import Header from "../Core/Header/Header";
import AboutPage from "../About/About";
import PricingTable from "../Card/Card";
import ContactForm from "../Contact/Contact";
import Ourmission from "../OurMission/OurMission";
import ServiceCards from "../Card/ServiceCards";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("Scroll Position:", window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header with Scroll Effect */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
        }`}
      >
        <Header />
      </header>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/images/business-8941891_1920.jpg')`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-[32px] md:text-[42px] lg:text-[54px] font-bold font-Helvetica">
            International Conference on Advances in Big Data, Cloud, and
            Intelligent Computing (ICABCIC)
          </h1>

          <h2 className="mt-4 text-[28px] md:text-[38px] lg:text-[50px] font-medium font-Helvetica">
            26<sup>th</sup> April, 2024
          </h2>

          <button
            className="uppercase px-6 md:px-8 py-2 md:py-3 mt-4 font-medium bg-btn-bg border border-white rounded hover:bg-red-900 animate-fade-up"
            onClick={() => alert("Register button clicked!")}
            aria-label="Register for the conference"
          >
            Register Here
          </button>
        </div>
      </section>

      {/* Other Sections */}
      <section className="w-full h-auto">
        <AboutPage />
      </section>
      <section className="w-full h-auto">
        <PricingTable />
      </section>
      <section className="w-full h-auto">
        <Ourmission />
      </section>
      <section className="w-full h-auto flex justify-center items-center bg-gray-300">
        <ServiceCards />
      </section>

      <section className="w-full h-auto">
        <ContactForm />
      </section>
    </>
  );
};

export default Home;
