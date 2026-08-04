"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Elite Club"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="flex items-center">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">
                  ELITE
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-[#0075FF] to-[#00C6FF] bg-clip-text text-transparent">
                  CLUB
                </span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#0075FF]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-blue-50 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-gray-900/25" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="relative pt-20 px-4">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-1">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 px-4 py-3 mb-2">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image src="/logo.png" alt="Elite Club" fill className="object-contain" />
                  </div>
                  <span className="text-xl font-black tracking-tight">
                    <span className="text-gray-900">ELITE</span>
                    <span className="bg-gradient-to-r from-[#0075FF] to-[#00C6FF] bg-clip-text text-transparent">CLUB</span>
                  </span>
                </div>
                <div className="h-px bg-gray-100 mx-4 mb-2" />
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-blue-50 text-[#0075FF]"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
