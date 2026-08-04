"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

interface ToastProps {
  message: string;
  type?: "success" | "info";
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type = "success", isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          className="fixed top-6 left-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-gray-100 shadow-xl"
        >
          {type === "success" ? (
            <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          ) : (
            <FaInfoCircle className="w-5 h-5 text-[#0075FF] flex-shrink-0" />
          )}
          <span className="text-gray-900 font-medium text-sm">{message}</span>
          <button onClick={onClose} className="ml-2 text-gray-400 hover:text-gray-600">
            <FaTimes className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
