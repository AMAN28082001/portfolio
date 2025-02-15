import { motion } from "framer-motion"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack MERN application for online shopping with real-time inventory management and secure payment processing.",
      image: "./images/cp.png",
      github: "https://github.com/AMAN28082001/Sudoku",
      live: "https://aman28082001.github.io/Sudoku/",
    },
    {
      title: "Task Management App",
      description:
        "A React-based app for managing daily tasks and projects with drag-and-drop functionality and team collaboration features.",
      image: "https://ih1.redbubble.net/image.5327814051.9720/st,small,507x507-pad,600x600,f8f8f8.jpg",
      github: "https://github.com/johndoe/task-management-app",
      live: "https://task-app.example.com",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A Node.js and Socket.io powered real-time chat app with user authentication, private messaging, and group chat functionality.",
      image: "https://img.freepik.com/premium-vector/chef-recipe-logo-design-vector-illustration-white-background_685330-3470.jpg",
      github: "https://github.com/johndoe/realtime-chat-app",
      live: "https://chat-app.example.com",
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-black-800 via-gray-800 to-gray-900 py-16 sm:py-0">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-teal-300 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-teal-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
                  >
                    <GitHub size={20} className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}