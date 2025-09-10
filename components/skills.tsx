"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "C#", level: 80, category: "Backend" },
  { name: "C++", level: 75, category: "Backend" },
  { name: "Java", level: 70, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Database" },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0))
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels((prev) => {
                const newLevels = [...prev]
                newLevels[index] = skill.level
                return newLevels
              })
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = ["Frontend", "Backend", "Database"]

  return (
    <section id="skills" ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            {categories.map((category) => (
              <Card key={category} className="mb-8 bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-accent">{category}</h3>
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => {
                        const skillIndex = skills.findIndex((s) => s.name === skill.name)
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-card-foreground font-medium">{skill.name}</span>
                              <span className="text-muted-foreground text-sm">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${animatedLevels[skillIndex]}%` }}
                              ></div>
                            </div>
                          </div>
                        )
                      })}
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
