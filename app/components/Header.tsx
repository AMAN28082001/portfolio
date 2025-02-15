"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isMobile: boolean
}

export default function Header({ isMobile }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const menuRef = useRef<HTMLDivElement>(null)

  // Updated menuItems to include Certifications and Education
  const menuItems = ["About", "Skills", "Projects", "Experience", "Certifications", "Education", "Contact"]

  // Handle scroll event to update scrolled state and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = menuItems.map((item) => document.getElementById(item.toLowerCase()))
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [menuItems])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Smooth scroll to section
  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-teal-400 font-playfair">AR</span>
        
        {isMobile ? (
          <div ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-teal-400 p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md"
                >
                  {menuItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`block px-6 py-3 ${
                        activeSection === item.toLowerCase() ? "text-teal-400" : "text-white"
                      } hover:bg-gray-800 transition-colors`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleSmoothScroll(item.toLowerCase())
                        setIsMenuOpen(false)
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <nav className="flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  activeSection === item.toLowerCase() ? "text-teal-400" : "text-gray-300"
                } hover:text-teal-400 transition-colors font-medium`}
                onClick={(e) => {
                  e.preventDefault()
                  handleSmoothScroll(item.toLowerCase())
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </motion.header>
  )
}