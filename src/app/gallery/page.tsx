"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight, FaFilter } from "react-icons/fa";
import { galleryItems } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => selectedCategory === "All" || item.category === selectedCategory);

  const openLightbox = (index: number) => { setLightboxIndex(index); document.body.style.overflow = "hidden"; };
  const closeLightbox = () => { setLightboxIndex(null); document.body.style.overflow = "auto"; };
  const goToPrev = () => { if (lightboxIndex !== null) setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1); };
  const goToNext = () => { if (lightboxIndex !== null) setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1); };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Event <span className="text-[#0075FF]">Gallery</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">Capturing moments from our workshops, hackathons, and community events.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FaFilter className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500 text-sm font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedCategory === cat ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>{cat}</button>
            ))}
          </div>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }} onClick={() => openLightbox(index)} className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm">
              <Image src={item.src} alt={item.title} width={600} height={400} className="w-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.category} &middot; {item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
            <button onClick={closeLightbox} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"><FaTimes className="w-5 h-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); goToPrev(); }} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"><FaChevronLeft className="w-5 h-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"><FaChevronRight className="w-5 h-5" /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
              <Image src={filteredItems[lightboxIndex].src} alt={filteredItems[lightboxIndex].title} width={1200} height={800} className="max-w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg">{filteredItems[lightboxIndex].title}</h3>
                <p className="text-gray-400 text-sm">{filteredItems[lightboxIndex].category} &middot; {filteredItems[lightboxIndex].date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
