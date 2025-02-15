import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 flex items-center justify-center px-4 md:px-6 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          className="mb-4 text-teal-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; 2025 Aman Kumar Rajak. All rights reserved.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-400 transition duration-300"
          >
            <GitHub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-400 transition duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-400 transition duration-300"
          >
            <Twitter size={24} />
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

