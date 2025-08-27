// Contactcontact Component
// Generated: 2025-08-27T08:58:04.677Z
// Template: contact-c001
// Context: Contact
// Position: pages.3.sections.1

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Headphones,
  Building2,
  Calendar,
  FileText
} from "lucide-react"

export default function Contactcontact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Schedule Consultation",
      description: "Book a strategic planning session",
      contact: "+1 (555) 847-3200",
      action: "Book Call"
    },
    {
      icon: Mail,
      title: "Enterprise Inquiries",
      description: "SAP integration project discussions",
      contact: "enterprise@manufacturetechsolutions.com",
      action: "Send Inquiry"
    },
    {
      icon: MessageSquare,
      title: "Technical Support",
      description: "Implementation assistance",
      contact: "Available during business hours",
      action: "Contact Support"
    }
  ]

  const offices = [
    {
      city: "Detroit, MI",
      address: "2500 Manufacturing Blvd, Suite 800",
      timezone: "EST (UTC-5)",
      focus: "Automotive Manufacturing Hub"
    },
    {
      city: "Chicago, IL",
      address: "1200 Industrial Drive, Floor 12",
      timezone: "CST (UTC-6)",
      focus: "Midwest Operations Center"
    },
    {
      city: "Charlotte, NC",
      address: "850 Enterprise Way, Building C",
      timezone: "EST (UTC-5)",
      focus: "Southeast Regional Office"
    }
  ]

  const projectTypes = [
    "SAP S/4HANA Implementation",
    "Legacy System Migration",
    "Manufacturing Process Optimization",
    "Supply Chain Integration",
    "Digital Transformation Strategy",
    "Other"
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Building2 className="size-3 mr-2" />
            Enterprise Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Manufacturing Operations?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with our SAP integration experts to discuss your digital transformation 
            journey. We're here to help you optimize processes and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle className="text-2xl flex items-center gap-2">
                <FileText className="size-6 text-primary" />
                Request Enterprise Consultation
              </CardTitle>
              <CardDescription>
                Tell us about your manufacturing challenges and SAP integration needs. 
                Our experts will respond within 4 business hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="john.smith@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Manufacturing Corp"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-2">
                      Your Role *
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="CTO, IT Director, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select your project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your current manufacturing systems, integration challenges, timeline, and specific goals for your SAP transformation project..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group bg-primary hover:bg-primary/90">
                  Request Consultation
                  <Calendar className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Connect with Our Experts
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Regional Offices
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-secondary/50">
                        {office.timezone}
                      </Badge>
                    </div>
                    <p className="text-xs text-accent font-medium">{office.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    24/7 critical support for active SAP implementations
                  </p>
                </div>
                <div className="mt-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent font-medium">
                    Emergency manufacturing downtime support available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}