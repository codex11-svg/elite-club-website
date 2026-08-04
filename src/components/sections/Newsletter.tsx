"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 shadow-sm text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay in the <span className="text-[#0075FF]">Loop</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest events, workshops, and tech insights delivered to your inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-green-600"
            >
              <FaCheck className="w-5 h-5" />
              <span className="font-medium">Thanks for subscribing! Check your inbox.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0075FF] text-white font-semibold hover:bg-[#005FCC] transition-colors cursor-pointer"
              >
                <FaPaperPlane className="w-4 h-4" />
                Subscribe
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
