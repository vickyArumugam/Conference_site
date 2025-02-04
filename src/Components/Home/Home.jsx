import React, { useState, useEffect } from "react";
import Header from "../Core/Header/Header";
import AboutPage from "../About/About";
import PricingTable from "../Card/Card";
import ContactForm from "../Contact/Contact";
import Ourmission from "../OurMission/OurMission";
import ServiceCards from "../Card/ServiceCards";
import Papersubmission from "../../Shared/Components/Author/Papersubmission";
// import RegisterPage from "../Register/Register";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // State for switching components

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  if (showRegister) {
    return <Papersubmission onBack={() => setShowRegister(false)} />;
  }

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
            International Conference on Advances in Big Data, Cloud, and Intelligent Computing (ICABCIC)
          </h1>

          <h2 className="mt-4 text-[28px] md:text-[38px] lg:text-[50px] font-medium font-Helvetica">
            26<sup>th</sup> April, 2024
          </h2>

          <button
            className="uppercase px-6 md:px-8 py-2 md:py-3 mt-4 font-medium bg-btn-bg border border-white rounded hover:bg-red-900 animate-fade-up"
            onClick={() => setShowRegister(true)} // Switch to Register Page
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

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform ease-in-out duration-300 animate-bounce hover:animate-pulse"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Home;
