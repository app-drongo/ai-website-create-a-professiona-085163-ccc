// Features Component
// Generated: 2025-08-27T08:58:04.677Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Shield, 
  Database, 
  Globe, 
  BarChart3, 
  Cog,
  Zap,
  Users,
  TrendingUp
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Settings,
      title: "SAP Integration Excellence",
      description: "Seamless integration of SAP systems with your existing manufacturing infrastructure for optimal workflow efficiency.",
      badge: "Core Service"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols ensuring your manufacturing data and processes remain protected and compliant.",
      badge: "Security"
    },
    {
      icon: Database,
      title: "Data Migration & Management",
      description: "Complete data migration services with zero downtime, ensuring business continuity throughout transformation.",
      badge: "Data Services"
    },
    {
      icon: Globe,
      title: "Multi-Plant Connectivity",
      description: "Connect multiple manufacturing facilities worldwide with unified SAP systems and real-time data synchronization.",
      badge: "Global Solutions"
    },
    {
      icon: BarChart3,
      title: "Manufacturing Analytics",
      description: "Advanced analytics and reporting tools providing actionable insights for production optimization and cost reduction.",
      badge: "Analytics"
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline manufacturing workflows with intelligent automation, reducing manual tasks and increasing efficiency.",
      badge: "Automation"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Accelerated deployment methodologies ensuring faster time-to-value with minimal disruption to operations.",
      badge: "Implementation"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Dedicated team of SAP-certified consultants with deep manufacturing industry expertise and proven track record.",
      badge: "Consulting"
    },
    {
      icon: TrendingUp,
      title: "Business Transformation",
      description: "Complete digital transformation strategies that modernize operations and drive sustainable competitive advantage.",
      badge: "Strategy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Manufacturing Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Manufacturing
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Operations with SAP
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP integration solutions designed specifically for manufacturing enterprises 
            seeking operational excellence and digital transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to modernize your manufacturing operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule SAP Assessment
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}