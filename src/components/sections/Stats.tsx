"use client";

import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaCode, FaTrophy } from "react-icons/fa";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  users: FaUsers,
  calendar: FaCalendarAlt,
  code: FaCode,
  trophy: FaTrophy,
};

export default function Stats() {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Numbers That <span className="text-[#0075FF]">Speak</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our impact in the tech community, measured in members, events, and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || FaUsers;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#0075FF]" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
