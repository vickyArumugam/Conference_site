import React from "react";
import { useNavigate } from "react-router-dom";

const KeyDatesDetails = () => {
  const navigate = useNavigate();
  const keyDates = [
    {
      event: "Call for Papers Opens",
      date: "January 15, 2025",
      description:
        "The call for papers will open on this date. Researchers can start submitting their abstracts and papers.",
      color: "blue",
    },
    {
      event: "Paper Submission Deadline",
      date: "March 31, 2025",
      description:
        "This is the last date to submit your research papers. Make sure to review the submission guidelines.",
      color: "green",
    },
    {
      event: "Notification of Acceptance",
      date: "May 15, 2025",
      description:
        "Authors will be notified about the acceptance or rejection of their submissions on this date.",
      color: "purple",
    },
    {
      event: "Early Bird Registration Ends",
      date: "June 30, 2025",
      description:
        "Register before this date to avail of early bird discounts for conference participation.",
      color: "orange",
    },
    {
      event: "Conference Dates",
      date: "August 20-22, 2025",
      description:
        "The main conference will take place over three days. Attendees can participate in keynote sessions, workshops, and networking events.",
      color: "red",
    },
    {
      event: "Final Paper Submission",
      date: "July 15, 2025",
      description:
        "Final versions of accepted papers must be submitted by this date for inclusion in the conference proceedings.",
      color: "teal",
    },
  ];

  // Function to get dot and card colors
  const getDotColor = (color) => {
    switch (color) {
      case "blue":
        return { dot: "bg-blue-500", card: "bg-blue-50" };
      case "green":
        return { dot: "bg-green-500", card: "bg-green-50" };
      case "purple":
        return { dot: "bg-purple-500", card: "bg-purple-50" };
      case "orange":
        return { dot: "bg-orange-500", card: "bg-orange-50" };
      case "red":
        return { dot: "bg-red-500", card: "bg-red-50" };
      case "teal":
        return { dot: "bg-teal-500", card: "bg-teal-50" };
      default:
        return { dot: "bg-gray-500", card: "bg-gray-50" };
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="p-6">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-300"></div>

            {/* Timeline Items */}
            <ul className="space-y-8">
              {keyDates.map((item, index) => {
                const { dot, card } = getDotColor(item.color);
                const isEven = index % 2 === 0;

                return (
                  <li key={index} className="flex items-start group relative">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${dot} rounded-full`}
                    ></div>

                    {/* Event Details */}
                    <div
                      className={`${
                        isEven
                          ? "mr-auto pr-10 text-right"
                          : "ml-auto pl-10 text-left"
                      } w-1/2`}
                    >
                      <p className="text-lg font-semibold text-gray-800">
                        {item.event}
                      </p>
                      <p className="text-md text-gray-600">{item.date}</p>
                    </div>

                    {/* Hover Card (Appears Opposite Side) */}
                    <div
                      className={`absolute ${
                        isEven ? "left-0 ml-12" : "right-0 mr-12"
                      } mt-10 w-64 p-4 ${card} shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10`}
                    >
                      <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Register Button */}
        <button
          className="uppercase px-6 md:px-8 py-2 md:py-3 mt-20 font-medium bg-blue-600 border border-white rounded-lg text-white hover:bg-blue-700 transition-all duration-300"
          onClick={() => navigate("/new_paper_submission")}
          aria-label="Register for the conference"
        >
          Register Here
        </button>
      </div>
    </div>
  );
};

export default KeyDatesDetails;
