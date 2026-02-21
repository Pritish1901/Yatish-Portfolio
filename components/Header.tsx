'use client'

import Link from 'next/link'
import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-foreground hover:opacity-80 transition">
          YK
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex">
          <button
            onClick={() => {
              // Create a simple resume download
              const resumeContent = `
Yatish Kapila
Product & UIUX Designer

SUMMARY
Passionate Product and UIUX Designer with expertise in creating intuitive digital experiences.
Specialized in user-centered design, prototyping, and interaction design.

EXPERIENCE
Product & UIUX Designer
• Designed and delivered comprehensive design solutions for web and mobile applications
• Created interactive prototypes and design systems
• Collaborated with cross-functional teams to enhance user experiences
• Focus on accessibility, usability, and visual excellence

SKILLS & TOOLS
Design & Prototyping:
• Figma, Sketch, Adobe XD
• Prototyping, Wireframing, User Testing
• Design Systems & Component Libraries

Interaction Design:
• Mobile App Design
• Web Interface Design
• Micro-interactions & Animations
• User Research & Testing

Technical:
• HTML/CSS, Basic React
• Design Thinking & User-Centered Design
• Information Architecture

PROJECTS
Investment App Redesign (iVector)
• Complete UI/UX overhaul for investment application
• Enhanced user onboarding and dashboard interactions

Men's App
• Designed comprehensive mobile application
• Focus on intuitive navigation and modern aesthetics

Formula 1 by RedBull
• Created engaging sports content interface
• Dynamic animations and real-time data visualization

EDUCATION
UX Design & Digital Product Design

INTERESTS
User Experience, Digital Innovation, Interaction Design
              `
              const element = document.createElement('a')
              element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent))
              element.setAttribute('download', 'Yatish_Kapila_Resume.txt')
              element.style.display = 'none'
              document.body.appendChild(element)
              element.click()
              document.body.removeChild(element)
            }}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition glow-effect"
          >
            <Download size={18} />
            <span className="text-sm font-medium">Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slideInRight">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                const resumeContent = `Yatish Kapila - Product & UIUX Designer Resume`
                const element = document.createElement('a')
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent))
                element.setAttribute('download', 'Yatish_Kapila_Resume.txt')
                element.style.display = 'none'
                document.body.appendChild(element)
                element.click()
                document.body.removeChild(element)
                setIsMenuOpen(false)
              }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition w-fit glow-effect"
            >
              <Download size={18} />
              <span className="text-sm font-medium">Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
