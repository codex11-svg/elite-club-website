"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 shadow-sm"
    >
      <div className={`h-20 bg-gradient-to-r ${member.gradient}`} />
      <div className="relative -mt-10 mx-auto w-20 h-20">
        <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-sm">
          <Image src={member.image} alt={member.name} width={80} height={80} className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="p-6 pt-3 text-center">
        <h3 className="text-gray-900 font-bold text-lg">{member.name}</h3>
        <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-1`}>
          {member.role}
        </p>
        <p className="text-gray-400 text-xs mb-3">{member.department} &middot; {member.year}</p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{member.bio}</p>
        <div className="flex items-center justify-center gap-3">
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0075FF] hover:bg-blue-50 transition-all">
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0075FF] hover:bg-blue-50 transition-all">
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0075FF] hover:bg-blue-50 transition-all">
              <FaTwitter className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
