"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useInView } from "react-intersection-observer"
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react"

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const timelineItems = [
    {
      title: "Flutter Developer",
      company: "Freelance",
      period: "2022 - Present",
      description: "Developing mobile applications using Flutter framework for various clients.",
      type: "work",
    },
    {
      title: "React.js Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Building responsive web applications using React.js and modern JavaScript.",
      type: "work",
    },
    {
      title: ".NET Core Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Creating backend services and APIs using .NET Core and C#.",
      type: "work",
    },
    {
      title: "Computer Science",
      company: "Cairo University",
      period: "2019 - 2023",
      description: "Bachelor's degree in Computer Engineering with focus on software development.",
      type: "education",
    },
  ]

  return (
    <section className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge className="mb-4 px-3 py-1 bg-blue-600 text-white text-sm">Experience</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 transform md:translate-x-[-0.5px]"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className={`flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center transform md:translate-x-[-50%] z-10">
                    {item.type === "work" ? (
                      <BriefcaseIcon className="h-4 w-4 text-white" />
                    ) : (
                      <GraduationCapIcon className="h-4 w-4 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-20px)] ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-l-4 border-blue-500 hover:bg-white/15 transition-colors">
                      <span className="text-sm text-blue-300">{item.period}</span>
                      <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                      <p className="text-blue-200 text-sm mt-1">{item.company}</p>
                      <p className="mt-2 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
