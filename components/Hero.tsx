'use client'

import { ArrowDownRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen w-full pt-24 pb-20 px-6 flex items-center justify-center bg-background overflow-hidden">
      <div ref={heroRef} className="max-w-6xl mx-auto w-full">
        {/* Gradient Background Elements - Minimal */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-3xl -z-10 opacity-30" />

        <div className="animate-fadeIn space-y-8">
          {/* Tagline */}
          <div style={{ transform: `translateY(${scrollY * 0.3}px)` }} className="transition-transform duration-300">
            <p className="text-lg text-muted-foreground font-light tracking-widest uppercase text-center">
              Product &amp; UIUX Designer
            </p>
          </div>

          {/* Main Title */}
          <div className="space-y-6 text-center">
            <h1
              style={{ transform: `translateY(${scrollY * 0.25}px)` }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight transition-transform duration-300"
            >
              <span className="inline-block group cursor-pointer">
                <span className="group-hover:text-primary transition-colors duration-300">
                  Yatish
                </span>
              </span>
              <br />
              <span className="inline-block group cursor-pointer">
                <span className="group-hover:text-primary transition-colors duration-300">
                  Kapila
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            className="transition-transform duration-300 max-w-3xl mx-auto"
          >
            <p className="text-base md:text-lg text-muted-foreground font-light text-center leading-relaxed">
              Designing thoughtful, user-centered digital experiences that combine
              aesthetic excellence with intuitive functionality. Let&apos;s create something remarkable.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium overflow-hidden transition duration-300 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowDownRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                />
              </span>
              <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition duration-300" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="group inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 rounded-lg font-medium hover:bg-foreground/5 transition-all duration-300"
            >
              Get In Touch
              <span className="group-hover:translate-x-1 transition duration-300">→</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 flex justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => {
              const element = document.getElementById('projects')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-light">Scroll</p>
              <div className="w-6 h-10 border border-foreground/50 rounded-full flex justify-center p-2 relative">
                <div
                  className="w-1 h-2 bg-foreground rounded-full absolute top-2 animate-bounce"
                  style={{ animation: 'bounce 2s infinite' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
