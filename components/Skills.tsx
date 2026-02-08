'use client'

import { useEffect, useRef } from 'react'

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Design & Prototyping',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Wireframing', 'Design Systems'],
  },
  {
    category: 'Interaction & Motion',
    items: ['Micro-interactions', 'Animation Principles', 'Transitions', 'Mobile Gestures', 'User Experience Flow'],
  },
  {
    category: 'User-Centered Methods',
    items: ['User Research', 'Usability Testing', 'Information Architecture', 'Accessibility (WCAG)', 'Design Thinking'],
  },
  {
    category: 'Collaboration',
    items: ['Cross-team Communication', 'Stakeholder Management', 'Design Handoff', 'Documentation', 'Mentoring'],
  },
]

const tools = [
  { name: 'Figma', category: 'Primary' },
  { name: 'Adobe XD', category: 'Primary' },
  { name: 'Sketch', category: 'Design' },
  { name: 'Framer', category: 'Prototyping' },
  { name: 'Principle', category: 'Animation' },
  { name: 'Protopie', category: 'Prototyping' },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          const items = sectionRef.current.querySelectorAll('[data-animate]')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fadeIn')
            }, index * 80)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && toolsRef.current) {
          const items = toolsRef.current.querySelectorAll('[data-tool]')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-scaleIn')
            }, index * 60)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (toolsRef.current) {
      observer.observe(toolsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-32 px-6 bg-background border-t border-border/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 space-y-6">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Expertise</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
            Skills & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            A comprehensive suite of methodologies, tools, and expertise I leverage to design exceptional 
            digital products that solve real problems and delight users.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              data-animate
              className="opacity-0 group p-8 bg-secondary/40 rounded-xl border border-border/50 hover:border-primary/40 hover:bg-secondary/60 transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-foreground mb-6 group-hover:text-primary transition duration-300">
                {skillGroup.category}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Showcase */}
        <div className="p-12 md:p-16 bg-secondary/30 rounded-2xl border border-primary/20">
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Design Tools</h3>
            <p className="text-muted-foreground">Professional software and platforms I use daily</p>
          </div>

          <div ref={toolsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                data-tool
                className="opacity-0 group p-6 bg-background rounded-lg border border-border/60 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition duration-300 text-sm">
                  {tool.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1 group-hover:text-muted-foreground">
                  {tool.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">Want to see these skills in action?</p>
          <a
            href="#projects"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition duration-300"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  )
}
