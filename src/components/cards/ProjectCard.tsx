"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusColors = {
  Active: "bg-green-50 text-green-600 border-green-200",
  Completed: "bg-blue-50 text-blue-600 border-blue-200",
  "In Progress": "bg-amber-50 text-amber-600 border-amber-200",
};

const categoryColors = {
  Web: "bg-sky-50 text-sky-600",
  Mobile: "bg-purple-50 text-purple-600",
  "AI/ML": "bg-rose-50 text-rose-600",
  Bot: "bg-emerald-50 text-emerald-600",
  Other: "bg-gray-50 text-gray-600",
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 shadow-sm"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-block px-2.5 py-0.5 rounded-lg text-xs font-medium mb-2 ${categoryColors[project.category]}`}>
            {project.category}
          </span>
          <h3 className="text-gray-900 font-bold text-lg group-hover:text-[#0075FF] transition-colors">
            {project.title}
          </h3>
        </div>
        <span className={`px-2.5 py-0.5 rounded-lg text-xs font-medium border ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>

      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-1.5">
          <FaStar className="w-4 h-4 text-amber-400" />
          <span>{project.stars}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FaCodeBranch className="w-4 h-4 text-[#0075FF]" />
          <span>{project.forks}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-400 text-xs">Contributors:</span>
        <span className="text-gray-500 text-xs">{project.contributors.join(", ")}</span>
      </div>

      <div className="flex items-center gap-3">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 text-gray-600 text-sm font-medium hover:bg-gray-100 transition-all">
          <FaGithub className="w-4 h-4" /> Code
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-[#0075FF] text-sm font-medium border border-blue-100 hover:bg-[#0075FF] hover:text-white transition-all">
          <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}
