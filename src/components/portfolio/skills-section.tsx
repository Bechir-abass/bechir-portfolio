import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, BarChart3, Users, Settings, Palette } from "lucide-react"

interface Skill {
  name: string
  level: number
  category: string
}

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  tools: string[]
}

export function SkillsSection() {
  const skills: Skill[] = [
    { name: "Programming", level: 85, category: "Technical" },
    { name: "Web Design", level: 90, category: "Technical" },
    { name: "Data Analysis", level: 67, category: "Technical" },
    { name: "Database Management", level: 75, category: "Technical" },
    { name: "Project Management", level: 85, category: "Soft Skills" },
    { name: "Communication", level: 82, category: "Soft Skills" },
    { name: "Time Management", level: 95, category: "Soft Skills" },
    { name: "Teamwork", level: 98, category: "Soft Skills" }
  ]

  const tools = [
    "Visual Studio Code", "MySQL", "Cisco Packet Tracer", "RStudio", 
    "HTML/CSS/JS", "PHP", "Java", "Python", "MS Office", "UI/UX Design"
  ]

  const services: Service[] = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Web Design & UI/UX",
      description: "Creating beautiful, user-friendly interfaces and experiences that engage and convert.",
      tools: ["HTML/CSS", "JavaScript", "UI/UX Design", "Responsive Design"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "Designing and managing efficient database systems for optimal data storage and retrieval.",
      tools: ["MySQL", "Database Design", "Data Modeling", "SQL Optimization"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets to drive informed business decisions.",
      tools: ["R", "Python", "Data Cleaning", "Statistical Analysis"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "IT & Network Projects",
      description: "Implementing and managing IT infrastructure and network solutions.",
      tools: ["Cisco Packet Tracer", "Network Design", "System Administration"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Project Management",
      description: "Leading teams and managing projects from conception to successful completion.",
      tools: ["Team Leadership", "Resource Planning", "Timeline Management"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Building robust applications using modern programming languages and frameworks.",
      tools: ["Java", "Python", "PHP", "Desktop Applications"]
    }
  ]

  const technicalSkills = skills.filter(skill => skill.category === "Technical")
  const softSkills = skills.filter(skill => skill.category === "Soft Skills")

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <strong className="text-primary">Ability</strong>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set developed through education, hands-on projects, and professional experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Technical Skills */}
          <Card className="shadow-elegant hover:shadow-glow transition-spring border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-6 w-6 text-primary mr-3" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.level}%</p>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="shadow-elegant hover:shadow-glow transition-spring border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.level}%</p>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm transition-spring hover:scale-105 hover:bg-primary/10 hover:border-primary"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-center mb-12">Ability</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="shadow-elegant hover:shadow-glow transition-spring hover:scale-105 border-primary/10 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-spring">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}