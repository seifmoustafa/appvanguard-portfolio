import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import ScrollProgress from "@/components/scroll-progress"
import Skills from "@/components/skills"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <div className="relative z-10">
        <Hero />
        <div className="container mx-auto px-4">
          <Skills />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  )
}
