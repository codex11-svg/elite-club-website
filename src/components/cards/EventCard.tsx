"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMapMarkerAlt, FaClock, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { Event } from "@/types";

interface EventCardProps {
  event: Event;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const totalSpots = event.spots ?? event.capacity ?? 100;
  const fillPercentage = Math.min((event.registered / totalSpots) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 shadow-sm"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            event.isPast ? "bg-gray-500/80 text-white" : "bg-[#0075FF]/80 text-white"
          }`}>
            {event.isPast ? "Past" : "Upcoming"}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">
            {event.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-[#0075FF] transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaCalendarAlt className="w-4 h-4 text-[#0075FF]" />
            <span>{new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaClock className="w-4 h-4 text-[#0075FF]" />
            <span>{event.time}</span>
          </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaMapMarkerAlt className="w-4 h-4 text-[#0075FF]" />
            <span>{event.venue ?? event.location ?? "TBD"}</span>
          </div>
        </div>

        {!event.isPast && (
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <div className="flex items-center gap-2 text-gray-500">
                <FaUsers className="w-4 h-4 text-green-500" />
                <span>{event.registered} / {totalSpots} registered</span>
              </div>
              <span className="text-gray-400 text-xs">{Math.round(fillPercentage)}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${fillPercentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-full rounded-full ${
                  fillPercentage >= 90 ? "bg-red-500" : fillPercentage >= 70 ? "bg-amber-500" : "bg-green-500"
                }`}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
