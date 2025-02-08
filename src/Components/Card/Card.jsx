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
      whileHover={{ scale: 1.05 }}
      className={`bg-white shadow-lg rounded-xl px-4 py-6 sm:px-6 sm:py-8 relative border-2 ${gradient} min-h-[320px] w-[260px] sm:w-[180px] lg:w-[260px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex justify-center ">
        <div className="relative rounded-full w-30 h-20 sm:w-24 sm:h-24 flex items-center justify-center ">
          <span className="text-5xl sm:text-5xl font-bold text-black ">
            ₹{price}
          </span>
        </div>
      </div>
      <div className="text-center text-lg sm:text-xl font-medium uppercase">
        {plan}
      </div>

      <button
        className="uppercase px-4 py-2 sm:px-6 sm:py-2 my-4 font-medium bg-blue-600 border border-white rounded-lg text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        onClick={() => navigate("/new_paper_submission")}
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
      price: 299,
      gradient: "border-yellow-300",
      animation: "fade-left",
    },
    {
      plan: "Students & PG/Ph.D Scholar",
      price: 599,
      gradient: "border-purple-400",
      animation: "fade-up",
    },
    {
      plan: "Industry Delegates",
      price: 999,
      gradient: "border-green-400",
      animation: "fade-right",
    },
    {
      plan: "Overseas Delegates",
      price: 1299,
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
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center my-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingTable;