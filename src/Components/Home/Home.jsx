import React, { useState, useEffect } from "react";
import Header from "../Core/Header/Header";
import AboutPage from "../About/About";
import PricingTable from "../Card/Card";
import ContactForm from "../Contact/Contact";
import Ourmission from "../OurMission/OurMission";
import ServiceCards from "../Card/ServiceCards";
import Papersubmission from "../../Shared/Components/Author/Papersubmission";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
  

  return (
    <>
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
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-[32px] md:text-[42px] lg:text-[54px] font-bold font-Helvetica leading-[1.3]">
          International Conference on Applied Science, Multidisciplinary Engineering & Technology (ICASMET)
          </h1>

          <h2 className="mt-4 text-[28px] md:text-[38px] lg:text-[50px] font-medium font-Helvetica leading-[1.3]">
            26<sup>th</sup> April, 2025
          </h2>

          <button
            className="uppercase px-6 md:px-8 py-2 md:py-3 mt-20 font-medium bg-blue-600 border border-white rounded-lg text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer"
            onClick={() => navigate("/new_paper_submission")}
            aria-label="Register for the conference"
          >
            Register Here
          </button>
        </div>
      </section>

        <AboutPage />
        <PricingTable />
        <Ourmission />
        <ServiceCards />
        <ContactForm />

      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform ease-in-out duration-300 cursor-pointer "
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Home;
