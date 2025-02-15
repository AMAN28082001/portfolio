import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import Image from "next/image"

export default function Certifications() {
  const certifications = [
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      description:
        "Gained comprehensive knowledge of front-end web development, including responsive design, DOM manipulation, and interactive web applications using HTML, CSS, and JavaScript.",
      image: "https://about.coursera.org/static/whiteCoursera-23ec484f7091914430ce19b07d09aedf.svg", // Replace with your image path
      credential: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
      issuer: "Coursera",
    },
    {
      title: "Algorithmic Toolbox",
      description:
        "Learned fundamental algorithmic techniques and ideas for computational problems, including sorting, searching, and dynamic programming, with practical coding challenges.",
      image: "https://about.coursera.org/static/whiteCoursera-23ec484f7091914430ce19b07d09aedf.svg", // Replace with your image path
      credential: "https://www.coursera.org/learn/algorithmic-toolbox",
      issuer: "Coursera",
    },
    {
      title: "SQL - The Complete Introduction to SQL programming",
      description:
        "Mastered SQL programming, including database design, querying, and optimization, to manage and analyze data efficiently in relational databases.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXzeImAiH1KttGE_h6Si1V2WwaiGPpBUGXQ&s", // Replace with your image path
      credential: "https://www.udemy.com/course/sql-the-complete-introduction-to-sql-programming/",
      issuer: "Udemy",
    },
  ]

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-0">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-teal-300 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.title}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={certification.image || "/placeholder.svg"}
                alt={certification.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-teal-300">{certification.title}</h3>
                <p className="text-gray-300 mb-2">{certification.description}</p>
                <p className="text-gray-400 text-sm mb-4">Issued by: {certification.issuer}</p>
                <div className="flex justify-between">
                  <a
                    href={certification.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
                  >
                    <Award size={20} className="mr-2" />
                    View Credential
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