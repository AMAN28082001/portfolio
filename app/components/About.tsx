import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-0">
      <div className="w-full px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-8 font-playfair"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-sans w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="w-full">
              Hi, I'm <span className="text-teal-400 font-semibold">Aman Kumar Rajak</span>, a passionate{" "}
              <span className="text-teal-400 font-semibold">Full-Stack Developer</span> with{" "}
              <span className="text-teal-400 font-semibold">2.2 years</span> of experience in designing and developing dynamic, 
              scalable web applications. My expertise spans across{" "}
              <span className="text-teal-400 font-semibold">React.js, Next.js, Node.js, HTML, CSS,</span> and{" "}
              <span className="text-teal-400 font-semibold">JavaScript</span>, allowing me to build intuitive and efficient user experiences. 
              With a strong foundation in both frontend and backend technologies, I specialize in creating robust, 
              high-performance applications that seamlessly bridge functionality and design.
            </p>

            <p className="w-full">
              In addition to web development, I have hands-on experience with{" "}
              <span className="text-teal-400 font-semibold">AWS hosting</span> and{" "}
              <span className="text-teal-400 font-semibold">Docker containerization</span>, ensuring smooth deployment, 
              scalability, and optimized performance of applications. In my previous role, I played a{" "}
              <span className="text-teal-400 font-semibold">crucial part in developing an organizational website</span>, 
              where I focused on enhancing <span className="text-teal-400 font-semibold">speed, responsiveness,</span> and{" "}
              <span className="text-teal-400 font-semibold">user engagement</span>. My ability to identify and implement 
              performance optimizations helped improve both the usability and reliability of the platform, 
              making a meaningful impact on the business.
            </p>

            <p className="w-full">
              Beyond coding, I thrive in <span className="text-teal-400 font-semibold">research and development</span>, 
              continuously exploring innovative solutions to stay ahead in the ever-evolving tech industry. 
              I am deeply committed to writing <span className="text-teal-400 font-semibold">clean, maintainable code</span> 
              and following best practices to ensure scalability and efficiency. Collaboration is at the heart of my work, 
              and I enjoy contributing to <span className="text-teal-400 font-semibold">team-driven projects</span> that push 
              boundaries and deliver <span className="text-teal-400 font-semibold">high-quality digital products</span>. My 
              goal is to keep evolving, learning, and leveraging technology to create impactful solutions 
              that enhance user experiences and drive business growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}