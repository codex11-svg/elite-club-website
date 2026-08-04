"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export default function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 shadow-sm"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full overflow-hidden">
            <Image src={post.coverImage} alt={post.title} fill
              className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/80 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent md:hidden" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-[#0075FF] border border-blue-100">Featured</span>
              <span className="text-gray-400 text-sm">{post.date}</span>
            </div>
            <h2 className="text-gray-900 font-bold text-2xl mb-3 group-hover:text-[#0075FF] transition-colors">{post.title}</h2>
            <p className="text-gray-500 mb-6 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src={post.authorImage} alt={post.author} width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-gray-900 text-sm font-medium">{post.author}</p>
                  <p className="text-gray-400 text-xs">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <FaClock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 shadow-sm"
    >
      <div className="relative h-48 overflow-hidden">
        <Image src={post.coverImage} alt={post.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-500 border border-gray-100">{tag}</span>
          ))}
        </div>
        <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-[#0075FF] transition-colors line-clamp-2">{post.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={post.authorImage} alt={post.author} width={28} height={28} className="rounded-full" />
            <span className="text-gray-500 text-sm">{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <FaClock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
