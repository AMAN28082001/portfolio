"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Certifications from "./components/Certifications"
import Education from "./components/Education"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      <Footer />

    </main>
  )
}