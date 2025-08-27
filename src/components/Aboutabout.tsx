// Aboutabout Component
// Generated: 2025-08-27T08:58:04.677Z
// Template: about-c001
// Context: About
// Position: pages.2.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Shield,
  Cog,
  Factory,
  Database
} from "lucide-react"

export default function Aboutabout() {
  const values = [
    {
      icon: Target,
      title: "Manufacturing Excellence",
      description: "We understand manufacturing operations inside and out, delivering SAP solutions that optimize production efficiency and drive operational excellence."
    },
    {
      icon: Cog,
      title: "Technical Innovation",
      description: "We leverage cutting-edge SAP technologies and integration methodologies to transform legacy systems into modern, connected manufacturing ecosystems."
    },
    {
      icon: Shield,
      title: "Enterprise Reliability",
      description: "Your manufacturing operations depend on system reliability. We deliver robust, secure SAP integrations with 99.9% uptime guarantees."
    },
    {
      icon: Globe,
      title: "Global Manufacturing",
      description: "From automotive to aerospace, we've helped manufacturers across industries and continents achieve digital transformation success."
    }
  ]

  const stats = [
    { value: "2015", label: "Founded", icon: Award },
    { value: "200+", label: "Manufacturing Clients", icon: Factory },
    { value: "99.9%", label: "System Uptime", icon: TrendingUp },
    { value: "15+", label: "Countries Served", icon: Globe }
  ]

  const team = [
    {
      name: "Robert Mitchell",
      role: "CEO & SAP Principal",
      image: "RM",
      bio: "Former SAP VP with 20+ years in manufacturing systems integration and digital transformation."
    },
    {
      name: "Dr. Lisa Zhang",
      role: "CTO & Solutions Architect", 
      image: "LZ",
      bio: "Ex-Siemens technical lead. Expert in Industry 4.0 and SAP S/4HANA manufacturing modules."
    },
    {
      name: "James Patterson",
      role: "Manufacturing Practice Lead",
      image: "JP",
      bio: "Former plant operations manager turned SAP consultant with deep manufacturing domain expertise."
    },
    {
      name: "Maria Gonzalez",
      role: "Integration Director",
      image: "MG",
      bio: "SAP-certified architect specializing in complex enterprise integrations and data migration."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About ManufactureTech Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Manufacturing Through
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're manufacturing technology specialists dedicated to helping industrial leaders achieve 
            operational excellence through strategic SAP integration and digital transformation.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Manufacturing Heritage</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by former manufacturing executives and SAP veterans, we recognized that 
                industrial companies needed specialized expertise to navigate complex digital transformations.
              </p>
              <p>
                After witnessing countless failed ERP implementations and disconnected systems hampering 
                production efficiency, we built a consultancy focused exclusively on manufacturing SAP solutions.
              </p>
              <p>
                Today, we're the trusted SAP integration partner for over 200 manufacturing companies worldwide, 
                helping them achieve Industry 4.0 readiness and operational excellence.
              </p>
            </div>
            <Button className="group">
              View Our Case Studies
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Manufacturing excellence requires technology that understands your operations, not generic solutions."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Robert Mitchell, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The manufacturing principles that drive our SAP consulting approach and client partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
            <p className="text-muted-foreground">
              Manufacturing and SAP experts with decades of combined experience in industrial digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "ManufactureTech Solutions transformed our entire production planning process. Their SAP integration 
                reduced our order-to-delivery time by 40% and gave us real-time visibility across all plants."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  TH
                </div>
                <div className="text-left">
                  <div className="font-semibold">Thomas Harrison</div>
                  <div className="text-sm text-muted-foreground">VP Operations, Global Automotive Corp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}