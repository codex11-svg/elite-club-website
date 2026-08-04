"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaTrophy, FaCodeBranch, FaUserGraduate } from "react-icons/fa";
import { features } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  workshop: FaLaptopCode,
  hackathon: FaTrophy,
  opensource: FaCodeBranch,
  mentorship: FaUserGraduate,
};

export default function Features() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We <span className="text-[#0075FF]">Offer</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From workshops to hackathons, we provide the resources and community you need to grow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || FaLaptopCode;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#0075FF]" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
