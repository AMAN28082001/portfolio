// "use client"

// import { useEffect, useRef } from "react"
// import { motion } from "framer-motion"
// import Image from "next/image"
// import gsap from "gsap"

// // Use a transparent PNG image
// const imageSrc = "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

// export default function DynamicBanner() {
//   const bannerRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!bannerRef.current) return

//     const imageElement = bannerRef.current.querySelector("img")

//     // GSAP animation for a smooth 3D floating effect
//     gsap.fromTo(
//       imageElement,
//       {
//         y: 0,
//         rotationY: 0,
//         rotationX: 0,
//         scale: 1,
//         z: 0,
//       },
//       {
//         y: -30,
//         rotationY: 10,
//         rotationX: 5,
//         scale: 1.05,
//         z: 50,
//         duration: 3,
//         repeat: -1, // Infinite loop
//         yoyo: true, // Smooth back-and-forth
//         ease: "power1.inOut",
//       }
//     )

//     // Add a subtle glow effect
//     gsap.to(imageElement, {
//       boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
//       duration: 1.5,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     })
//   }, [])

//   return (
//     <div ref={bannerRef} className="relative w-full h-full">
//       <motion.div
//         className="image-container"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Image
//           src={imageSrc || "/placeholder.svg"}
//           alt="Featured Image"
//           width={600}
//           height={600}
//           className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
//         />
//       </motion.div>
//     </div>
//   )
// }



"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import gsap from "gsap"

// Direct path to public folder image
const imageSrc = "/images/ai_photo_enhancer_result (2).webp"

export default function DynamicBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bannerRef.current) return

    const imageElement = bannerRef.current.querySelector("img")

    // GSAP animation
    gsap.fromTo(
      imageElement,
      { y: 0, rotationY: 0, rotationX: 0, scale: 1, z: 0 },
      {
        y: -30,
        rotationY: 10,
        rotationX: 5,
        scale: 1.05,
        z: 50,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    )

    // Glow effect
    gsap.to(imageElement, {
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  return (
    // Updated DynamicBanner.tsx (color adjustments)
<div className="relative w-full h-full p-4">
  <motion.div
    className="relative aspect-square w-full bg-gradient-to-br from-teal-900/20 to-gray-800/30 rounded-xl overflow-hidden 
              border border-white/10 backdrop-blur-sm"
  >
    <Image
      src={imageSrc}
      alt="Aman Kumar Rajak"
      fill
      sizes="(max-width: 768px) 90vw, 50vw"
      className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all"
      priority
    />
  </motion.div>
</div>
  )
}