"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let connections: Connection[] = []
    const mousePosition = { x: 0, y: 0 }
    let width = window.innerWidth
    let height = window.innerHeight

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initParticles()
    }

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      connected: boolean

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.color = "#ffffff"
        this.opacity = Math.random() * 0.5 + 0.2
        this.connected = false
      }

      update() {
        // Move particles
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.speedX *= -1
        if (this.y < 0 || this.y > height) this.speedY *= -1

        // Reset connected status
        this.connected = false
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    // Connection class
    class Connection {
      from: Particle
      to: Particle
      distance: number
      opacity: number
      active: boolean

      constructor(from: Particle, to: Particle) {
        this.from = from
        this.to = to
        this.distance = 0
        this.opacity = 0
        this.active = false
        this.updateDistance()
      }

      updateDistance() {
        const dx = this.from.x - this.to.x
        const dy = this.from.y - this.to.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        // Only connect particles within a certain distance
        const maxDistance = Math.min(width, height) * 0.15
        this.active = this.distance < maxDistance

        // Calculate opacity based on distance
        this.opacity = this.active ? (1 - this.distance / maxDistance) * 0.5 : 0

        // Mark particles as connected
        if (this.active) {
          this.from.connected = true
          this.to.connected = true
        }
      }

      draw() {
        if (!ctx || !this.active) return

        // Create gradient for line
        const gradient = ctx.createLinearGradient(this.from.x, this.from.y, this.to.x, this.to.y)
        gradient.addColorStop(0, `rgba(100, 150, 255, ${this.opacity * 0.8})`)
        gradient.addColorStop(1, `rgba(150, 100, 255, ${this.opacity * 0.8})`)

        ctx.beginPath()
        ctx.moveTo(this.from.x, this.from.y)
        ctx.lineTo(this.to.x, this.to.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.min(100, Math.floor((width * height) / 10000))

      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }

      // Create connections between particles
      connections = []
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connections.push(new Connection(particles[i], particles[j]))
        }
      }
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.x
      mousePosition.y = e.y
    }

    // Handle touch for mobile
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePosition.x = e.touches[0].clientX
        mousePosition.y = e.touches[0].clientY
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Update and draw connections
      connections.forEach((connection) => {
        connection.updateDistance()
        connection.draw()
      })

      // Create a subtle glow effect around mouse position
      const gradient = ctx.createRadialGradient(
        mousePosition.x,
        mousePosition.y,
        0,
        mousePosition.x,
        mousePosition.y,
        150,
      )
      gradient.addColorStop(0, "rgba(100, 150, 255, 0.2)")
      gradient.addColorStop(1, "rgba(100, 150, 255, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize everything
    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouch)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouch)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 z-0"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.8 }} />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl z-0"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl z-0"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
        }}
      />
    </>
  )
}
