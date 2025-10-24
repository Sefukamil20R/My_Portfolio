"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
  <footer className="relative bg-[#282830] py-12 overflow-hidden z-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          } as any}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 bg-[#bb852b] rounded-full blur-3xl"
        />
      </div>

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        } as any}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-20 w-40 h-40 bg-[#bb852b] rounded-full blur-2xl opacity-20 pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        } as any}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-20 w-40 h-40 bg-[#bb852b] rounded-full blur-2xl opacity-20 pointer-events-none"
      />

      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            animate={{
              textShadow: [
                "0 0 10px rgba(187, 133, 43, 0.3)",
                "0 0 20px rgba(187, 133, 43, 0.6)",
                "0 0 10px rgba(187, 133, 43, 0.3)",
              ],
            } as any}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-lg font-light text-[#f2f2f2] tracking-wide"
          >
            © 2025 Sefina Kamile. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
