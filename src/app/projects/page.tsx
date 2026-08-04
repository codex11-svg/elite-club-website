"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilter, FaSearch } from "react-icons/fa";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["All", "Web", "Mobile", "AI/ML", "Bot", "Other"];
const statuses = ["All", "Active", "In Progress", "Completed"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
    const statusMatch = selectedStatus === "All" || project.status === selectedStatus;
    const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && statusMatch && searchMatch;
  });

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our <span className="text-[#0075FF]">Projects</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">Real-world projects built by our members. Open source, collaborative, and impactful.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10 space-y-4">
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search projects..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" />
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-500 text-sm"><FaFilter className="w-4 h-4 inline mr-1" />Category:</span>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedCategory === cat ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>{cat}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-gray-500 text-sm">Status:</span>
              {statuses.map((status) => (
                <button key={status} onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedStatus === status ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>{status}</button>
              ))}
            </div>
          </div>
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (<ProjectCard key={project.id} project={project} index={index} />))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found matching your filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
