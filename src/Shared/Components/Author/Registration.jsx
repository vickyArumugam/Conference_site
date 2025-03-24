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

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8">
          <div className="bg-blue-50 p-6">
            <h2 className="text-2xl font-semibold text-blue-800 text-center">
              Bank Details
            </h2>
          </div>
          <div className="p-6">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    Account Name
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    J.K. Jothi Kalpana Professor, Dept. of Computer Science &
                    Engineering VRSCET, Arasur.
                  </td>
                </tr>

                {/* Account Number */}
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    Account Number
                  </td>
                  <td className="py-3 px-4 text-gray-600">045100050302269</td>
                </tr>

                {/* Branch */}
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    Branch
                  </td>
                  <td className="py-3 px-4 text-gray-600">Villupuram</td>
                </tr>

                {/* IFSC Code */}
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    IFSC Code
                  </td>
                  <td className="py-3 px-4 text-gray-600">TMBL0000045</td>
                </tr>

                {/* MICR */}
                <tr className="hover:bg-gray-50 transition duration-200">
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    MICR
                  </td>
                  <td className="py-3 px-4 text-gray-600">605060005</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGuidelines;
