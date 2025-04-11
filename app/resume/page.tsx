import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-700 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-8 shadow-2xl border border-white/20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">My Resume</h1>

        <div className="mb-8 text-center">
          <p className="text-lg md:text-xl mb-6">
            View or download my complete resume to learn more about my skills, experience, and qualifications.
          </p>

          <Link
            href="https://docs.google.com/document/d/1k7ytvSkOsfEhcHLtbzWpfGpF8T9wfHcf/edit?usp=drive_link&ouid=107126904155081409354&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <ExternalLink className="h-5 w-5 md:h-6 md:w-6" />
              View Full Resume
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white/5 p-4 md:p-6 rounded-lg border border-white/10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-300">Education</h2>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-semibold">BSc in Computer Engineering</h3>
              <p className="text-blue-200">Cairo University (2023)</p>
            </div>
          </div>

          <div className="bg-white/5 p-4 md:p-6 rounded-lg border border-white/10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-cyan-300">Certifications</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 text-lg">•</span>
                <span>Master Git & GitHub: Essential Skills for Developers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 text-lg">•</span>
                <span>Complete Flutter & Dart Development Course</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 text-lg">•</span>
                <span>Flutter Advanced Course Bloc and MVVM Pattern</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 text-lg">•</span>
                <span>Deep Dive into Clean Architecture in Flutter</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline" className="border-white/20 hover:bg-white/10">
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
