'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
    <>
      <section className="min-h-screen w-full pt-24 pb-20 px-6 flex items-center justify-center bg-background overflow-hidden">
        <div ref={heroRef} className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Column */}
            <div className="animate-fadeIn space-y-8">
              {/* Main Headline */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Hello, I'm </span>
                  <span className="text-primary">Yatish.</span>
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                  Creative Designer<br />in India.
                </h2>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. At libero sit ric dislauditt eu ut sampler. Phoeisus olus laoreet sem imperdiet cros laoreet. Lacinta fringilla pellentesque et neo imperfeit.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition duration-300 cursor-pointer"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground/5 transition duration-300 cursor-pointer"
                >
                  View All Works
                </a>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="animate-slideInRight hidden md:flex justify-end">
              <div className="relative w-full max-w-sm">
                {/* Beige background card */}
                <div className="relative bg-secondary rounded-3xl overflow-hidden aspect-square shadow-2xl">
                  <img
                    src="/profile-photo.jpg"
                    alt="Yatish Kapila - Creative Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="w-full bg-foreground py-8 overflow-hidden">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-4xl font-bold text-background">Graphic Designer</span>
                <span className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-4xl font-bold text-background">Graphic Designer</span>
                <span className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
