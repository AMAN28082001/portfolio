import "./globals.css"
import { Poppins, Playfair_Display } from "next/font/google"
import Script from "next/script"
import type { Metadata } from "next"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Aman Kumar Rajak - MERN Stack Developer",
  description: "Portfolio of Aman Kumar Rajak, a MERN Stack Developer with 2.2 years of experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}