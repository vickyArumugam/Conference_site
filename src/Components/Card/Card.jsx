import React from "react";
import { motion } from "framer-motion";

const PricingCard = ({ plan, price, features = [], gradient, buttonColor, ribbon, animation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: animation === "fade-left" ? -150 : animation === "fade-right" ? 150 : 0, y: animation === "fade-up" ? 150 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`bg-white shadow-lg rounded-lg overflow-hidden px-6 py-8 sm:px-8 sm:py-10 relative border-3 ${gradient}`}
    >
      {/* Ribbon */}
      {ribbon && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
          {ribbon}
        </div>
      )}

      {/* Price Section */}
      <div className="flex justify-center mb-6">
        <div
          className={`relative ${buttonColor} rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex items-center justify-center border-4 border-white shadow-lg`}
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            <span className="absolute text-xl sm:text-2xl lg:text-3xl font-bold top-[18px] sm:top-[24px] left-[10px] sm:left-[14px]">
              $
            </span>
            {price}
          </span>
        </div>
      </div>

      {/* Plan Name */}
      <div className="text-center text-lg sm:text-xl lg:text-2xl font-medium uppercase mb-4">{plan}</div>

      {/* Features */}
      <ul className="mb-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex justify-between items-center text-gray-700 text-sm sm:text-base">
            <span>{feature.name}</span>
            <span className={`text-lg ${feature.included ? "text-green-500" : "text-red-500"}`}>
              {feature.included ? "✔" : "✖"}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="flex justify-center">
        <button className={`px-4 py-2 sm:px-6 sm:py-3 text-white rounded-full font-medium text-sm sm:text-lg transition-all hover:opacity-90 ${buttonColor}`}>
          Purchase
        </button>
      </div>
    </motion.div>
  );
};

const PricingTable = () => {
  const pricingPlans = [
    {
      plan: "Basic",
      price: 29,
      features: [
        { name: "One Selected Template", included: true },
        { name: "100% Responsive Design", included: true },
        { name: "Credit Remove Permission", included: false },
        { name: "Lifetime Template Updates", included: false },
      ],
      gradient: "border-yellow-300",
      buttonColor: "bg-yellow-500",
      animation: "fade-left",
    },
    {
      plan: "Premium",
      price: 59,
      features: [
        { name: "Five Existing Templates", included: true },
        { name: "100% Responsive Design", included: true },
        { name: "Credit Remove Permission", included: true },
        { name: "Lifetime Template Updates", included: false },
      ],
      gradient: "border-purple-400",
      buttonColor: "bg-purple-600",
      animation: "fade-up",
    },
    {
      plan: "Ultimate",
      price: 99,
      features: [
        { name: "All Existing Templates", included: true },
        { name: "100% Responsive Design", included: true },
        { name: "Credit Remove Permission", included: true },
        { name: "Lifetime Template Updates", included: true },
      ],
      gradient: "border-green-400",
      buttonColor: "bg-green-600",
      animation: "fade-right",
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
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 lg:gap-20">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
