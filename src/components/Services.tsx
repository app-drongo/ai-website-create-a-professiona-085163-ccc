// Services Component
// Generated: 2025-08-27T08:58:04.677Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Settings,
  Database,
  BarChart3,
  Shield,
  Cog,
  Factory
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "sap-implementation",
      title: "SAP S/4HANA Implementation",
      description: "Complete SAP transformation for manufacturing excellence",
      longDescription: "Our comprehensive SAP S/4HANA implementation service transforms your manufacturing operations with intelligent ERP solutions. We ensure seamless migration, minimal downtime, and maximum ROI through proven methodologies.",
      icon: Settings,
      benefits: [
        "End-to-end implementation strategy",
        "Manufacturing-specific modules",
        "Data migration and validation",
        "User training and change management"
      ],
      pricing: "Custom enterprise pricing",
      timeline: "6-18 months implementation",
      featured: true,
      badge: "Most Requested"
    },
    {
      id: "manufacturing-optimization",
      title: "Manufacturing Process Optimization",
      description: "Streamline operations with intelligent automation",
      longDescription: "Optimize your manufacturing processes through SAP integration and Industry 4.0 technologies. We analyze your current workflows and implement solutions that reduce waste, improve quality, and increase throughput.",
      icon: Factory,
      benefits: [
        "Production planning optimization",
        "Quality management systems",
        "Supply chain integration",
        "Real-time monitoring dashboards"
      ],
      pricing: "Starting at $25,000/project",
      timeline: "3-6 months per phase"
    },
    {
      id: "business-intelligence",
      title: "Manufacturing Analytics & BI",
      description: "Data-driven insights for strategic decision making",
      longDescription: "Transform your manufacturing data into actionable insights with our advanced analytics and business intelligence solutions. Leverage SAP Analytics Cloud and custom dashboards for real-time visibility.",
      icon: BarChart3,
      benefits: [
        "Real-time production analytics",
        "Predictive maintenance insights",
        "Cost analysis and optimization",
        "Executive reporting dashboards"
      ],
      pricing: "Starting at $15,000/solution",
      timeline: "2-4 months"
    },
    {
      id: "integration-services",
      title: "Enterprise System Integration",
      description: "Seamless connectivity across your technology stack",
      longDescription: "Connect SAP with your existing manufacturing systems, IoT devices, and third-party applications. Our integration services ensure data flows seamlessly across your entire technology ecosystem.",
      icon: Database,
      benefits: [
        "API development and management",
        "IoT device connectivity",
        "Legacy system integration",
        "Cloud and on-premise solutions"
      ],
      pricing: "Project-based pricing",
      timeline: "4-8 weeks per integration",
      badge: "Technical Excellence"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Manufacturing Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise SAP Services for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Manufacturing Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP integration and manufacturing optimization services designed to drive operational excellence and digital transformation
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Request Assessment
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Manufacturing Operations?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our SAP experts are ready to assess your current systems and design a transformation roadmap tailored to your manufacturing goals.
          </p>
          <Button size="lg">
            Book Strategy Session
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}