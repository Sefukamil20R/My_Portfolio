"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Send } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const timeoutRef = useRef<number | null>(null)

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const gotcha = (formRef.current?.querySelector('input[name="_gotcha"]') as HTMLInputElement | null)?.value || ''

      // Post directly to Formspree
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _gotcha: gotcha, _next: window.location.href }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // show success for 30s
        setTimeout(() => setSubmitStatus('idle'), 30000)
      } else {
        const json = await response.json().catch(() => null)
        setSubmitStatus('error')
        // eslint-disable-next-line no-console
        console.error('Formspree error', json)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Submission exception', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-[#282830] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Let's <span className="text-[#bb852b]">Connect</span>
          </h2>
          <p className="text-[#a0a0a0] text-lg">
            I'm always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#373543] rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-sm border border-[#bb852b]/10"
          variants={itemVariants}
        >
          {/* Honeypot field to help Formspree detect spam without showing reCAPTCHA */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          {/* Name Field */}
          <motion.div className="mb-6" variants={itemVariants}>
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#282830] text-white rounded-lg border border-[#bb852b]/20 focus:border-[#bb852b] focus:outline-none transition-colors duration-300 placeholder-[#a0a0a0]"
              placeholder="Your name"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div className="mb-6" variants={itemVariants}>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#282830] text-white rounded-lg border border-[#bb852b]/20 focus:border-[#bb852b] focus:outline-none transition-colors duration-300 placeholder-[#a0a0a0]"
              placeholder="your.email@example.com"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div className="mb-8" variants={itemVariants}>
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#282830] text-white rounded-lg border border-[#bb852b]/20 focus:border-[#bb852b] focus:outline-none transition-colors duration-300 placeholder-[#a0a0a0] resize-none"
              placeholder="Your message here..."
            />
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              className="text-green-400 text-center mb-4 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Message sent successfully!
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div
              className="text-red-400 text-center mb-4 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Failed to send message. Please try again.
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-gradient-to-r from-[#bb852b] to-[#d4a574] text-white font-semibold rounded-lg relative overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-2xl hover:shadow-[#bb852b]/40 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={18} />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.button>
        </motion.form>

        {/* Divider */}
        <motion.div className="my-12 flex items-center gap-4" variants={itemVariants}>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#bb852b]/30 to-transparent" />
          <span className="text-[#a0a0a0] text-sm">or reach out directly</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#bb852b]/30 to-transparent" />
        </motion.div>

        {/* Footer Contact Info */}
        <motion.div className="flex items-center justify-center gap-8" variants={itemVariants}>
          {/* Phone Icon */}
          <motion.a
            href="tel:+251987161875"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              // Try to navigate to tel: URL — some desktop browsers won't open a phone app if none is installed
              window.location.href = "tel:+251987161875"
            }}
            className="group relative p-3 rounded-full bg-[#373543] border border-[#bb852b]/20 text-[#bb852b] hover:bg-[#bb852b] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#bb852b]/40"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            title="Call me"
          >
            <Phone size={24} />
            <span className="pointer-events-none absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-[#111] text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-30">
              +251 98 716 1875
            </span>
          </motion.a>

          {/* Email Icon */}
          <motion.a
            href="mailto:tenzilk20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              // Navigate to mailto: which should open the user's mail client
              window.location.href = "mailto:tenzilk20@gmail.com"
            }}
            className="group relative p-3 rounded-full bg-[#373543] border border-[#bb852b]/20 text-[#bb852b] hover:bg-[#bb852b] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#bb852b]/40"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            title="Send me an email"
          >
            <Mail size={24} />
            <span className="pointer-events-none absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-[#111] text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-30">
              tenzilk20@gmail.com
            </span>
          </motion.a>

          {/* Telegram Icon */}
          <motion.a
            href="https://t.me/Tenzil20"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full bg-[#373543] border border-[#bb852b]/20 text-[#bb852b] hover:bg-[#bb852b] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#bb852b]/40"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            title="Message me on Telegram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.97-.924c-.644-.203-.658-.644.135-.954l11.593-4.47c.537-.196 1.006.128.832.941z" />
            </svg>
            <span className="pointer-events-none absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-[#111] text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-30">
              @Tenzil20
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}