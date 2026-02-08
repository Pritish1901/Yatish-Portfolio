'use client'

import { useEffect, useRef } from 'react'

export default function About() {
  const textRef = useRef<HTMLDivElement>(null)

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

  return (
    <section
      id="about"
      className="w-full py-24 px-6 bg-background border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual Element */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl" />
            <div className="relative z-10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-primary/20 mb-4">
                  PW
                </div>
                <p className="text-muted-foreground text-lg">Pritish Wani</p>
                <p className="text-muted-foreground text-sm mt-2">Product &amp; UIUX Designer</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div ref={textRef} className="space-y-8 opacity-0">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate product and UIUX designer with a keen eye for detail and
                a commitment to creating meaningful digital experiences. My approach combines
                user research, design thinking, and technical understanding to solve complex
                problems through elegant interfaces.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With expertise in interaction design, prototyping, and design systems, I
                collaborate with teams to bring visions to life. I believe great design is
                invisible—it works so intuitively that users don&apos;t notice it&apos;s there.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not designing, you can find me exploring design trends,
                contributing to the design community, or working on side projects that push
                my creative boundaries.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground mt-2">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
