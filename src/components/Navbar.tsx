"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"

const navLinks = [
  // { name: "About", href: "#about" },
  // { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // { name: "Certificates", href: "#certificates" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const navbarOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95])

  useEffect(() => {
    setScrolled(window.scrollY > 20)

    const sectionIds = navLinks.map((link) => link.href.substring(1))
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id
        if (entry.isIntersecting) {
          setActiveSection(`#${id}`)
        }
      })
    }, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // update active state immediately
      setActiveSection(href)
    } else {
      // fallback: navigate normally
      window.location.hash = href
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#bb852b] to-transparent z-50"
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#282830]/95 to-[#373543]/95 backdrop-blur-md border-b border-[#53402a]/30 transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.span
                  className="text-3xl md:text-4xl font-serif italic font-bold bg-gradient-to-r from-[#bb852b] via-[#d4a855] to-[#bb852b] bg-clip-text text-transparent tracking-wide"
                  style={{ fontFamily: "'Brush Script MT', cursive" }}
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  Sefina
                </motion.span>

                {/* Animated sparkle */}
                <motion.div
                  className="absolute -top-1 -right-2 text-[#bb852b]"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles size={16} />
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 blur-xl bg-[#bb852b]/0 group-hover:bg-[#bb852b]/20 transition-all duration-500 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                            <Link
                              href={link.href}
                              onClick={(e) => handleLinkClick(e as any, link.href)}
                              className="relative px-4 py-2 group block"
                            >
                      <motion.span
                        className={`text-sm font-medium transition-all duration-300 ${
                          isActive ? "text-[#bb852b]" : "text-[#f2f2f2]"
                        }`}
                        whileHover={{
                          y: -2,
                          color: "#bb852b",
                          textShadow: "0 0 20px rgba(187, 133, 43, 0.5)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>

                      {/* Active indicator with glow */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#bb852b] to-transparent"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 blur-sm bg-[#bb852b]"
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      )}

                      {/* Hover underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#bb852b] to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-[#bb852b]/0 group-hover:bg-[#bb852b]/10 transition-all duration-300 -z-10"
                        whileHover={{ scale: 1.1 }}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <motion.button
              whileTap={{ scale: 0.9, rotate: 90 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-br from-[#373543] to-[#282830] text-[#f2f2f2] hover:from-[#515266] hover:to-[#373543] transition-all duration-300 shadow-lg shadow-black/30 border border-[#bb852b]/20"
              aria-label="Toggle menu"
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden bg-gradient-to-b from-[#282830]/98 to-[#1a1a20]/98 backdrop-blur-2xl border-t border-[#bb852b]/20 shadow-2xl shadow-black/50"
              >
                <div className="px-4 py-6 space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link href={link.href} onClick={(e) => handleLinkClick(e as any, link.href)} className="block group">
                          <motion.div
                            whileHover={{ scale: 1.02, x: 8 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative overflow-hidden ${
                              isActive
                                ? "bg-gradient-to-r from-[#53402a] to-[#3d2f1f] text-[#bb852b] shadow-lg shadow-[#bb852b]/20"
                                : "text-[#f2f2f2] hover:bg-gradient-to-r hover:from-[#373543] hover:to-[#282830] hover:text-[#bb852b]"
                            }`}
                          >
                            {link.name}

                            {/* Shine effect on hover */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                          </motion.div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
