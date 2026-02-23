'use client'

import { useEffect, useRef } from 'react'
import { LiquidButton } from '@/components/ui/liquid-glass-button'

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              data-animate
              className="p-8 bg-white/10 rounded-lg border border-white/20 animate-fadeIn"
            >
              <h3 className="text-base font-semibold text-foreground mb-6">
                {skillGroup.category}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary font-bold">•</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-20">
          <div ref={toolsRef} className="flex flex-wrap gap-4 justify-start">
            {tools.map((tool, idx) => (
              <LiquidButton
                key={idx}
                data-tool
                size="lg"
                className="opacity-0 animate-scaleIn"
              >
                {tool.name}
              </LiquidButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
