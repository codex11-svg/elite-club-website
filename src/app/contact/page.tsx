"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: "hello@elitetech.club", href: "mailto:hello@elitetech.club", color: "text-[#0075FF]", bgColor: "bg-blue-50", borderColor: "border-blue-100" },
  { icon: FaPhone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567", color: "text-green-500", bgColor: "bg-green-50", borderColor: "border-green-100" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Tech Building, Room 401", href: "#", color: "text-red-500", bgColor: "bg-red-50", borderColor: "border-red-100" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub", color: "hover:text-gray-900" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-500" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Toaster position="top-right" toastOptions={{ style: { background: "#ffffff", color: "#111827", border: "1px solid #e5e7eb" } }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get in <span className="text-[#0075FF]">Touch</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">Have a question, partnership idea, or just want to say hi? We&apos;d love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6">
            {contactInfo.map((info) => (
              <a key={info.label} href={info.href}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group shadow-sm">
                <div className={`w-12 h-12 rounded-xl ${info.bgColor} ${info.borderColor} border flex items-center justify-center flex-shrink-0`}>
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm font-medium mb-1">{info.label}</h3>
                  <p className="text-gray-900 font-semibold group-hover:text-[#0075FF] transition-colors">{info.value}</p>
                </div>
              </a>
            ))}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h3 className="text-gray-900 font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 ${social.color} hover:bg-blue-50 transition-all`} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Subject</label>
                <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" placeholder="What's this about?" />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Message</label>
                <textarea required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all resize-none" placeholder="Your message..." />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#0075FF] text-white font-semibold text-lg hover:bg-[#005FCC] transition-colors cursor-pointer">
                <FaPaperPlane className="w-4 h-4" />Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
