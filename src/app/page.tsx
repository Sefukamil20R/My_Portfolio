import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Companies from "@/components/Companies"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import Resume from "@/components/Resume"

import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero section */}
      <Hero />

  <Experience />

  <Companies />

      <Projects />

      <Testimonials />

      <Resume />

  <Contact />
  <Footer />
    </div>
  )
}
