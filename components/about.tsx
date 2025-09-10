"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
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
    <section id="about" ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-card-foreground leading-relaxed mb-6">
                    I'm a passionate full-stack developer with a proven track record of building popular services that
                    users love. My journey in tech has led me to create
                    <span className="text-accent font-semibold"> Disband</span> and
                    <span className="text-accent font-semibold"> Neo Blog</span>, among other successful projects.
                  </p>
                  <p className="text-lg text-card-foreground leading-relaxed">
                    With expertise spanning multiple programming languages and frameworks, I enjoy tackling complex
                    problems and turning innovative ideas into reality. I'm always exploring new technologies and
                    pushing the boundaries of what's possible.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center border-2 border-accent/20">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
