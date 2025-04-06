import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUtensils, FaLaptopCode } from "react-icons/fa";

const teamMembers = [
  {
    name: "Sakshar Devgon",
    role: "Developer",
    icon: <FaUserTie />,
    color: "text-purple-500",
  },
  {
    name: "Aaryan Mishra",
    role: "Developer",
    icon: <FaLaptopCode />,
    color: "text-blue-500",
  },
  {
    name: "Danish Nawaz Ahmed ",
    role: "Culinary Expert",
    icon: <FaUtensils />,
    color: "text-green-500",
  },
  {
    name: "Ayush Roy ",
    role: "UI/UX Designer",
    icon: <FaUserTie />,
    color: "text-yellow-500",
  },
];

const Team = () => {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl text-center">
      <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
        Meet Our <span className="text-green-500">Team</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        The crew behind the flavor – designers, coders & cooks making the magic happen 🍽💻✨
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`text-5xl mb-4 ${member.color}`}>{member.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
