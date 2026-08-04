"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCode,
  FaBrain,
  FaPalette,
  FaShieldAlt,
  FaCloud,
  FaChartBar,
  FaMobileAlt,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaRedo,
  FaLightbulb,
} from "react-icons/fa";
import { quizQuestions, domainResults } from "@/lib/data";

const domainIcons: Record<string, React.ElementType> = {
  code: FaCode,
  brain: FaBrain,
  palette: FaPalette,
  shield: FaShieldAlt,
  cloud: FaCloud,
  chart: FaChartBar,
  mobile: FaMobileAlt,
};

const CLUB_EMAIL = "hello@elitetech.club";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function JoinPage() {
  const [shuffledQuestions] = useState(() =>
    shuffleArray(quizQuestions).slice(0, 5)
  );
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const question = shuffledQuestions[currentQ];
    const option = question.options[selectedOption];

    setScores((prev) => {
      const newScores = { ...prev };
      Object.entries(option.scores).forEach(([domain, score]) => {
        newScores[domain] = (newScores[domain] || 0) + score;
      });
      return newScores;
    });

    if (currentQ < shuffledQuestions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const getRecommendedDomain = useCallback(() => {
    let maxScore = -1;
    let bestDomain = domainResults[0];
    Object.entries(scores).forEach(([domainId, score]) => {
      if (score > maxScore) {
        maxScore = score;
        const found = domainResults.find((d) => d.id === domainId);
        if (found) bestDomain = found;
      }
    });
    return bestDomain;
  }, [scores]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CLUB_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRetake = () => {
    window.location.reload();
  };

  const progress = ((currentQ + (selectedOption !== null ? 1 : 0)) / shuffledQuestions.length) * 100;

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#0075FF] text-sm font-medium mb-6">
            <FaLightbulb className="w-4 h-4" />
            Discover Your Domain
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Find Your <span className="text-[#0075FF]">Perfect Fit</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Take this quick quiz to discover which tech domain suits you best. The questions change every time!
          </p>
        </motion.div>

        {!showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>
                  Question {currentQ + 1} of {shuffledQuestions.length}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#0075FF] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  {shuffledQuestions[currentQ].question}
                </h2>

                <div className="space-y-3">
                  {shuffledQuestions[currentQ].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedOption === index
                          ? "border-[#0075FF] bg-blue-50 text-gray-900"
                          : "border-gray-100 bg-white text-gray-600 hover:border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            selectedOption === index
                              ? "border-[#0075FF] bg-[#0075FF]"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedOption === index && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="font-medium">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={handlePrev}
                disabled={currentQ === 0}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  currentQ === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <FaArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedOption === null
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#0075FF] text-white hover:bg-[#005FCC]"
                }`}
              >
                {currentQ === shuffledQuestions.length - 1 ? "See Results" : "Next"}
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* RESULTS */
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center"
            >
              <div className="mb-6">
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  Your Recommended Domain
                </span>
              </div>

              {(() => {
                const domain = getRecommendedDomain();
                const Icon = domainIcons[domain.icon] || FaCode;
                return (
                  <>
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${domain.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {domain.name}
                    </h2>

                    <p className="text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
                      {domain.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Key Skills
                      </h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {domain.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-sm font-medium border border-gray-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => setShowContactPopup(true)}
                        className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0075FF] text-white font-semibold hover:bg-[#005FCC] transition-all hover:scale-105 active:scale-95"
                      >
                        <FaEnvelope className="w-5 h-5" />
                        Interested to Join?
                      </button>
                      <button
                        onClick={handleRetake}
                        className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-all"
                      >
                        <FaRedo className="w-4 h-4" />
                        Retake Quiz
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Contact Popup */}
      <AnimatePresence>
        {showContactPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowContactPopup(false)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0075FF] to-[#005FCC] p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to Join?
                </h3>
                <p className="text-blue-100 text-sm">
                  We&apos;d love to have you on board!
                </p>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    To join Elite Tech Club, please send us an email from your personal email address with:
                  </p>
                  <ul className="text-left text-gray-500 text-sm space-y-2 mb-6 bg-gray-50 p-4 rounded-xl">
                    <li className="flex items-start gap-2">
                      <span className="text-[#0075FF] mt-0.5">•</span>
                      <span>Your name and year/department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0075FF] mt-0.5">•</span>
                      <span>The domain you&apos;re interested in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0075FF] mt-0.5">•</span>
                      <span>A brief introduction about yourself</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#0075FF] mt-0.5">•</span>
                      <span>Why you want to join Elite Club</span>
                    </li>
                  </ul>
                </div>

                {/* Email */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                    Send your email to
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${CLUB_EMAIL}?subject=Interested to Join Elite Tech Club`}
                      className="flex-1 text-[#0075FF] font-bold text-lg hover:underline"
                    >
                      {CLUB_EMAIL}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-blue-200 text-[#0075FF] text-sm font-medium hover:bg-blue-100 transition-all"
                    >
                      {copied ? (
                        <>
                          <FaCheck className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <FaCopy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Quick email button */}
                <a
                  href={`mailto:${CLUB_EMAIL}?subject=Interested to Join Elite Tech Club&body=Hi Elite Club Team,%0D%0A%0D%0AI'm interested in joining the club. Here are my details:%0D%0A%0D%0AName: [Your Name]%0D%0AYear/Department: [Your Year/Department]%0D%0ADomain of Interest: [Your Domain]%0D%0A%0D%0AWhy I want to join: [Brief introduction]%0D%0A%0D%0ALooking forward to hearing from you!%0D%0A%0D%0ABest regards`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0075FF] text-white font-semibold hover:bg-[#005FCC] transition-colors"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Open Email App
                </a>

                <button
                  onClick={() => setShowContactPopup(false)}
                  className="w-full py-3 rounded-xl bg-white border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
