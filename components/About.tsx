'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const textRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && textRef.current) {
          textRef.current.classList.add('animate-fadeIn')
        }
      },
      { threshold: 0.2 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && statsRef.current) {
          const items = statsRef.current.querySelectorAll('[data-stat]')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-scaleIn')
            }, index * 100)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="w-full py-32 px-6 bg-background border-t border-border/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">About</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
            Crafting Digital Experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center lg:gap-24">
          {/* Left - Content */}
          <div ref={textRef} className="space-y-8 animate-fadeIn">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a product and UIUX designer passionate about creating intuitive, 
                user-centered digital solutions. With a strong foundation in design thinking 
                and user research, I transform complex problems into elegant interfaces that 
                delight users and drive business results.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My design philosophy centers on simplicity, accessibility, and meaningful interactions. 
                I specialize in mobile app design, web interfaces, and design systems—working collaboratively 
                with cross-functional teams to deliver products that make a real impact.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond pixels and prototypes, I'm driven by continuous learning and pushing creative 
                boundaries. I actively contribute to the design community and mentorI believe the best 
                design solutions come from deep user empathy and iterative refinement.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300"
              >
                View My Work
              </a>
              <a
                href="mailto:hello@pritishwani.com"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right - Stats & Highlights */}
          <div ref={statsRef} className="space-y-12">
            <div className="grid grid-cols-2 gap-6">
              <div data-stat className="p-8 bg-secondary/40 rounded-xl border border-tertiary/30 hover:border-tertiary/60 hover:shadow-lg hover:shadow-tertiary/20 transition-all duration-300 animate-scaleIn">
                <p className="text-4xl md:text-5xl font-bold text-tertiary mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div data-stat className="p-8 bg-secondary/40 rounded-xl border border-tertiary/30 hover:border-tertiary/60 hover:shadow-lg hover:shadow-tertiary/20 transition-all duration-300 animate-scaleIn">
                <p className="text-4xl md:text-5xl font-bold text-tertiary mb-2">5+</p>
                <p className="text-sm text-muted-foreground">Years in Design</p>
              </div>
              <div data-stat className="p-8 bg-secondary/40 rounded-xl border border-tertiary/30 hover:border-tertiary/60 hover:shadow-lg hover:shadow-tertiary/20 transition-all duration-300 animate-scaleIn">
                <p className="text-4xl md:text-5xl font-bold text-tertiary mb-2">20+</p>
                <p className="text-sm text-muted-foreground">Satisfied Clients</p>
              </div>
              <div data-stat className="p-8 bg-secondary/40 rounded-xl border border-tertiary/30 hover:border-tertiary/60 hover:shadow-lg hover:shadow-tertiary/20 transition-all duration-300 animate-scaleIn">
                <p className="text-4xl md:text-5xl font-bold text-tertiary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Client Retention</p>
              </div>
            </div>

            {/* Key Values */}
            <div className="space-y-4 pt-8 border-t border-border/30">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">What I Value</h3>
              <div className="space-y-3">
                {['User-centered approach', 'Attention to detail', 'Collaborative teamwork', 'Continuous improvement'].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
