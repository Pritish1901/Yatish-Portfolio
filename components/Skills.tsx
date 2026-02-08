'use client'

import { useEffect, useRef } from 'react'

interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Design &amp; Prototyping',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Wireframing', 'Design Systems'],
  },
  {
    category: 'Interaction Design',
    items: ['Mobile App Design', 'Web Interface Design', 'Micro-interactions', 'Animations', 'User Research'],
  },
  {
    category: 'Technical',
    items: ['HTML/CSS', 'React Basics', 'Design Thinking', 'Information Architecture', 'Accessibility'],
  },
  {
    category: 'Soft Skills',
    items: ['Team Collaboration', 'Communication', 'Problem Solving', 'Project Management', 'Client Relations'],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          const items = sectionRef.current.querySelectorAll('[data-animate]')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fadeIn')
            }, index * 50)
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-24 px-6 bg-background border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <p className="text-lg text-primary font-medium tracking-wide">EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills &amp; Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive set of tools and methodologies I use to create exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              data-animate
              className="opacity-0 p-8 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary transition duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">
                {skillGroup.category}
              </h3>

              <ul className="space-y-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Showcase */}
        <div className="mt-20 p-12 bg-primary/5 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Design Tools &amp; Software</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Figma',
              'Adobe XD',
              'Sketch',
              'Protopie',
              'Principle',
              'Framer',
            ].map((tool, idx) => (
              <div
                key={idx}
                className="p-4 bg-background rounded-lg border border-border hover:border-primary hover:bg-secondary/50 transition duration-300 flex items-center justify-center text-center"
              >
                <p className="font-medium text-foreground text-sm">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
