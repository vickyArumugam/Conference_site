import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "./Contact";

const ContactDetails = () => {
  return (
    <>

    <div
      className="h-[40vh] bg-cover bg-center flex justify-center items-center text-white px-4"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/images/business-8941891_1920.webp')`,
      }}
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Contact Page</h1>
      </div>
    </div>
    <ContactForm/>
    </>
  );
};

export default ContactDetails;
