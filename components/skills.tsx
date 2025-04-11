"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

type SkillCategory = {
  title: string
  description: string
  skills: {
    name: string
    icon: string
  }[]
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      description: "Our favorite languages for systems programming, software engineering, and data analysis.",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
      ],
    },
    {
      title: "Front-End",
      description: "Our preferred technologies for front-end web development and component design.",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "Bootstrap",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      title: "Mobile",
      description: "Our preferred technologies for Flutter programming and mobile app development.",
      skills: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
    {
      title: "Backend",
      description: "Our preferred technologies for backend development and server architecture.",
      skills: [
        {
          name: ".NET Core",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
    {
      title: "Database",
      description: "Our preferred technologies for database management and data storage.",
      skills: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        {
          name: "SQL Server",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
      ],
    },
    {
      title: "Tools",
      description: "Our favorite tools for version control, code editing, and container orchestration.",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Gradle", icon: "https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg" },
      ],
    },
  ]

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

  return (
    <section id="skills" className="py-16 md:py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="responsive-container"
      >
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-4">Our Story</h2>
            <motion.div
              className="h-1 w-16 sm:w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-8 md:mb-16 text-center text-base sm:text-lg text-blue-100 px-4"
        >
          <p className="mb-4">
            We are a team of developers in the College of Information and Computer Sciences at Thebes Academy, pursuing
            undergraduate degrees. We are majoring in information systems where we use our software engineering skills
            for app development.
          </p>
          <p>
            We are interested in exploring the fields of Software Engineering, Data Science, and Machine Learning, and
            we are open to opportunities for the same. Our team has 2 years of experience in Flutter development. We are
            proficient in designing, developing, debugging, and deploying applications in Flutter. Experienced in
            developing user interfaces and creating efficient code to ensure better performance. We are seeking
            opportunities to further hone our skills and contribute to the growth of companies we work with.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/10 text-white h-full hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-300">{category.title}</h3>
                  <p className="text-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm">{category.description}</p>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 mb-1 sm:mb-2 relative">
                          <Image
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            width={48}
                            height={48}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <span className="text-[10px] sm:text-xs text-center">{skill.name}</span>
                      </div>
                    ))}
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
