import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Core/Button/Button";

const ConferenceTracks = () => {
  const navigate = useNavigate();
  const aboutConference = [
    { field_name: "Artificial Intelligence", icon: "🤖" },
    { field_name: "Machine Learning", icon: "🧠" },
    { field_name: "Data Science", icon: "📊" },
    { field_name: "Robotics", icon: "🦾" },
    { field_name: "Cybersecurity", icon: "🔒" },
    { field_name: "Software Engineering", icon: "💻" },
    { field_name: "Blockchain Technology", icon: "🔗" },
    { field_name: "Cloud Computing", icon: "☁️" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-white">
      {/* Hero Section */}
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl text-gray-500">
          Explore the cutting-edge fields shaping the future of technology.
        </p>
      </motion.div>

      {/* Tracks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {aboutConference.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
                  {item.field_name}
                </h2>
                <p className="text-gray-700 text-[14px] ">
                  Discover the latest advancements in{" "}
                  {item.field_name.toLowerCase()}.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-blue-700 h-1"></div>
            </motion.div>
          ))}
        </motion.div>
    <Button />
      </div>
    </div>
  );
};

export default ConferenceTracks;
