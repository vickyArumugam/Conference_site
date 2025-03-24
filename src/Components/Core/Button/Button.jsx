import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-auto md:h-[120px] flex flex-col md:flex-row items-center justify-around px-6 md:px-12 py-4 md:py-0 bg-green-200">

      {/* Left Side - Title & Content */}
      <div className="max-w-md sm:max-w-xl text-center md:text-left ">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Conference Registration</h2>
        <p className="text-gray-600 mt-1 w-full md:w-[120%] text-[18px]">
          Join us for an insightful conference with industry experts. Secure your spot now!
        </p>
      </div>

      {/* Right Side - Button */}
      <button
        className="mt-4 md:mt-0 uppercase px-6 md:px-8 py-2 md:py-3 font-medium bg-blue-600 border border-white rounded-lg text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        onClick={() => navigate("/new_paper_submission")}
        aria-label="Register for the conference"
      >
        Register Here
      </button>
    </section>
  );
}
