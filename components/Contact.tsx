'use client'

import { Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          const elements = sectionRef.current.querySelectorAll('[data-animate]')
          elements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('animate-fadeIn')
            }, index * 100)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full py-32 px-6 bg-background border-t border-border/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Gradient Background Elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 opacity-40" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/40 rounded-full blur-3xl -z-10 opacity-30" />

        {/* Header */}
        <div data-animate className="mb-16 space-y-4 opacity-0">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
            Let&apos;s Create Something <br />
            <span className="inline-block group cursor-pointer">
              <span className="group-hover:text-primary transition-colors duration-300">
                Remarkable
              </span>
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Email CTA */}
          <div data-animate className="opacity-0 space-y-12">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border/50">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">Available for Projects</span>
            </div>

            {/* Email Section */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Preferred Contact
                </p>
                <a
                  href="mailto:hello@yatishkapila.com"
                  className="group inline-flex flex-col"
                >
                  <span className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    hello@yatishkapila.com
                  </span>
                </a>
              </div>

              <a
                href="mailto:hello@yatishkapila.com"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-6 pt-8 border-t border-border/30">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Connect
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    name: 'LinkedIn',
                    href: 'https://linkedin.com/in/yatishkapila',
                    icon: Linkedin,
                  },
                  {
                    name: 'Twitter',
                    href: 'https://twitter.com/yatishkapila',
                    icon: Twitter,
                  },
                  {
                    name: 'Behance',
                    href: 'https://behance.net/yatishkapila',
                    icon: ExternalLink,
                  },
                ].map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Icon size={18} />
                      <span className="font-medium">{link.name}</span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Info */}
          <div data-animate className="opacity-0 space-y-8">
            {/* Info Cards */}
            <div className="grid gap-6">
              {/* Response Time */}
              <div className="p-8 bg-secondary/40 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Response Time
                </p>
                <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  24 Hours
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Usually reply within a business day
                </p>
              </div>

              {/* Availability */}
              <div className="p-8 bg-secondary/40 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Timezone
                </p>
                <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  IST (UTC+5:30)
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Based in India, open to global collaboration
                </p>
              </div>

              {/* Project Types */}
              <div className="p-8 bg-secondary/40 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Open To
                </p>
                <div className="space-y-2">
                  {[
                    'Full-time Opportunities',
                    'Freelance Projects',
                    'Consulting & Strategy',
                    'Design Collaborations',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground leading-relaxed">
                Whether you have a specific project in mind or just want to discuss potential opportunities, I&apos;d love to hear from you. Let&apos;s explore how we can create something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
