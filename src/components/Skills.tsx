"use client"

import { motion } from "framer-motion"
import { SiFlutter, SiReact, SiKotlin, SiSwift } from "react-icons/si"

const skills = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "Swift", icon: SiSwift, color: "#F05138" },
]

export default function Skills() {
  // Duplicate the skills array to create seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <section className="relative w-full overflow-hidden bg-[#282830] py-24">
      {/* Optional subtle gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#bb852b]/5 to-transparent" />

      <div className="relative">
        {/* Infinite scrolling container */}
        <motion.div
          className="flex gap-16 md:gap-24"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative flex flex-shrink-0 flex-col items-center justify-center gap-3"
            >
              <skill.icon
                className="h-12 w-12 transition-all duration-300 hover:scale-110 md:h-14 md:w-14"
                style={{ color: skill.color }}
                aria-label={skill.name}
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30">
                <skill.icon className="h-12 w-12 md:h-14 md:w-14" style={{ color: skill.color }} />
              </div>
              <span className="text-pretty text-center text-xs font-medium md:text-sm" style={{ color: skill.color }}>
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Optional fade edges for polished look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#282830] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#282830] to-transparent" />
    </section>
  )
}
