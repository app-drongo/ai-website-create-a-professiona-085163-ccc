// Footer Component
// Generated: 2025-08-27T08:58:04.676Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Settings
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "SAP Integration", href: "/services#sap-integration" },
        { name: "Manufacturing Systems", href: "/services#manufacturing" },
        { name: "Process Optimization", href: "/services#optimization" },
        { name: "Digital Transformation", href: "/services#digital" },
        { name: "System Migration", href: "/services#migration" },
        { name: "Support & Maintenance", href: "/services#support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#team" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Knowledge Base", href: "/resources" },
        { name: "White Papers", href: "/resources/whitepapers" },
        { name: "Best Practices", href: "/resources/best-practices" },
        { name: "Webinars", href: "/resources/webinars" },
        { name: "Industry Insights", href: "/resources/insights" },
        { name: "Documentation", href: "/docs" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Technical Support", href: "/support/technical" },
        { name: "Training", href: "/support/training" },
        { name: "System Status", href: "/status" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Settings className="text-background size-5" />
                </div>
                <span className="font-bold text-xl text-background">ManufactureTech Solutions</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Leading SAP integration specialists for manufacturing enterprises. We transform complex 
                business processes into streamlined, efficient systems that drive operational excellence.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">solutions@manufacturetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">+1 (555) 847-3920</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">2500 Industrial Blvd, Suite 400</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background">Industry Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-secondary">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/60">
                Get manufacturing technology insights and SAP integration updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© 2024 ManufactureTech Solutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Engineered with <Heart className="size-3 text-accent fill-current" /> for manufacturing excellence
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/70 mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/70 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/sitemap" className="text-xs text-background/60 hover:text-background transition-colors">
              Sitemap
            </Link>
            <Link href="/security" className="text-xs text-background/60 hover:text-background transition-colors">
              Security
            </Link>
            <Link href="/compliance" className="text-xs text-background/60 hover:text-background transition-colors">
              Compliance
            </Link>
            <Link href="/support" className="text-xs text-background/60 hover:text-background transition-colors">
              Technical Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}