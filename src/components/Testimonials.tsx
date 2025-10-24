"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "I had the pleasure of leading Sefina at Eskalate, where she stood out for her creativity, reliability, and strong teamwork. She consistently delivered quality work, communicated effectively, and showed a genuine eagerness to learn. Sefina is proactive, adaptable, and a great addition to any team.",
    name: "Nebiyou Elias",
    role: "Tech Lead, Eskalate",
  },
  {
    id: 2,
    text: "During her time at Qismati, Sefina demonstrated strong technical expertise and commitment. She actively contributed to the development, maintenance, and issue resolution of the Qismati mobile app. Her problem-solving skills and dedication made her a valuable member of the team. I highly recommend her as a skilled and dependable developer.",
    name: "Mohammed Abdullah",
    role: "CEO, Qismati (Orozones LLC)",
  },
  {
    id: 3,
    text: "Sefina consistently demonstrated exceptional technical skill and problem-solving ability. Her work on the AASTU app greatly improved performance and usability. Through her modular Flutter components and smart state management, the app became smoother, faster, and more intuitive  a clear reflection of her dedication to quality and user experience.",
    name: "Mihret Agegnehu",
    role: "Team Lead, GDG",
  },
]

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

const cardVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const underlineVariants: any = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 px-4 md:px-8 lg:px-16 bg-[#373543]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What People Say</h2>

          <motion.div
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-1 w-20 bg-[#bb852b] mx-auto mb-6 origin-left"
          />

          <p className="text-[#a0a0a0] text-lg">Feedback from teams and clients</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={cardVariants} className="group relative">
              <div className="relative h-full bg-[#282830] rounded-2xl p-8 border border-[#bb852b]/20 hover:border-[#bb852b]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(187,133,43,0.2)]">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-[#bb852b] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Testimonial Text */}
                <p className="text-[#e0e0e0] text-base leading-relaxed mb-8">"{testimonial.text}"</p>

                {/* Gold Line Divider */}
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#bb852b] to-transparent mb-6" />

                {/* Author Info */}
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{testimonial.name}</h3>
                  <p className="text-[#bb852b] text-sm">{testimonial.role}</p>
                </div>

                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#bb852b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
