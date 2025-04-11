"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const mousePosition = {
      x: 0,
      y: 0,
      radius: 150,
    }

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseX = this.x
        this.baseY = this.y
        this.size = Math.random() * 2 + 0.8
        this.density = Math.random() * 30 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5

        // Create a gradient color effect
        const hue = Math.random() * 60 + 180 // Blue to cyan range
        const saturation = Math.random() * 30 + 70 // High saturation
        const lightness = Math.random() * 20 + 70 // Bright
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        // Mouse interaction
        const dx = mousePosition.x - this.x
        const dy = mousePosition.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const maxDistance = mousePosition.radius
        let force = (maxDistance - distance) / maxDistance

        if (force < 0) force = 0

        const directionX = forceDirectionX * force * this.density
        const directionY = forceDirectionY * force * this.density

        if (distance < mousePosition.radius) {
          this.x -= directionX
          this.y -= directionY
        } else {
          // Return to original position with slight movement
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 20
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 20
          }

          // Add some natural movement
          this.x += this.speedX
          this.y += this.speedY

          // Wrap around edges
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles - Define this function before it's called
    const initParticles = () => {
      particles = []
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 9000))

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    // Set canvas dimensions - Now initParticles is defined before it's called here
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
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

    // Connect particles with lines
    const connect = () => {
      const maxDistance = 150

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            const gradient = ctx.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y)

            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.2})`)
            gradient.addColorStop(1, `rgba(120, 200, 255, ${opacity * 0.2})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connect()
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

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />
}
