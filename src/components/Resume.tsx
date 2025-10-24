"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function Resume() {
  return (
    <motion.section
      className="w-full min-h-screen flex items-center justify-center bg-[#282830] px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Headline */}
        <motion.h2 className="text-5xl md:text-6xl font-bold text-white" variants={itemVariants}>
          Let's Build Something <span className="text-[#bb852b]">Great Together</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed" variants={itemVariants}>
          Open to collaborations, opportunities, and impactful mobile projects.
        </motion.p>

        {/* Download Resume Button */}
        <motion.div variants={itemVariants}>
          <a
            href="/Sefina-Kamile-Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#bb852b] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#bb852b]/50 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse" />
            <span className="relative flex items-center gap-2">
              Download Resume
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>

        {/* Decorative accent line */}
        <motion.div className="flex justify-center pt-8" variants={itemVariants}>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#bb852b] to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  )
}