"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Building2, Award, Briefcase, X, ExternalLink } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    company: "Safaricom Telecommunications Ethiopia PLC",
    role: "Mobile Application Engineer",
    description:
      "Worked on the Commercial Trade App (CT App), implementing new features, refactoring existing modules, and collaborating with teams across fintech environments. Enhanced performance and maintainability across multiple flavors and environments.",
    icon: Building2,
    certificateUrl: null, // No certificate for now per request
  },
  {
    company: "Gebeya Inc",
    role: "Mobile Application Developer",
    description:
      "Built the MedaCare healthcare app from the ground up, focusing on virtual consultation features, AI chat, and smart recommendation systems. Contributed to architecture and feature integration for a seamless patient experience.",
    icon: Briefcase,
    certificateUrl: "/Gebeya.jpg",
  },
  {
    company: "Ethioware - EdTech Initiative",
    role: "Mobile Application Development Intern",
    description:
      "Participated in the design and implementation of a mental health mobile app, improving accessibility and emotional engagement through thoughtful UX and clean Flutter architecture.",
    icon: Building2,
    certificateUrl: "/Ethiware.png",
  },
  {
    company: "Google Developer Group (GDG)",
    role: "Mobile Application Developer",
    description:
      "Contributed to Compass Map, a campus navigation app helping students easily find and explore university facilities. Focused on intuitive design, mapping accuracy, and performance optimization.",
    icon: Briefcase,
    certificateUrl: "/AASTU MAP.jpg",
  },
  {
    company: "Eskalate",
    role: "Mobile Application Developer",
    description:
      "Developed high-performance mobile applications using Flutter, BLoC, TDD, and Clean Architecture. Ensured scalability, consistency, and smooth UI interactions across platforms. Collaborated closely with teams to deliver user-centered solutions that meet real-world needs.",
    icon: Building2,
    certificateUrl: null,
  },
  {
    company: "Qismati (Orozones LLC, U.S.)",
    role: "Mobile Application Developer (Freelance)",
    description:
      "Worked remotely as a freelance Mobile Application Developer on the Qismati app, contributing during the closed beta testing phase. Focused on identifying and fixing issues reported by testers, optimizing performance, and ensuring app stability. Also participated in preparing and managing deployment via the Google Play Console, gaining hands-on experience in app publishing workflows and release management.",
    icon: Briefcase,
    certificateUrl: null,
  },
]

export default function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    company: string
    url: string
  } | null>(null)

  return (
    <section id="experience" className="relative min-h-screen bg-[#282830] py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#bb852b] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#bb852b] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#f2f2f2] mb-4">
            Where I've Built <span className="text-[#bb852b]">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg">A journey through innovation and excellence</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#bb852b]/20 via-[#bb852b]/50 to-[#bb852b]/20 hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-[#373543] rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-[#bb852b]/10 transition-all duration-300"
                    >
                      {/* Accent border on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bb852b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative">
                        {/* Company Icon */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-[#bb852b]/10 rounded-xl group-hover:bg-[#bb852b]/20 transition-colors duration-300">
                              <exp.icon className="w-6 h-6 text-[#bb852b]" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-[#f2f2f2] group-hover:text-[#bb852b] transition-colors duration-300">
                                {exp.company}
                              </h3>
                              <p className="text-[#bb852b] font-medium">{exp.role}</p>
                            </div>
                          </div>

                          {/* Certificate Badge */}
                          {exp.certificateUrl && (
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="p-2 bg-[#bb852b]/10 rounded-full"
                            >
                              <Award className="w-5 h-5 text-[#bb852b]" />
                            </motion.div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                        {exp.certificateUrl && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              setSelectedCertificate({
                                company: exp.company,
                                url: exp.certificateUrl!,
                              })
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-[#bb852b]/10 hover:bg-[#bb852b]/20 text-[#bb852b] rounded-lg transition-colors duration-300 font-medium"
                          >
                            <Award className="w-4 h-4" />
                            View Certificate
                            <ExternalLink className="w-3 h-3" />
                          </motion.button>
                        )}

                        {/* Decorative corner accent */}
                        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#bb852b]/5 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot on timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#bb852b] rounded-full shadow-lg shadow-[#bb852b]/50"
                  >
                    <div className="absolute inset-0 bg-[#bb852b] rounded-full animate-ping opacity-75" />
                  </motion.div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#373543] rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 p-2 bg-[#bb852b]/10 hover:bg-[#bb852b]/20 rounded-full transition-colors duration-300 z-10"
              >
                <X className="w-6 h-6 text-[#bb852b]" />
              </button>

              {/* Certificate title */}
              <h3 className="text-2xl font-bold text-[#f2f2f2] mb-4 pr-12">
                {selectedCertificate.company} <span className="text-[#bb852b]">Certificate</span>
              </h3>

              {/* Certificate image */}
              <div className="relative rounded-xl overflow-hidden bg-[#282830] border-2 border-[#bb852b]/20">
                <img
                  src={selectedCertificate.url || "/placeholder.svg"}
                  alt={`${selectedCertificate.company} Certificate`}
                  className="w-full h-auto"
                />
              </div>

              {/* Download hint removed as requested */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
