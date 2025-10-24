"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiFlutter, SiReact, SiKotlin, SiSwift } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Sefukamil20R", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sefina-kamile/",
      label: "LinkedIn",
    },
  ];

  const techStack = [
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiReact, name: "React Native", color: "#61DAFB" },
    { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
    { icon: SiSwift, name: "Swift", color: "#F05138" },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-12 md:pt-20 flex items-center px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-br from-[#282830] via-[#2d2d38] to-[#282830]"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#bb852b 1px, transparent 1px), linear-gradient(90deg, #bb852b 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundImage: `radial-gradient(circle at center, #bb852b 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.1,
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#bb852b] rounded-full opacity-[0.08] blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#53402a] rounded-full opacity-[0.12] blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Social links sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
            whileHover={{ scale: 1.15, x: -8 }}
            className="group relative w-11 h-11 flex items-center justify-center bg-[#373543]/50 backdrop-blur-md rounded-xl border border-[#53402a]/40 hover:border-[#bb852b] hover:bg-[#373543]/70 transition-all duration-300"
          >
            <social.icon className="w-5 h-5 text-[#f2f2f2] transition-colors duration-300" />
            <div className="absolute inset-0 rounded-xl bg-[#bb852b] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
          </motion.a>
        ))}
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Enhanced text content */}
        <div className="flex flex-col gap-6 md:gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl italic text-[#bb852b] leading-tight"
              style={{ fontFamily: "var(--font-dancing-script)" }}
            >
              Hello, I'm Sefina Kamile
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f2f2f2] tracking-tight drop-shadow-[0_0_20px_rgba(187,133,43,0.3)]"
            >
              Mobile Application Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed max-w-xl"
            >
              I enjoy transforming ideas into polished, user-focused mobile applications. My approach balances creativity with technical depth to deliver apps that truly make a difference.{" "}
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Button
              onClick={scrollToProjects}
              className="group bg-[#bb852b] hover:bg-[#d8a650] text-[#282830] font-semibold px-6 py-2 rounded-3xl text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-[#bb852b]/30 hover:scale-105"
            >
              View My Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex md:hidden gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#373543]/50 backdrop-blur-md rounded-xl border border-[#53402a]/40 hover:border-[#bb852b] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-[#bb852b]" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right side - Animated tech stack showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg h-[500px]">
            {/* Central glowing core */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#bb852b]/20 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Orbiting tech stack icons */}
            {techStack.map((tech, index) => {
              const angle = (index * 360) / techStack.length;
              const radius = 140;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    x: "-50%",
                    y: "-50%",
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    style={{
                      x: radius,
                    }}
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative group cursor-pointer"
                    >
                      <div className="p-5 bg-[#373543]/80 backdrop-blur-md rounded-2xl border border-[#53402a]/40 group-hover:border-[#bb852b] transition-all duration-300">
                        <tech.icon
                          className="w-12 h-12"
                          style={{ color: tech.color }}
                        />
                      </div>
                      <motion.div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        style={{ backgroundColor: tech.color }}
                      />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span
                          className="text-sm font-medium"
                          style={{ color: tech.color }}
                        >
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Center text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <div className="text-4xl font-bold text-[#f2f2f2] mb-2">
                Tech Stack
              </div>
              <div className="text-sm text-[#a0a0a0]">
                Cross-Platform Expertise
              </div>
            </motion.div>

            {/* Floating particles - deterministic positions to avoid SSR/CSR mismatch */}
            {Array.from({ length: 12 }).map((_, i) => {
              // Deterministic pseudo-random based on index so server/client match
              const left = `${(Math.abs(Math.sin(i * 12.9898)) * 100).toFixed(
                6
              )}%`;
              const top = `${(Math.abs(Math.cos(i * 78.233)) * 100).toFixed(
                6
              )}%`;
              const duration = 3 + Math.abs(Math.sin(i * 39.258)) * 2;
              const delay = Math.abs(Math.sin(i * 7.356)) * 2;

              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#bb852b] rounded-full"
                  style={{ left, top }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration,
                    repeat: Number.POSITIVE_INFINITY,
                    delay,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
