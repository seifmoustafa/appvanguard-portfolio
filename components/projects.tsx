"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Apple, PlayCircle } from "lucide-react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  categories: string[]
  githubUrl?: string
  liveUrl?: string
  appStoreUrl?: string
  playStoreUrl?: string
  image?: string
  appStoreSoon?: boolean
  playStoreSoon?: boolean
}

type IconButtonProps = {
  href?: string
  title: string
  icon: React.ElementType
  disabled?: boolean
}

function IconButton({ href, title, icon: IconComponent, disabled = false }: IconButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`h-8 w-8 sm:h-9 sm:w-9 rounded-full ${
        disabled || !href
          ? "bg-gray-800 text-gray-600 cursor-not-allowed"
          : "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
      }`}
      asChild={!disabled && !!href}
      disabled={disabled || !href}
      title={title}
    >
      {disabled || !href ? (
        <>
          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">{title}</span>
        </>
      ) : (
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">{title}</span>
        </Link>
      )}
    </Button>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects: Project[] = [
    {
      id: 1,
      title: "OHS - Online Homework System",
      description:
        "A comprehensive platform for teachers to assign and grade homework, and for students to submit their work online.",
      technologies: ["React.js"],
      categories: ["React"],
      githubUrl: "https://github.com/seifmoustafa/OHS",
      appStoreUrl:
        "https://apps.apple.com/eg/app/%D8%A7%D9%84%D9%86%D9%81%D8%B7-%D8%AF%D9%88%D8%A7%D8%A1-%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D8%A9/id6740829950",
      image: "/images/ohs.png",
    },
    {
      id: 2,
      title: "ReadIt",
      description:
        "A social reading app that allows users to track their reading progress, discover new books, and connect with other readers.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      categories: ["Flutter", "Firebase"],
      githubUrl: "https://github.com/seifmoustafa/read_it",
      image: "/images/readit.png",
    },
    {
      id: 3,
      title: "Galvanic Cell",
      description:
        "An educational app that simulates galvanic cells and helps students understand electrochemistry concepts.",
      technologies: ["React.js", "Next.js", "Canvas"],
      categories: ["React"],
      githubUrl: "https://github.com/seifmoustafa/galvanic-cell",
      liveUrl: "https://seifmoustafa.github.io/galvanic-cell/",
      image: "/images/galvanic-cell.png",
    },
    {
      id: 4,
      title: "Attendance System",
      description:
        "A facial recognition-based attendance system for schools and universities to track student attendance.",
      technologies: ["React.js", "Firebase", "ML Models"],
      categories: ["React"],
      githubUrl: "https://github.com/seifmoustafa/Attendance",
      liveUrl: "https://seifmoustafa.github.io/Attendance/",
      image: "/images/attendance.png",
    },
    {
      id: 5,
      title: "Deals App",
      description:
        "A mobile app that helps users find the best deals and discounts from various stores and online platforms.",
      technologies: ["Flutter", "Firebase", "MVVM"],
      categories: ["Flutter", "Firebase"],
      githubUrl: "https://github.com/seifmoustafa/Deals",
      appStoreSoon: true,
      playStoreSoon: true,
      image: "/images/deals.png",
    },
  ]

  const availableCategories = ["All", "Flutter", "React", "Firebase", ".NetCore"]
  const [filter, setFilter] = useState<string>("All")

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-16 md:py-20 min-h-screen flex items-center">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="responsive-container"
      >
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-4">Our Projects</h2>
            <motion.div
              className="h-1 w-16 sm:w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        {/* Category Buttons - Scrollable on mobile */}
        <div className="flex justify-start md:justify-center gap-2 mb-6 md:mb-8 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-2">
            {availableCategories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap ${
                  filter === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    : "bg-white/10 hover:bg-white/20 border-white/10"
                }`}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex flex-col h-full rounded-lg bg-[#1a1f2e] border-none text-white overflow-hidden transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10">
                {/* Card Image & Category */}
                {project.image && (
                  <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 sm:left-4">
                      <Badge className="bg-blue-500/80 hover:bg-blue-600/80 text-white text-xs">
                        {project.categories.join(" / ")}
                      </Badge>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 flex-grow">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="bg-white/10 hover:bg-white/20 text-white text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Icon Buttons - single row, uniform size */}
                  <div className="flex items-center gap-2 flex-nowrap mt-auto">
                    {project.githubUrl && (
                      <IconButton href={project.githubUrl} title="GitHub Repository" icon={Github} />
                    )}
                    {project.liveUrl && <IconButton href={project.liveUrl} title="Live Demo" icon={ExternalLink} />}
                    {project.appStoreUrl && <IconButton href={project.appStoreUrl} title="App Store" icon={Apple} />}
                    {project.playStoreUrl && (
                      <IconButton href={project.playStoreUrl} title="Play Store" icon={PlayCircle} />
                    )}
                    {project.appStoreSoon && <IconButton title="Coming Soon on App Store" icon={Apple} disabled />}
                    {project.playStoreSoon && (
                      <IconButton title="Coming Soon on Play Store" icon={PlayCircle} disabled />
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
