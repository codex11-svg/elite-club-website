"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import TeamCard from "@/components/cards/TeamCard";
import { teamMembers } from "@/lib/data";

export default function Team() {
  const leads = teamMembers.filter((m) => m.isLead);

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
            View All Members
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leads.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
