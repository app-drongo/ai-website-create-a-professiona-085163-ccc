// Services1 Component
// Generated: 2025-08-27T08:58:04.677Z
// Template: services-c002
// Context: Services
// Position: pages.1.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Settings,
  Database,
  Factory,
  Shield,
  TrendingUp,
  Users,
  BarChart3,
  Workflow
} from "lucide-react"

export default function Services1() {
  const services = [
    {
      id: "sap-implementation",
      title: "SAP Implementation & Integration",
      description: "Complete SAP deployment tailored for manufacturing excellence",
      longDescription: "Our comprehensive SAP implementation service transforms your manufacturing operations with industry-leading ERP solutions. We ensure seamless integration with existing systems while minimizing downtime and maximizing ROI.",
      icon: Database,
      benefits: [
        "End-to-end SAP S/4HANA implementation",
        "Legacy system migration and data conversion",
        "Custom module configuration for manufacturing",
        "Real-time production monitoring integration"
      ],
      pricing: "Starting at $150,000",
      timeline: "6-18 months implementation",
      featured: true,
      badge: "Enterprise Solution"
    },
    {
      id: "manufacturing-optimization",
      title: "Manufacturing Process Optimization",
      description: "Streamline operations with intelligent automation and analytics",
      longDescription: "Transform your production floor with data-driven optimization strategies. We analyze your current processes, identify bottlenecks, and implement solutions that increase efficiency and reduce operational costs.",
      icon: Factory,
      benefits: [
        "Lean manufacturing methodology implementation",
        "Production workflow automation",
        "Quality management system integration",
        "Predictive maintenance solutions"
      ],
      pricing: "Custom enterprise pricing",
      timeline: "3-8 months engagement"
    },
    {
      id: "business-intelligence",
      title: "Manufacturing Business Intelligence",
      description: "Real-time insights for data-driven manufacturing decisions",
      longDescription: "Unlock the power of your manufacturing data with advanced analytics and reporting solutions. Our BI platform provides executives with real-time visibility into operations, costs, and performance metrics.",
      icon: BarChart3,
      benefits: [
        "Real-time production dashboards",
        "Cost analysis and profitability reporting",
        "Supply chain visibility and analytics",
        "Executive KPI monitoring systems"
      ],
      pricing: "Starting at $25,000/quarter",
      timeline: "4-8 weeks deployment"
    },
    {
      id: "compliance-security",
      title: "Manufacturing Compliance & Security",
      description: "Ensure regulatory compliance and protect critical systems",
      longDescription: "Safeguard your manufacturing operations with comprehensive compliance and security solutions. We help you meet industry regulations while protecting sensitive data and maintaining operational continuity.",
      icon: Shield,
      benefits: [
        "ISO 9001/27001 compliance assessment",
        "FDA and industry regulation adherence",
        "Cybersecurity for industrial systems",
        "Audit preparation and documentation"
      ],
      pricing: "Assessment from $15,000",
      timeline: "2-6 weeks per assessment",
      badge: "Critical"
    },
    {
      id: "digital-transformation",
      title: "Manufacturing Digital Transformation",
      description: "Modernize operations with Industry 4.0 technologies",
      longDescription: "Lead your industry with comprehensive digital transformation strategies. We integrate IoT, AI, and advanced analytics to create smart manufacturing environments that drive competitive advantage.",
      icon: TrendingUp,
      benefits: [
        "IoT sensor integration and monitoring",
        "AI-powered predictive analytics",
        "Digital twin implementation",
        "Smart factory automation systems"
      ],
      pricing: "Enterprise solutions from $200,000",
      timeline: "12-24 months transformation"
    },
    {
      id: "change-management",
      title: "Organizational Change Management",
      description: "Ensure successful adoption of new manufacturing systems",
      longDescription: "Maximize the success of your technology investments with expert change management. We guide your teams through transformation, ensuring smooth adoption and sustained performance improvements.",
      icon: Users,
      benefits: [
        "Executive leadership coaching",
        "Employee training and certification",
        "Process documentation and standardization",
        "Performance measurement and optimization"
      ],
      pricing: "Starting at $50,000/engagement",
      timeline: "Ongoing throughout implementation"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Manufacturing Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise SAP Solutions for
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Manufacturing Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive consulting services designed to transform your manufacturing operations through strategic SAP integration and business process optimization
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
                          <Badge variant={service.featured ? "default" : "secondary"} className={service.featured ? "bg-primary text-primary-foreground" : ""}>
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
                            <span className="text-sm font-semibold text-primary">
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
                          className={`group/btn ${service.featured ? 'bg-primary hover:bg-primary/90' : 'border-primary/20 hover:bg-primary/5'}`}
                        >
                          Request Consultation
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
        <div className="mt-16 p-8 rounded-2xl bg-secondary/5 border border-secondary/10 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-secondary">Ready to Transform Your Manufacturing Operations?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our SAP integration experts are ready to discuss your specific manufacturing challenges and design a custom solution that drives measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Strategic Assessment
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Download Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}