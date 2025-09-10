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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      <div
        className={`container mx-auto px-6 text-center relative z-10 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance">
            Hi, I'm <span className="text-accent">Polar</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Creator of <span className="text-accent font-semibold">Disband</span>,{" "}
            <span className="text-accent font-semibold">Neo Blog</span>, and other popular services.
            <br />
            Full-stack developer passionate about building innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-glow"
            >
              View My Work
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/lmaopolar" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://youtube.com/@wsgpolar" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" />
                  YouTube
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
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
