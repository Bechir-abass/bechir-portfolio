import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string[]
  skills: string[]
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Team Leader",
      company: "Kenz Mining SA",
      period: "2021 - 2022",
      location: "Mauritania",
      description: [
        "Led cross-functional teams in mining operations",
        "Coordinated logistics and operational planning",
        "Improved team efficiency and workflow processes",
        "Managed project timelines and resource allocation"
      ],
      skills: ["Leadership", "Project Management", "Logistics", "Team Coordination"]
    },
    {
      title: "Cashier",
      company: "IP Gold Mauritanie",
      period: "2018 - 2019",
      location: "Mauritania",
      description: [
        "Managed daily transactions and cash handling",
        "Provided excellent customer service",
        "Maintained accurate financial records",
        "Handled customer inquiries and resolved issues"
      ],
      skills: ["Customer Service", "Financial Management", "Communication", "Problem Solving"]
    },
    {
      title: "Horse Racer & Assistant",
      company: "Fédération Mauritanienne du Sport Equestre",
      period: "2015 - 2019",
      location: "Mauritania",
      description: [
        "Participated in competitive horse racing events",
        "Assisted in event preparation and organization",
        "Provided horse care and maintenance",
        "Collaborated with team members and trainers"
      ],
      skills: ["Teamwork", "Event Management", "Animal Care", "Physical Fitness"]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <strong className="text-primary">Experience</strong>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey has equipped me with diverse skills and valuable experience across different industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary opacity-30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full shadow-glow border-4 border-background"></div>
                  
                  {/* Content Card */}
                  <div className="ml-20">
                    <Card className="shadow-elegant hover:shadow-glow transition-spring hover:scale-105 border-primary/10">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div className="flex items-center mb-2 lg:mb-0">
                            <div className="p-2 bg-primary/10 rounded-lg mr-4">
                              <Briefcase className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{exp.title}</h3>
                              <p className="text-lg text-primary font-medium">{exp.company}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col lg:items-end text-sm text-muted-foreground">
                            <div className="flex items-center mb-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <p className="text-muted-foreground">{item}</p>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.skills.map((skill, i) => (
                              <Badge 
                                key={i}
                                variant="secondary"
                                className="transition-spring hover:scale-105 hover:bg-primary/10 hover:border-primary hover:border"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}