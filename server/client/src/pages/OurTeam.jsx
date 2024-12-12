import React from "react";
import { motion } from "framer-motion"; // Optional for animations
import member1 from "../assets/member1.jpg"; // Replace with actual image paths
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";

const teamMembers = [
 
  {
    name: "shamim tanvir",
    designation: "CEO & Founder",
    image: member1,
  },
  {
    name: "rana",
    designation: "Chief Marketing Officer",
    image: member2,
  },
  {
    name: "jewl",
    designation: "Lead Developer",
    image: member3,
  },
];

const TeamPage = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in">Meet Our Team</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          We are a group of passionate professionals committed to excellence. Our team is here to bring your vision to life!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
