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
    <div className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-6 my-10">
        {guidelines.map((text, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center text-lg sm:text-xl font-medium border-l-4 border-blue-500 hover:border-purple-600 transition-all duration-300"
          >
            {text}
          </div>
        ))}

        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="bg-blue-400 text-white text-center py-2 rounded-md text-xl font-semibold mb-4">
            Bank Details
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Account Name :</span>
              <span>J.K. Jothi Kalpana Professor, Dept. of Computer Science & Engineering VRSCET, Arasur.</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Account Number :</span>
              <span>045100050302269</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Branch :</span>
              <span>Villupuram</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">IFSC Code :</span>
              <span>TMBL0000045</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">MICR :</span>
              <span>605060005</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGuidelines;