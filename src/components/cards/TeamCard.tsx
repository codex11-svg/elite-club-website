"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaSearchPlus } from "react-icons/fa";
import { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
  onImageClick?: (imageUrl: string, name: string) => void;
}

const genLabels: Record<number, { label: string; color: string }> = {
  0: { label: "Gen 0", color: "bg-amber-500" },
  1: { label: "Gen 1", color: "bg-blue-500" },
  2: { label: "Gen 2", color: "bg-[#0075FF]" },
};

export default function TeamCard({ member, index = 0, onImageClick }: TeamCardProps) {
  const genInfo = genLabels[member.generation] || { label: "Gen 2", color: "bg-[#0075FF]" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 shadow-sm"
    >
      {/* Gradient Top */}
      <div className={`h-20 bg-gradient-to-r ${member.gradient} opacity-80`} />

      {/* Generation Badge */}
      <div className="absolute top-3 right-3">
        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold text-white ${genInfo.color} shadow-sm`}>
          {genInfo.label}
        </span>
      </div>

      {/* Avatar (Clickable with Hover Zoom Indicator) */}
      <div className="relative -mt-10 mx-auto w-20 h-20">
        <button
          type="button"
          onClick={() => onImageClick?.(member.image, member.name)}
          className="relative w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-sm group/avatar cursor-pointer block focus:outline-none"
          title="Click to view full photo"
        >
          <Image
            src={member.image}
            alt={member.name}
            width={80}
            height={80}
            className="object-cover w-full h-full group-hover/avatar:scale-110 transition-transform duration-300"
          />
          {/* Zoom Overlay on Hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
            <FaSearchPlus className="w-4 h-4" />
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="p-6 pt-3 text-center">
        <h3 className="text-gray-900 font-bold text-lg">{member.name}</h3>
        <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-1`}>
          {member.role}
        </p>
        <p className="text-gray-400 text-xs mb-3">
          {member.department} &middot; {member.year}
        </p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{member.bio}</p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0075FF] hover:bg-blue-50 transition-all"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0075FF] hover:bg-blue-50 transition-all"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0075FF] hover:bg-blue-50 transition-all"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
