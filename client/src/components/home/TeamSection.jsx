import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Aditya Lad",
      
      graduationYear: "2026",
      college: "VIT Pune",
      linkedin: "https://www.linkedin.com/in/adityalad2004/",
      github: "https://github.com/AdityaLad2004",
    },
    {
      name: "Vallabh Wasule",
      
      graduationYear: "2026",
      college: "VIT Pune",
      linkedin: "http://www.linkedin.com/in/vallabhwasule2909",
      github: "https://github.com/Vallabh2909",
    },
    {
      name: "Anushka Kausadikar",
      graduationYear: "2026",
      college: "VIT Pune",
      linkedin: "http://www.linkedin.com/in/anushka-kausadikar-4043a125b",
      github: "https://github.com/Anushka-Kausadikar",
    },
    {
      name: "Noopur Malse",
      graduationYear: "2026",
      college: "VIT Pune",
      linkedin: "https://www.linkedin.com/in/noopur-malse-439bb327a/",
      github: "https://github.com/NoopurMalse24",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
      
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
              <div className="relative mb-6">
                
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <GraduationCap size={18} className="text-primary-500" />
                <span className="text-sm">
                  {member.college} ({member.graduationYear})
                </span>
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors duration-300">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
