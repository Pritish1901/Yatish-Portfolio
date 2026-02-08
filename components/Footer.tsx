'use client'

import { Mail, Linkedin, Github, ExternalLink, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:pritish@example.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
    },
  ]

  return (
    <footer
      id="contact"
      className="w-full bg-background border-t border-border/50"
    >
      {/* CTA Section */}
      <div className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let&apos;s Work Together
          </h2>

          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities.
            Feel free to reach out if you think we&apos;d be a great fit.
          </p>

          <a
            href="mailto:pritish@example.com"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-bold hover:opacity-90 transition duration-300"
          >
            <Mail size={20} />
            <span>Send Me an Email</span>
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">YK</h3>
              <p className="text-muted-foreground">
                Product &amp; UIUX Designer crafting beautiful digital experiences.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '#' },
                  { label: 'About', href: '#about' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Skills', href: '#skills' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Connect</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Behance', href: 'https://behance.net' },
                  { label: 'Dribbble', href: 'https://dribbble.com' },
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'Twitter', href: 'https://twitter.com' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition duration-300 inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Resources</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Download Resume', href: '#' },
                  { label: 'Case Studies', href: '#projects' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-border/50 pt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition duration-300 flex items-center justify-center text-foreground hover:text-primary group"
                      title={link.name}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>

              <p className="text-sm text-muted-foreground text-center md:text-right">
                © {currentYear} Yatish Kapila. Designed &amp; built with attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
