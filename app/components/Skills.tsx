import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 90, color: "bg-yellow-400" },
    { name: "React", level: 85, color: "bg-blue-400" },
    { name: "Node.js", level: 80, color: "bg-green-400" },
    { name: "Express", level: 75, color: "bg-gray-400" },
    { name: "MongoDB", level: 70, color: "bg-green-600" },
    { name: "HTML/CSS", level: 90, color: "bg-orange-400" },
    { name: "Git", level: 85, color: "bg-red-400" },
    { name: "RESTful APIs", level: 80, color: "bg-purple-400" },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-0">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-teal-400 mb-12 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-700 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-gray-100">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}