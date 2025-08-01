import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Heart } from "lucide-react"

export function AboutSection() {
  const interests = [
    "Weightlifting", "Horseback Riding", "Football", "Problem Solving", 
    "Time Management", "Self-Improvement"
  ]

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <strong className="text-primary">Me</strong>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate student from Mauritania with big dreams and determination to make an impact in the tech world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Story */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                I'm Bechire Abass, a Mauritanian student currently pursuing my Bachelor's degree in 
                Information Technology with a focus on Business Information Systems at Asia Pacific University, Malaysia.
              </p>
              <p>
                My journey in technology is driven by a passion for problem-solving and innovation. 
                I believe that technology has the power to transform lives and create meaningful change in our world.
              </p>
              <p>
                Beyond academics, I'm committed to personal growth through fitness, sports, and continuous learning. 
                My goal is to eventually start my own tech company and contribute to the global technology landscape.
              </p>
            </div>
          </div>

          {/* Right Column - Details Cards */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Education Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-spring hover:scale-105 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">Current Studies</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">BSc Information Technology</p>
                  <p className="text-muted-foreground">Business Information Systems</p>
                  <p className="text-sm text-muted-foreground">Asia Pacific University, Malaysia</p>
                  <Badge variant="secondary" className="mt-2">Expected 2026</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Goals Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-spring hover:scale-105 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Career Goals</h3>
                    <p className="text-muted-foreground">Future Aspirations</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Pursue management roles in technology companies and eventually 
                    establish my own tech startup focused on innovative solutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interests Card */}
            <Card className="shadow-elegant hover:shadow-glow transition-spring hover:scale-105 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Interests</h3>
                    <p className="text-muted-foreground">Personal Passions</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="transition-spring hover:scale-105 hover:bg-primary/10 hover:border-primary"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}