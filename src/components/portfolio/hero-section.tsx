import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-radial">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/20 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-32 h-32 bg-accent/15 rounded-full blur-xl animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-2 h-20 bg-primary/20 transform rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-2 bg-accent/20 animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12 animate-fade-in-up">
          {/* Enhanced Profile Picture */}
          <div className="relative mx-auto w-56 h-56 mb-12 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {/* Main profile container with glassmorphism */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-neon transition-spring hover:shadow-glow hover:scale-110 bg-glass border-2 border-primary/20">
              <img 
                src="https://i.postimg.cc/fk45fBTv/IMG-0738.png" 
                alt="Bechir Abass Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Rotating ring around profile */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animation: 'spin 20s linear infinite' }}></div>
            <div className="absolute inset-2 rounded-full border border-accent/20 animate-spin" style={{ animation: 'spin 15s linear infinite reverse' }}></div>
            
            {/* Pulsing background glow - positioned behind the profile picture */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse-slow scale-125 -z-10"></div>
            
            {/* Floating particles */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-primary-glow rounded-full opacity-80 animate-bounce" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Enhanced Main Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              <div className="space-y-2">
                <div className="text-foreground/90 text-2xl md:text-3xl font-light mb-4 tracking-wider animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  Hello, I'm
                </div>
                <div className="text-gradient font-extrabold animate-scale-in" style={{ animationDelay: '1s' }}>
                  Bechir Abass
                </div>
              </div>
            </h1>
            
            {/* Enhanced tagline with typing effect */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                <em className="text-primary font-medium">Aspiring IT Professional</em>
                <small className="text-muted-foreground/60 mx-3">•</small>
                <em className="text-accent font-medium">Web Developer</em>
                <small className="text-muted-foreground/60 mx-3">•</small>
                <em className="text-primary-glow font-medium">Problem Solver</em>
              </p>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Information Technology student passionate about creating 
                <strong className="text-primary/80 font-medium"> innovative solutions</strong> and 
                <strong className="text-accent/80 font-medium"> building the future</strong> through technology.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Button 
              size="lg" 
              className="group transition-spring hover:scale-110 hover:shadow-neon bg-gradient-primary border-0 px-8 py-4 text-lg font-semibold rounded-full relative overflow-hidden"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center">
                View My Work
                <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group transition-spring hover:scale-110 hover:shadow-glow bg-glass border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center">
                Get In Touch
                <Mail className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 pt-12 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="group transition-spring hover:scale-125 hover:shadow-glow bg-glass rounded-full w-14 h-14 border border-primary/20 hover:border-primary/50 hover:bg-primary/10"
              onClick={() => window.open('https://github.com/Bechir-abass', '_blank')}
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="group transition-spring hover:scale-125 hover:shadow-glow bg-glass rounded-full w-14 h-14 border border-primary/20 hover:border-primary/50 hover:bg-primary/10"
              onClick={() => window.open('https://www.linkedin.com/in/bechir-abass-2294012a5', '_blank')}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="group transition-spring hover:scale-125 hover:shadow-glow bg-glass rounded-full w-14 h-14 border border-primary/20 hover:border-primary/50 hover:bg-primary/10"
              onClick={() => window.open('mailto:Bhoussein2001@gmail.com')}
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </div>


    </section>
  )
}