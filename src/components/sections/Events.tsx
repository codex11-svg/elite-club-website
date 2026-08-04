"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import EventCard from "@/components/cards/EventCard";
import { events } from "@/lib/data";

export default function Events() {
  const upcomingEvents = events.filter((e) => !e.isPast).slice(0, 3);

  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-[#0075FF]">Events</span>
            </h2>
            <p className="text-gray-500 max-w-xl">
              Don&apos;t miss out on our latest workshops, hackathons, and networking events.
            </p>
          </div>
          <Link
            href="/events"
            className="group flex items-center gap-2 text-[#0075FF] font-medium hover:text-[#005FCC] transition-colors"
          >
            View All Events
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
