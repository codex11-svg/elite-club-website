"use client";

import { motion } from "framer-motion";
import { FaLaptop, FaUsers, FaBolt, FaCode, FaLightbulb, FaGraduationCap } from "react-icons/fa";

const whatWeDo = [
  {
    icon: FaLaptop,
    text: "Organizing workshops on emerging technologies",
  },
  {
    icon: FaUsers,
    text: "Hosting guest lectures from industry experts",
  },
  {
    icon: FaBolt,
    text: "Conducting hackathons and coding competitions",
  },
  {
    icon: FaCode,
    text: "Providing training sessions on practical skills",
  },
  {
    icon: FaLightbulb,
    text: "Creating projects that make a difference",
  },
];

const leadership = [
  {
    icon: FaGraduationCap,
    title: "Academic Excellence",
    description: "Fostering a culture of academic excellence through workshops, seminars, and hands-on training.",
  },
  {
    icon: FaUsers,
    title: "Community Building",
    description: "Creating a supportive community where students can collaborate, learn, and grow together.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation Hub",
    description: "Encouraging innovation and creativity through project-based learning and research.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border bg-white shadow-xl"
        >
          {/* Header */}
          <div className="flex flex-col space-y-1.5 p-6 text-center pb-2">
            <div className="tracking-tight text-5xl font-bold text-[#0075FF]">The Elite Club</div>
            <div className="text-xl text-blue-600 mt-2">Anjuman-I-Islam Kalsekar Technical Campus</div>
          </div>
          <div className="shrink-0 bg-border h-[1px] my-4 mx-auto w-1/2 bg-gray-200" />

          <div className="p-6 pt-0 grid gap-12">
            {/* About + What We Do */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <motion.section
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2 className="text-3xl font-semibold text-[#0075FF] mb-4">About Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to The Elite Club, a vibrant community dedicated to nurturing talent and
                    fostering innovation in the fields of Electronics and Computer Science. Our club
                    provides students with a platform to explore their interests, develop new skills,
                    and engage with technology in meaningful ways.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold text-[#0075FF] mb-2">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to empower students through hands-on training and workshops,
                    equipping them with the knowledge and skills necessary to excel in the rapidly
                    evolving tech landscape. We believe in creating a collaborative environment where
                    creativity and critical thinking flourish.
                  </p>
                </motion.section>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-[#0075FF] mb-4">What We Do</h3>
                <ul className="space-y-4">
                  {whatWeDo.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 hover:bg-blue-50"
                    >
                      <item.icon className="h-8 w-8 text-[#0075FF] flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Leadership */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-semibold text-[#0075FF] mb-6 text-center">Our Leadership</h3>
              <div className="grid gap-8 md:grid-cols-3">
                {leadership.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="rounded-lg border shadow-sm bg-blue-50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="p-6 pt-6 text-center">
                      <item.icon className="h-16 w-16 text-[#0075FF] mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
