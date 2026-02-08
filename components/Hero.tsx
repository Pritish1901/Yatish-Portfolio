'use client'

import { ArrowDownRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const moveX = (x - rect.width / 2) * 0.02
      const moveY = (y - rect.height / 2) * 0.02

      containerRef.current.style.transform = `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen w-full pt-32 pb-20 px-6 flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary/5">
      <div className="max-w-6xl mx-auto w-full">
        <div
          ref={containerRef}
          className="transition-transform duration-200 ease-out"
        >
          <div className="animate-fadeIn space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Product &amp; UIUX Designer
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
                <span className="inline-block">Crafting</span>
                <br />
                <span className="inline-block">Digital</span>
                <br />
                <span className="inline-block">Experiences</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl pt-4 leading-relaxed">
                I specialize in designing intuitive interfaces and delightful user experiences
                that blend aesthetics with functionality. Let&apos;s build something amazing together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition duration-300 w-fit"
              >
                View My Work
                <ArrowDownRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-medium hover:bg-foreground hover:text-background transition duration-300 w-fit"
              >
                Get In Touch
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce">
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-muted-foreground">Scroll to explore</p>
                <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-2">
                  <div className="w-1 h-2 bg-foreground rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
