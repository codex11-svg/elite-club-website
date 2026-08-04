"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import TeamCard from "@/components/cards/TeamCard";
import { teamMembers } from "@/lib/data";

export default function Team() {
  // Show only Gen 2 (current generation) on home page
  const currentGenMembers = teamMembers.filter((m) => m.generation === 2 && m.isLead);

  return (
    <section className="py-24 relative bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0075FF] text-white">
                Gen 2
              </span>
              <span className="text-gray-400 text-sm">Current Leaders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-[#0075FF]">Team</span>
            </h2>
            <p className="text-gray-500 max-w-xl">
              Passionate individuals driving innovation and fostering community growth.
            </p>
          </div>
          <Link
            href="/team"
            className="group flex items-center gap-2 text-[#0075FF] font-medium hover:text-[#005FCC] transition-colors"
          >
            View All Generations
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentGenMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Quick links to past generations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-gray-400 text-sm">Also check out:</span>
          <Link
            href="/team"
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.setItem("selectedGen", "0");
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 text-sm font-medium hover:bg-amber-100 transition-all"
          >
            <FaUsers className="w-4 h-4" />
            Gen 0 — Founders
          </Link>
          <Link
            href="/team"
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.setItem("selectedGen", "1");
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 text-sm font-medium hover:bg-blue-100 transition-all"
          >
            <FaUsers className="w-4 h-4" />
            Gen 1 — First Batch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
