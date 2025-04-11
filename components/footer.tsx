import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-6 sm:py-8">
      <div className="responsive-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">AppVanguard</h3>
            <p className="text-blue-200 text-xs sm:text-sm">Full-Stack Development Team</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/seifmoustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/seif-moustafa-60115f/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:appvanguard@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 text-center text-white/50 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} AppVanguard</p>
        </div>
      </div>
    </footer>
  )
}
