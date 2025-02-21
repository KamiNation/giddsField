"use client"

import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";



const AnimatedSettingsIcon = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }} // Rotate 360 degrees
      transition={{
        repeat: Infinity, // Infinite loop
        duration: 2, // Takes 2 seconds for a full rotation
        ease: "linear", // Smooth constant speed
      }}
    >
      <FaCog size={50} color="#3498db" />
    </motion.div>
  );
};

export default AnimatedSettingsIcon;


export const AnimatedEmailIcon = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }} // Bouncing effect
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      className="text-4xl text-blue-500"
    >
      <FaEnvelope />
    </motion.div>
  );
};



export const AnimatedAddressIcon = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }} // Pulsing effect
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      className="text-4xl text-red-500"
    >
      <FaMapMarkerAlt />
    </motion.div>
  );
};


export  const AnimatedTimeIcon = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 10, -10, 0] }} // Swing effect
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="text-4xl text-green-500"
    >
      <FaClock />
    </motion.div>
  );
};


export const AnimatedPhoneIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.5, 1] }} // Blinking effect
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      className="text-4xl text-blue-500"
    >
      <FaPhoneAlt />
    </motion.div>
  );
};



export const AnimatedBulb = () => {
  return (
    <motion.div
      initial={{ scale: 1, color: "#ffeb3b" }} // Initial state (yellow)
      animate={{
        scale: [1, 1.2, 1],
        color: ["#ffeb3b", "blue", "#ffeb3b"], // Yellow to white transition
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <FaLightbulb size={50} />
    </motion.div>
  );
};
