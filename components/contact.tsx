"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Mail, MessageSquare, Send, Loader2 } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create a mailto URL with the form data
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )
      const mailtoUrl = `mailto:appvanguard@gmail.com?subject=${subject}&body=${body}`

      // Open the mailto link in a new window
      window.open(mailtoUrl, "_blank")

      toast({
        title: "Message ready to send!",
        description: "Your email client has been opened with your message. Please send the email to complete.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem preparing your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 min-h-screen flex items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
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
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-4">Get In Touch</h2>
            <motion.div
              className="h-1 w-16 sm:w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto px-4">
            Have a question or want to work with us? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 text-white h-full">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-300">Contact Information</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-full">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg">Email</h4>
                      <a
                        href="mailto:appvanguard@gmail.com"
                        className="text-blue-200 hover:text-blue-100 transition-colors text-sm sm:text-base break-all"
                      >
                        appvanguard@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-white/10 p-2 sm:p-3 rounded-full">
                      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-base sm:text-lg">Social</h4>
                      <div className="flex flex-col gap-1">
                        <a
                          href="https://www.linkedin.com/in/seif-moustafa-60115f/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-200 hover:text-blue-100 transition-colors text-sm sm:text-base"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/seifmoustafa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-200 hover:text-blue-100 transition-colors text-sm sm:text-base"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/10 text-white">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-300">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-400 text-white"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-400 text-white"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      className="bg-white/5 border-white/10 focus:border-blue-400 text-white min-h-[100px] sm:min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
