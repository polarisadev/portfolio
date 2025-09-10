"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Youtube, Music } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        className={`container mx-auto px-6 text-center relative z-10 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance leading-tight">
            Hi, I'm <span className="text-accent animate-pulse-glow">Polar</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Creator of <span className="text-accent font-semibold">Disband</span>,{" "}
            <span className="text-accent font-semibold">Neo Blog</span>, and other popular services.
            <br />
            Full-stack developer passionate about building innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-glow rounded-2xl px-8 py-4 text-lg font-semibold hover-lift"
            >
              View My Work
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-2xl hover-lift glass-effect bg-transparent"
              >
                <a href="https://github.com/lmaopolar" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-2xl hover-lift glass-effect bg-transparent"
              >
                <a href="https://youtube.com/@wsgpolar" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-2xl hover-lift glass-effect bg-transparent"
              >
                <a href="https://tiktok.com/@wsgpolar" target="_blank" rel="noopener noreferrer">
                  <Music className="w-5 h-5 mr-2" />
                  TikTok
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
