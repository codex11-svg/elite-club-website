"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0075FF] to-[#005FCC] p-12 lg:p-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join the{" "}
              <span className="text-blue-200">Elite?</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Applications are open for the Spring 2025 semester. Take the first step
              towards building something extraordinary with a community that cares.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0075FF] font-semibold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95"
            >
              Apply Now
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
