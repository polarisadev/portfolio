"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Youtube, Music, Mail } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" className="bg-input" />
                <Input type="email" placeholder="Your Email" className="bg-input" />
                <Input placeholder="Subject" className="bg-input" />
                <Textarea placeholder="Your Message" rows={5} className="bg-input" />
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities and collaborations. Feel free to reach out through any of
                  these platforms!
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="https://github.com/lmaopolar" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub - @lmaopolar
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="https://youtube.com/@wsgpolar" target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-5 h-5 mr-3" />
                      YouTube - @wsgpolar
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="https://tiktok.com/@wsgpolar" target="_blank" rel="noopener noreferrer">
                      <Music className="w-5 h-5 mr-3" />
                      TikTok - @wsgpolar
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
