import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Nessco India",
      period: "June 2023 - Present",
      description:
        "Optimized website performance metrics, including Total Blocking Time (TBT), Largest Contentful Paint (LCP), and First Contentful Paint (FCP), reducing load times by 30% and improving user engagement. Built and deployed an interactive website with Node.js backend and Next.js 14 frontend, using Google Sheets as a database and automating updates with Node-Cron and FTP. Implemented an API-driven data pipeline, enabling seamless JSON generation and real-time access to website content. Designed and built a quotation management system tailored to meet specific business requirements and improve operational workflows.",
    },
    {
      title: "Software Engineering Intern",
      company: "Nessco India",
      period: "December 2022 - May 2023",
      description:
        "Gained hands-on experience in structuring backend and frontend systems, focusing on industry best practices and scalable design patterns. Contributed to small-scale projects by understanding and applying modern web development frameworks and database integration techniques.",
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-0">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-teal-300 font-playfair"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-teal-400 pl-6 ml-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
              <p className="text-teal-300 mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}