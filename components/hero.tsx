"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, FileText, Coffee, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import HeroBackground from "./hero-background"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)

    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to our portfolio!",
        description: "Feel free to explore our projects and get in touch.",
      })
    }, 1500)
  }, [toast])

  if (!mounted) return null

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-20 flex flex-col items-center justify-center min-h-screen text-center relative w-screen left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]">
      {/* Dynamic background */}
      <HeroBackground />

      <div className="responsive-container z-10 flex flex-col items-center">
        <motion.div
          className="relative inline-block mb-4 md:mb-6 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-3xl sm:text-4xl font-bold">
            AV
          </div>
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-blue-400/30"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.h1
          className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 z-10 mb-4 md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AppVanguard
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 md:mb-8 z-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="hidden sm:block h-[1px] w-5 md:w-10 bg-blue-400"></span>
          <h2 className="text-lg sm:text-xl md:text-2xl text-blue-200 text-center">Flutter • React.js • .NET Core</h2>
          <span className="hidden sm:block h-[1px] w-5 md:w-10 bg-blue-400"></span>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-8 md:mb-12 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="https://github.com/seifmoustafa" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110"
            >
              <GitHub className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/seif-moustafa-60115f/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:appvanguard@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1HisCgzIf5ZXv6GVpp2dNJQg3oruWl-B5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110"
            >
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Resume</span>
            </Button>
          </Link>
          <Link href="https://buymeacoffee.com/seifmoustafa" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 hover:scale-110"
            >
              <Coffee className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Buy Me Coffee</span>
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 z-10"
        >
          <Button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none text-white px-6 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </Button>
          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/10 px-6 py-5 sm:py-6 rounded-xl transition-all duration-300"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection("about")}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm text-blue-200 mb-2">Scroll Down</span>
          <motion.div
            className="rounded-full border-2 border-blue-200 p-2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-blue-200" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
