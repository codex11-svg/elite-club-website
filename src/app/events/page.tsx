"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilter, FaSearch } from "react-icons/fa";
import EventCard from "@/components/cards/EventCard";
import { events } from "@/lib/data";

const eventTypes = ["All", "Hackathon", "Workshop", "Bootcamp", "Seminar", "Competition"];

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [showPast, setShowPast] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) => {
    const typeMatch = selectedType === "All" || event.type === selectedType;
    const pastMatch = showPast ? event.isPast : !event.isPast;
    const searchMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && pastMatch && searchMatch;
  });

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our <span className="text-[#0075FF]">Events</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">Workshops, hackathons, bootcamps, and more. Find your next learning opportunity.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="relative w-full sm:w-72">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search events..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" />
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setShowPast(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${!showPast ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>Upcoming</button>
              <button onClick={() => setShowPast(true)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${showPast ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>Past Events</button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 mr-2"><FaFilter className="w-4 h-4 text-gray-400" /><span className="text-gray-500 text-sm">Filter:</span></div>
            {eventTypes.map((type) => (
              <button key={type} onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${selectedType === type ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>{type}</button>
            ))}
          </div>
        </motion.div>

        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (<EventCard key={event.id} event={event} index={index} />))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-gray-400 text-lg">No events found matching your filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
