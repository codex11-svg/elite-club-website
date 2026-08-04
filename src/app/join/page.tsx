"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaUser, FaEnvelope, FaGraduationCap, FaCode, FaLightbulb, FaRocket } from "react-icons/fa";

const domains = [
  { id: "web", label: "Web Development", icon: FaCode },
  { id: "mobile", label: "Mobile Development", icon: FaRocket },
  { id: "ai", label: "AI / Machine Learning", icon: FaLightbulb },
  { id: "design", label: "UI/UX Design", icon: FaUser },
  { id: "devops", label: "DevOps / Cloud", icon: FaRocket },
  { id: "blockchain", label: "Blockchain / Web3", icon: FaCode },
];

const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

export default function JoinPage() {
  const [formData, setFormData] = useState({ name: "", email: "", year: "", department: "", experience: "", domains: [] as string[], whyJoin: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleDomain = (domainId: string) => {
    setFormData((prev) => ({ ...prev, domains: prev.domains.includes(domainId) ? prev.domains.filter((d) => d !== domainId) : [...prev.domains, domainId] }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.department.trim()) newErrors.department = "Department is required";
    if (!formData.experience) newErrors.experience = "Experience level is required";
    if (formData.domains.length === 0) newErrors.domains = "Select at least one domain";
    if (!formData.whyJoin.trim()) newErrors.whyJoin = "Please tell us why you want to join";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Join <span className="text-[#0075FF]">Elite</span></h1>
          <p className="text-gray-500 max-w-xl mx-auto">Applications are open for Spring 2025. Tell us about yourself and why you want to be part of the community.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-sm">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                <FaCheck className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
              <p className="text-gray-500 mb-6">Thank you for your interest in Elite Tech Club. We&apos;ll review your application and get back to you within 5-7 business days.</p>
              <p className="text-gray-400 text-sm">Check your email at {formData.email} for confirmation.</p>
            </motion.div>
          ) : (
            <motion.form key="form" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"><FaUser className="w-5 h-5 text-[#0075FF]" />Personal Information</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" placeholder="John Doe" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" placeholder="john@example.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">Year of Study</label>
                    <select value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all appearance-none cursor-pointer">
                      <option value="">Select year</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                    </select>
                    {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm font-medium mb-2">Department</label>
                    <input type="text" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all" placeholder="Computer Science" />
                    {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"><FaGraduationCap className="w-5 h-5 text-[#0075FF]" />Experience & Interests</h2>
                <div className="mb-6">
                  <label className="block text-gray-600 text-sm font-medium mb-3">Experience Level</label>
                  <div className="flex flex-wrap gap-3">
                    {experienceLevels.map((level) => (
                      <button key={level} type="button" onClick={() => setFormData({ ...formData, experience: level })}
                        className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all border ${formData.experience === level ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>{level}</button>
                    ))}
                  </div>
                  {errors.experience && <p className="text-red-500 text-xs mt-2">{errors.experience}</p>}
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-3">Domains of Interest</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {domains.map((domain) => {
                      const Icon = domain.icon;
                      const isSelected = formData.domains.includes(domain.id);
                      return (
                        <button key={domain.id} type="button" onClick={() => toggleDomain(domain.id)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all border ${isSelected ? "bg-[#0075FF] text-white border-[#0075FF]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>
                          <Icon className="w-4 h-4" />{domain.label}
                        </button>
                      );
                    })}
                  </div>
                  {errors.domains && <p className="text-red-500 text-xs mt-2">{errors.domains}</p>}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2"><FaLightbulb className="w-5 h-5 text-[#0075FF]" />Why Elite?</h2>
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">Why do you want to join Elite Tech Club?</label>
                  <textarea value={formData.whyJoin} onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })} rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] transition-all resize-none"
                    placeholder="Tell us about your goals, what you hope to learn, and how you can contribute..." />
                  {errors.whyJoin && <p className="text-red-500 text-xs mt-1">{errors.whyJoin}</p>}
                </div>
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                className="w-full py-4 rounded-xl bg-[#0075FF] text-white font-semibold text-lg hover:bg-[#005FCC] transition-colors cursor-pointer">
                Submit Application
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
