import { motion } from "framer-motion"
import { GraduationCap, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Education() {
  const education = [
    {
      title: "BTech in CSE",
      description: "Secured an aggregate of 9.14 CGPA.",
      image: "https://image-static.collegedunia.com/public/college_data/images/appImage/12816_ANANDC_APP.jpg?h=260&w=360&mode=crop", // Replace with your image path
      institution: "Anand International College of Engineering",
      duration: "2019 - 2023",
      transcript: "https://example.com/transcript",
    },
    {
      title: "CBSE 12th Examination",
      description: "Secured an aggregate of 73.20 percentage.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGq204Tg0N4lwMff9tLqJS5obmytaUAfdfA&s", // Replace with your image path
      institution: "TATA DAY SCHOOL SJJUA",
      duration: "2019",
      transcript: "https://example.com/transcript",
    },
    {
      title: "CBSE 10th Examination",
      description: "Secured an aggregate of 8 CGPA.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGq204Tg0N4lwMff9tLqJS5obmytaUAfdfA&s", // Replace with your image path
      institution: "TATA DAY SCHOOL SJJUA",
      duration: "2017",
      transcript: "https://example.com/transcript",
    },
  ]

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-0">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-teal-300 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={edu.image || "/placeholder.svg"}
                alt={edu.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-teal-300">{edu.title}</h3>
                <p className="text-gray-300 mb-2">{edu.description}</p>
                <p className="text-gray-400 text-sm mb-2">Institution: {edu.institution}</p>
                <p className="text-gray-400 text-sm mb-4">Duration: {edu.duration}</p>
                <div className="flex justify-between">
                  <a
                    href={edu.transcript}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-300 hover:text-teal-400 transition duration-300"
                  >
                    <GraduationCap size={20} className="mr-2" />
                    View Transcript
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