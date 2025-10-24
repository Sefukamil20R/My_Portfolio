"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "Safaricom", logo: "/logos/safaricom-logo.png" },
  { name: "Gebeya", logo: "/logos/GebeyaLogo.png" },
  { name: "Ethioware", logo: "/logos/EthiowareLogo.png" },
  { name: "Google Developers Group", logo: "/logos/gdscsvg.svg" },
  { name: "Eskalate", logo: "/logos/eskalatesvg.svg" },
  { name: "Qismati", logo: "/logos/QismatiLogo.svg" },
  { name: "A2SV", logo: "/logos/a2svsvg.svg" },
]

// Duplicate for seamless loop
const duplicatedCompanies = [...companies, ...companies]

export default function Companies() {
  return (
    <section className="py-20 bg-[#282830] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Trusted by Leading Teams</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-[#bb852b]"></div>
            <p className="text-[#bb852b] font-semibold">and Innovators</p>
            <div className="h-1 w-12 bg-[#bb852b]"></div>
          </div>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#282830] to-transparent z-10 pointer-events-none"></div>

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#282830] to-transparent z-10 pointer-events-none"></div>

          {/* Logos Container */}
          <motion.div
            className="flex gap-12 items-center justify-center"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 h-20 w-40 flex items-center justify-center"
                whileHover={{ scale: 1.06 }}
              >
                {/* Show logo itself without a background box */}
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-200 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
