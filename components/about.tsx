"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Layout, Database, Palette } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function About() {
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
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const skills = [
    // Languages & Frameworks
    { name: "Flutter", years: 2, category: "languages" },
    { name: "Dart", years: 2, category: "languages" },
    { name: "React.js", years: 1, category: "languages" },
    { name: ".NET Core", years: 1, category: "languages" },
    { name: "JavaScript", years: 1, category: "languages" },
    { name: "TypeScript", years: 1, category: "languages" },
    { name: "C#", years: 1, category: "languages" },

    // Tools & Technologies
    { name: "Git & GitHub", years: 2, category: "tools" },
    { name: "Firebase", years: 1, category: "tools" },
    { name: "Google Maps API", years: 1, category: "tools" },
    { name: "RESTful APIs", years: 1, category: "tools" },

    // Patterns & Architecture
    { name: "Clean Architecture", years: 1, category: "patterns" },
    { name: "Bloc Pattern", years: 1, category: "patterns" },
    { name: "MVVM", years: 1, category: "patterns" },

    // UI/UX
    { name: "Responsive Design", years: 2, category: "ui" },
    { name: "Adaptive Design", years: 2, category: "ui" },
    { name: "UI/UX Design", years: 2, category: "ui" },
  ]

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" className="py-16 md:py-20 min-h-screen flex items-center">
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
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-4">About Us</h2>
            <motion.div
              className="h-1 w-16 sm:w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 text-white h-full overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-300">Team Summary</h3>
                <p className="mb-3 sm:mb-4 text-base sm:text-lg">
                  AppVanguard is a team of Full-Stack Developers specialized in Flutter, React.js, and .NET Core with a
                  Bachelor's in Computer Engineering from Cairo University (2023).
                </p>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                  We are skilled in responsive and adaptive design, clean architecture, state management (Bloc, MVVM),
                  and integration of modern frameworks.
                </p>
                <p className="text-sm sm:text-base">
                  We are passionate about delivering efficient, scalable, and user-friendly software solutions that
                  solve real-world problems and provide exceptional user experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 text-white h-full overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-300">Education & Background</h3>
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-lg sm:text-xl font-semibold">BSc in Computer Engineering</h4>
                  <p className="text-blue-200">Cairo University (2023)</p>
                </div>

                <h4 className="text-lg sm:text-xl font-semibold mb-2">Key Certifications</h4>
                <ul className="space-y-1 sm:space-y-2 text-blue-100 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 text-base sm:text-lg">•</span>
                    <span>Master Git & GitHub: Essential Skills for Developers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 text-base sm:text-lg">•</span>
                    <span>Complete Flutter & Dart Development Course</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 text-base sm:text-lg">•</span>
                    <span>Flutter Advanced Course: Bloc and MVVM Pattern</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/10 text-white overflow-hidden">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-300">Skills & Expertise</h3>

              <Tabs defaultValue="languages" className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 bg-white/5 border border-white/10 rounded-lg mb-4 sm:mb-6 overflow-x-auto">
                  <TabsTrigger
                    value="languages"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/50 data-[state=active]:to-cyan-500/50 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    <Code2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Languages
                  </TabsTrigger>
                  <TabsTrigger
                    value="tools"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/50 data-[state=active]:to-cyan-500/50 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    <Database className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Tools
                  </TabsTrigger>
                  <TabsTrigger
                    value="patterns"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/50 data-[state=active]:to-cyan-500/50 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    <Layout className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Architecture
                  </TabsTrigger>
                  <TabsTrigger
                    value="ui"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600/50 data-[state=active]:to-cyan-500/50 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    <Palette className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    UI/UX
                  </TabsTrigger>
                </TabsList>

                {["languages", "tools", "patterns", "ui"].map((category) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUpVariants}
                          >
                            <Badge className="bg-gradient-to-r from-blue-600/40 to-cyan-500/40 hover:from-blue-600/60 hover:to-cyan-500/60 text-white border border-white/10 py-1 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm">
                              {skill.name} ({skill.years}+ {skill.years === 1 ? "year" : "years"})
                            </Badge>
                          </motion.div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
