'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  behanceUrl: string
  tools: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Investment App Redesign',
    category: 'Mobile App Design',
    description:
      'Complete UI/UX overhaul for an investment application by iVector. Enhanced user onboarding, improved dashboard interactions, and created a comprehensive design system.',
    image: 'https://images.unsplash.com/photo-1611232585255-3d1e6b06de5f?w=600&h=400&fit=crop',
    behanceUrl: 'https://www.behance.net/gallery/239691179/Investment-app-redesign-(iVector)',
    tools: ['Figma', 'Prototyping', 'User Research', 'Design System'],
  },
  {
    id: 2,
    title: "Men's App",
    category: 'Mobile App Design',
    description:
      'Designed a comprehensive mobile application with focus on intuitive navigation and modern aesthetics. Created detailed user flows and micro-interactions for enhanced engagement.',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda97eb1e8?w=600&h=400&fit=crop',
    behanceUrl: 'https://www.behance.net/gallery/234626967/Mens-App',
    tools: ['Figma', 'Mobile Design', 'Interaction Design', 'Prototyping'],
  },
  {
    id: 3,
    title: 'Formula 1 by RedBull',
    category: 'Web Design',
    description:
      'Created an engaging sports content interface with dynamic animations and real-time data visualization. Focused on user engagement and visual storytelling for F1 enthusiasts.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    behanceUrl: 'https://www.behance.net/gallery/236550631/Formula-1-by-Redbull',
    tools: ['Figma', 'Web Design', 'Animation', 'Data Visualization'],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          const items = sectionRef.current.querySelectorAll('[data-animate]')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fadeIn')
            }, index * 100)
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
      id="projects"
      ref={sectionRef}
      className="w-full py-24 px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <p className="text-lg text-primary font-medium tracking-wide">FEATURED WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my best work showcasing expertise in interaction design,
            mobile applications, and web platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project) => (
            <div
              key={project.id}
              data-animate
              className="group bg-background rounded-2xl overflow-hidden border border-tertiary/30 hover:border-tertiary/60 hover:shadow-lg hover:shadow-tertiary/20 transition duration-500 animate-fadeIn"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-80 md:h-full overflow-hidden bg-secondary">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-tertiary tracking-wide mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tools */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-foreground">Tools &amp; Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-8 flex items-center gap-4">
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>View on Behance</span>
                    </a>
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition duration-300 group/link"
                    >
                      <ExternalLink size={20} className="group-hover/link:scale-110 transition" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
