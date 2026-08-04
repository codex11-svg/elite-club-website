"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaCrown, FaStar, FaUsers } from "react-icons/fa";
import TeamCard from "@/components/cards/TeamCard";
import { teamMembers } from "@/lib/data";

const generations = [
  { id: 0, label: "Gen 0", subtitle: "Founders", icon: FaCrown, color: "bg-amber-500", description: "The visionaries who started it all in 2020" },
  { id: 1, label: "Gen 1", subtitle: "First Batch", icon: FaStar, color: "bg-blue-500", description: "The pioneers who expanded the club to 100+ members" },
  { id: 2, label: "Gen 2", subtitle: "Current Leaders", icon: FaUsers, color: "bg-[#0075FF]", description: "The current generation leading the charge" },
];

export default function TeamPage() {
  const [activeGen, setActiveGen] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("selectedGen");
      if (saved) {
        sessionStorage.removeItem("selectedGen");
        return parseInt(saved, 10);
      }
    }
    return 2;
  });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = teamMembers.filter((member) => {
    const genMatch = member.generation === activeGen;
    const searchMatch =
      searchQuery === "" ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return genMatch && searchMatch;
  });

  const leads = filteredMembers.filter((m) => m.isLead);
  const members = filteredMembers.filter((m) => !m.isLead);
  const currentGen = generations.find((g) => g.id === activeGen)!;

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Elite <span className="text-[#0075FF]">Team</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Meet the generations of passionate individuals who built and continue to drive Elite Tech Club forward.
          </p>
        </motion.div>

        {/* Generation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {generations.map((gen) => {
              const Icon = gen.icon;
              const isActive = activeGen === gen.id;
              return (
                <button
                  key={gen.id}
                  onClick={() => setActiveGen(gen.id)}
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 min-w-[180px] ${
                    isActive
                      ? "border-[#0075FF] bg-blue-50 shadow-md"
                      : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? gen.color : "bg-gray-100"
                    } text-white`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div
                      className={`font-bold text-lg ${
                        isActive ? "text-[#0075FF]" : "text-gray-900"
                      }`}
                    >
                      {gen.label}
                    </div>
                    <div className="text-xs text-gray-400">{gen.subtitle}</div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="gen-active-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#0075FF] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Generation Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <p className="text-gray-500 text-sm">{currentGen.description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${currentGen.label} members...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all"
            />
          </div>
        </motion.div>

        {/* Members Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGen}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Leadership */}
            {leads.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaCrown className="w-5 h-5 text-amber-500" />
                  Leadership
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  The driving force behind {currentGen.label}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {leads.map((member, index) => (
                    <TeamCard key={member.id} member={member} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Members */}
            {members.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaUsers className="w-5 h-5 text-[#0075FF]" />
                  Members
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  The talented individuals of {currentGen.label}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {members.map((member, index) => (
                    <TeamCard key={member.id} member={member} index={index} />
                  ))}
                </div>
              </div>
            )}

            {filteredMembers.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">
                  No members found in {currentGen.label} matching your search.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
