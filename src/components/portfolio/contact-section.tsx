import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, ExternalLink } from "lucide-react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string | null }>({
    type: null,
    message: null
  })
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <strong className="text-primary">Touch</strong>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work together? Let's discuss your project and bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to work together!
              </p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-elegant hover:shadow-glow transition-spring border-primary/10">
                <CardContent className="p-6 flex items-center">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">bechirstudy2024@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover:shadow-glow transition-spring border-primary/10">
                <CardContent className="p-6 flex items-center">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">0147978226</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant hover:shadow-glow transition-spring border-primary/10 cursor-pointer" onClick={() => window.open('https://bechir-profile.netlify.app', '_blank')}>
                <CardContent className="p-6 flex items-center">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <ExternalLink className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Portfolio Hub</h4>
                    <p className="text-muted-foreground">bechir-profile.netlify.app</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-elegant border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6" ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                setIsSubmitting(true)
                setSubmitStatus({ type: null, message: null })
                
                emailjs.sendForm(
                  'service_tc6sp1e',
                  'template_tb6uv19',
                  formRef.current!,
                  'bkTUDiuLAk6gV0073'
                )
                .then(() => {
                  setSubmitStatus({
                    type: "success",
                    message: "Message sent successfully! I'll get back to you soon."
                  })
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject: "",
                    message: ""
                  })
                })
                .catch((error) => {
                  console.error("EmailJS error:", error)
                  setSubmitStatus({
                    type: "error",
                    message: "Failed to send message. Please try again later."
                  })
                })
                .finally(() => {
                  setIsSubmitting(false)
                })
              }}>
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                  <Input 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
                <Input 
                  name="email"
                  placeholder="Email Address" 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={6} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
                {submitStatus.message && (
                  <div className={`p-3 rounded-md ${submitStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {submitStatus.message}
                  </div>
                )}
                <Button 
                  type="submit" 
                  className="w-full transition-spring hover:scale-105 hover:shadow-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}