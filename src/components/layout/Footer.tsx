"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

const footerLinks = {
  Club: [
    { label: "About Us", href: "/" },
    { label: "Our Team", href: "/team" },
    { label: "Projects", href: "/projects" },
    { label: "Events", href: "/events" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Join Us", href: "/join" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaDiscord, href: "https://discord.com", label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#0075FF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-gray-900 font-bold text-lg">
                Elite<span className="text-[#0075FF]">Club</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm mb-6">
              Empowering the next generation of tech leaders through hands-on learning,
              collaborative projects, and innovative events.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0075FF] hover:bg-blue-50 hover:border-blue-100 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-gray-900 font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-500 text-sm hover:text-[#0075FF] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Elite Tech Club. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">Built with passion by the Elite Team</p>
        </div>
      </div>
    </footer>
  );
}
