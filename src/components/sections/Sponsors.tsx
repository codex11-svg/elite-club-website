"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sponsors } from "@/lib/data";

const tierColors = {
  Platinum: "bg-gray-900 text-white",
  Gold: "bg-amber-50 text-amber-700 border-amber-200",
  Silver: "bg-gray-50 text-gray-600 border-gray-200",
};

export default function Sponsors() {
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
            Our <span className="text-[#0075FF]">Partners</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Supported by industry leaders who believe in nurturing the next generation of tech talent.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3 }}
              className="group relative bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-16 h-16 mb-3 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-gray-900 font-semibold text-sm text-center">{sponsor.name}</span>
              <span className={`mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium border ${tierColors[sponsor.tier]}`}>
                {sponsor.tier}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
