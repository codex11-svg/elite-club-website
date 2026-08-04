"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@elitetech.club",
    href: "mailto:hello@elitetech.club",
    color: "text-[#0075FF]",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Tech Building, Room 401",
    href: "#",
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-100",
  },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub", color: "hover:text-gray-900" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-500" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
  { icon: FaDiscord, href: "https://discord.com", label: "Discord", color: "hover:text-indigo-500" },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#0075FF]">Touch</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have a question, partnership idea, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group shadow-sm"
            >
              <div className={`w-14 h-14 rounded-xl ${info.bgColor} ${info.borderColor} border flex items-center justify-center mb-4`}>
                <info.icon className={`w-6 h-6 ${info.color}`} />
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">{info.label}</h3>
              <p className="text-gray-900 font-semibold group-hover:text-[#0075FF] transition-colors">
                {info.value}
              </p>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-gray-900 font-semibold mb-6">Follow Us</h3>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 ${social.color} hover:bg-blue-50 hover:border-blue-100 transition-all shadow-sm`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
