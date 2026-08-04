"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export default function TechStack() {
  const doubledStack = [...techStack, ...techStack];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#0075FF]">Tech Stack</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Technologies and tools we use to build amazing projects.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubledStack.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-xl bg-white border border-gray-100 text-gray-700 font-medium whitespace-nowrap hover:border-blue-200 hover:text-[#0075FF] transition-all shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="flex animate-marquee-reverse mt-4">
          {[...doubledStack].reverse().map((tech, index) => (
            <div
              key={`${tech}-rev-${index}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-xl bg-white border border-gray-100 text-gray-700 font-medium whitespace-nowrap hover:border-blue-200 hover:text-[#0075FF] transition-all shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
