"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilter, FaSearch } from "react-icons/fa";
import TeamCard from "@/components/cards/TeamCard";
import { teamMembers } from "@/lib/data";

const roles = ["All", "Leadership", "Members"];
const departments = ["All", "Computer Science", "Data Science", "Software Engineering", "HCI", "Information Technology"];

export default function TeamPage() {
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = teamMembers.filter((member) => {
    const roleMatch = selectedRole === "All" || (selectedRole === "Leadership" ? member.isLead : !member.isLead);
    const deptMatch = selectedDept === "All" || member.department === selectedDept;
    const searchMatch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return roleMatch && deptMatch && searchMatch;
  });

  const leadership = filteredMembers.filter((m) => m.isLead);
  const members = filteredMembers.filter((m) => !m.isLead);

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Meet the <span className="text-[#0075FF]">Team</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">The passionate individuals behind Elite Tech Club, driving innovation and community.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10 space-y-4">
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search members..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" />
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-500 text-sm"><FaFilter className="w-4 h-4 inline mr-1" />Role:</span>
              {roles.map((role) => (
                <button key={role} onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedRole === role ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>{role}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-500 text-sm">Dept:</span>
              {departments.map((dept) => (
                <button key={dept} onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedDept === dept ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>{dept}</button>
              ))}
            </div>
          </div>
        </motion.div>

        {(selectedRole === "All" || selectedRole === "Leadership") && leadership.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{leadership.map((member, index) => (<TeamCard key={member.id} member={member} index={index} />))}</div>
          </div>
        )}
        {(selectedRole === "All" || selectedRole === "Members") && members.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Members</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{members.map((member, index) => (<TeamCard key={member.id} member={member} index={index} />))}</div>
          </div>
        )}
        {filteredMembers.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-gray-400 text-lg">No team members found matching your filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
