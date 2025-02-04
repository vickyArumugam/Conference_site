import React from "react";

const PaymentGuidelines = () => {
  const guidelines = [
    "Registration fee will be made only after the acceptance of your article.",
    "Payment can be made through Online Transfer (NEFT / IMPS) or Cash Deposit.",
    "After making payment, kindly send us the proof of the payment (Screenshot / Reference Number / Transaction ID or Counter Slip) along with your Paper ID & necessary details.",
    "It is mandatory for at least one author of each accepted paper to register and attend the conference to present the paper.",
    "All the abstracts of the selected papers will be published in the conference proceedings with ISBN.",
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-12 px-6 ">
      <div className="max-w-4xl mx-auto space-y-6 my-10">
        {guidelines.map((text, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 shadow-lg rounded-lg p-6 text-center text-lg sm:text-xl font-medium border-l-4 border-blue-500 hover:border-purple-600 transition-all duration-300"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentGuidelines;
