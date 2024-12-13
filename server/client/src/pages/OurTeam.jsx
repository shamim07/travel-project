import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "shamim tanvir",
    designation: "সিইও ও প্রতিষ্ঠাতা",
    image: "./s1.jpg",
  },
  {
    name: "shamim",
    designation: "প্রধান বিপণন কর্মকর্তা",
    image: "/s2.jpg",
  },
  {
    name: "Tanvir",
    designation: "ট্যুরিস্ট গাইডার",
    image: "/s3.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gradient-to-r from-teal-200 to-cyan-300 text-white py-12 mt-7">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in">"আমাদের দলকে জানুন"</h2>
        <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
        "আমরা একদল উৎসাহী পেশাদার যারা উৎকর্ষতার প্রতি অঙ্গীকারবদ্ধ। আমাদের দল আপনার স্বপ্নকে বাস্তবে রূপ দিতে এখানে প্রস্তুত!"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 p-6"
            >
              <div className="w-40 h-40 mx-auto overflow-hidden rounded-full shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2">
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

export default OurTeam;
