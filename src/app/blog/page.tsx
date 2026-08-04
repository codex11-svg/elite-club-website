"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilter, FaSearch } from "react-icons/fa";
import BlogCard from "@/components/cards/BlogCard";
import { blogPosts } from "@/lib/data";

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = otherPosts.filter((post) => {
    const tagMatch = selectedTag === "All" || post.tags.includes(selectedTag);
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return tagMatch && searchMatch;
  });

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our <span className="text-[#0075FF]">Blog</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">Insights, tutorials, and stories from the Elite Tech Club community.</p>
        </motion.div>

        {featuredPost && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-16">
            <BlogCard post={featuredPost} featured />
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-10 space-y-4">
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" />
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-500 text-sm py-2"><FaFilter className="w-4 h-4 inline mr-1" />Filter by tag:</span>
            {["All", ...allTags].map((tag) => (
              <button key={tag} onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedTag === tag ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>{tag}</button>
            ))}
          </div>
        </motion.div>

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (<BlogCard key={post.id} post={post} index={index} />))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-gray-400 text-lg">No posts found matching your filter.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
