import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe, Database, Code, BarChart3 } from "lucide-react"

interface Project {
  title: string
  description: string
  category: string
  technologies: string[]
  features: string[]
  icon: React.ReactNode
  demoLink?: string
  githubLink?: string
  status: "Completed" | "In Progress" | "Prototype"
}

export function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "Cartier Academy Web Application",
      description: "A comprehensive web learning platform designed to provide interactive educational experiences with user management and course delivery systems.",
      category: "Web Development",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "User authentication and management",
        "Interactive course modules",
        "Progress tracking system",
        "Responsive design",
        "Admin dashboard"
      ],
      icon: <Globe className="h-6 w-6" />,
      status: "Completed"
    },
    {
      title: "Eventure Project",
      description: "An innovative event management system prototype that streamlines event planning, registration, and coordination for various types of events.",
      category: "Project Management",
      technologies: ["Web Technologies", "Database Design", "UI/UX"],
      features: [
        "Event creation and management",
        "User registration system",
        "Event scheduling",
        "Notification system",
        "Analytics dashboard"
      ],
      icon: <BarChart3 className="h-6 w-6" />,
      status: "Prototype"
    },
    {
      title: "Lazada E-Commerce Project",
      description: "A complete online store solution for APR Electronics (KEDAI.MALAYSIA) featuring product catalog, shopping cart, and order management.",
      category: "E-Commerce",
      technologies: ["E-Commerce Platform", "Payment Integration", "Inventory Management"],
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "Order processing system",
        "Payment gateway integration",
        "Inventory tracking"
      ],
      icon: <Globe className="h-6 w-6" />,
      status: "Completed"
    },
    {
      title: "Java Restaurant Management System",
      description: "A desktop application built in Java for managing restaurant operations including order management, inventory tracking, and staff coordination.",
      category: "Desktop Application",
      technologies: ["Java", "Swing GUI", "File I/O", "OOP"],
      features: [
        "Order management system",
        "Menu management",
        "Staff management",
        "Sales reporting",
        "Inventory control"
      ],
      icon: <Code className="h-6 w-6" />,
      status: "Completed"
    },
    {
      title: "Python ATM Simulation",
      description: "A banking simulation system that replicates ATM functionality including balance checking, withdrawals, deposits, and transaction history.",
      category: "Software Development",
      technologies: ["Python", "File Handling", "Data Structures", "Security"],
      features: [
        "Account authentication",
        "Balance inquiry",
        "Money withdrawal/deposit",
        "Transaction history",
        "PIN security system"
      ],
      icon: <Code className="h-6 w-6" />,
      status: "Completed"
    },
    {
      title: "Data Cleaning & Analysis in R",
      description: "An academic project focused on data preparation, cleaning, and statistical analysis to extract meaningful insights from complex datasets.",
      category: "Data Analysis",
      technologies: ["R", "Statistical Analysis", "Data Visualization", "RStudio"],
      features: [
        "Data cleaning procedures",
        "Statistical analysis",
        "Data visualization",
        "Report generation",
        "Insight extraction"
      ],
      icon: <Database className="h-6 w-6" />,
      status: "Completed"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-500 border-green-500/20"
      case "In Progress": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "Prototype": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <strong className="text-primary">Portfolio</strong>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate my technical skills, creativity, and problem-solving abilities across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-elegant hover:shadow-glow transition-spring hover:scale-105 border-primary/10 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-spring">
                    <div className="text-primary">{project.icon}</div>
                  </div>
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                <Badge variant="outline" className="w-fit text-xs">
                  {project.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  {project.demoLink && (
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {!project.demoLink && !project.githubLink && (
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      <Code className="h-3 w-3 mr-1" />
                      Academic Project
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            size="lg" 
            className="transition-spring hover:scale-105 hover:shadow-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}