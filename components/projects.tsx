"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Disband",
    description:
      "A popular service that has gained significant traction in the developer community. Built with modern technologies and focused on user experience.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    featured: true,
    link: "https://disband-revamp.vercel.app",
  },
  {
    title: "Neo Blog",
    description:
      "A modern blogging platform with advanced features and clean design. Empowers content creators with powerful tools.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    featured: true,
    link: "https://neo-blog.vercel.app",
  },
  {
    title: "Portfolio Projects",
    description:
      "Various other popular services and applications that showcase my versatility across different domains and technologies.",
    tech: ["C#", "C++", "Java", "JavaScript"],
    featured: false,
    link: "https://example.com",
  },
]

export function Projects() {
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
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-3xl border-2 ${
                  project.featured
                    ? "border-accent/30 bg-gradient-to-br from-card to-accent/5 hover:border-accent/50"
                    : "bg-card hover:border-accent/30"
                } ${isVisible ? "animate-scale-in" : "opacity-0"} hover-lift`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-card-foreground flex items-center justify-between">
                    {project.title}
                    {project.featured && (
                      <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium animate-pulse-glow">
                        Featured
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 rounded-xl hover-lift bg-transparent" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl hover-lift bg-transparent">
                      <Github className="w-4 h-4" />
                    </Button>
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
