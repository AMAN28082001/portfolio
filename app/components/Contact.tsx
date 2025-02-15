"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-0">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-teal-300 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-teal-300 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-10 text-white focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-teal-300 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-10 text-white focus:outline-none focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-teal-300 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border rounded-lg bg-white bg-opacity-10 text-white focus:outline-none focus:border-teal-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 w-full"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}