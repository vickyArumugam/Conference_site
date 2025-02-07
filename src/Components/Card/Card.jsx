import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PricingCard = ({ plan, price, features = [], gradient, animation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      const pricingCardElement = document.getElementById(plan);
      if (pricingCardElement) {
        const rect = pricingCardElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [plan]);

  return (
    <motion.div
      id={plan}
      initial={{
        opacity: 0,
        x:
          animation === "fade-left"
            ? -150
            : animation === "fade-right"
            ? 150
            : 0,
        y: animation === "fade-up" ? 150 : 0,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible
          ? 0
          : animation === "fade-left"
          ? -150
          : animation === "fade-right"
          ? 150
          : 0,
        y: isVisible ? 0 : animation === "fade-up" ? 150 : 0,
      }}
      transition={{ duration: 1 }}
      className={`bg-white shadow-lg rounded-lg px-6 py-8 sm:px-8 sm:py-10 relative border-3 ${gradient} min-h-[400px] w-[260px] sm:w-[200px] lg:w-[260px] flex flex-col justify-between`}
    >
      <div className="flex justify-center mb-6">
        <div className="relative rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center border-4 border-white shadow-lg">
          <span className="text-3xl sm:text-4xl font-semibold text-gray-800">
            ₹{price}
          </span>
        </div>
      </div>
      <div className="text-center text-lg sm:text-xl font-medium uppercase mb-4">
        {plan}
      </div>
      <ul className="mb-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700 text-sm sm:text-base">
            {feature}
          </li>
        ))}
      </ul>
      {/* <div className="flex flex-col items-center space-y-4">
        <button className="px-4 py-2 sm:px-6 sm:py-3 text-white bg-blue-400 rounded-full font-medium text-sm sm:text-lg transition-all hover:opacity-90">
          Register
        </button>
      
      
      </div> */}

      <button
        className="uppercase px-6 md:px-8 py-2 md:py-3 my-10 font-medium bg-blue-600 border border-white rounded-lg text-white hover:bg-blue-700 transition-all duration-300 "
        onClick={() => navigate("/new_paper_submission")} // Navigate to register page
        aria-label="Register for the conference"
      >
        Register Here
      </button>
    </motion.div>
  );
};

const PricingTable = () => {
  const pricingPlans = [
    {
      plan: "Academicians",
      price: 29,
      gradient: "border-yellow-300",
      animation: "fade-left",
    },
    {
      plan: "Students & PG/Ph.D Scholar",
      price: 59,
      gradient: "border-purple-400",
      animation: "fade-up",
    },
    {
      plan: "Industry Delegates",
      price: 99,
      gradient: "border-green-400",
      animation: "fade-right",
    },
    {
      plan: "Overseas Delegates",
      price: 129,
      gradient: "border-blue-400",
      animation: "fade-up",
    },
  ];

  return (
    <div
      className="min-h-auto flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/network-4851119_1280.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
