"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Polar</div>
          <div className="hidden md:flex space-x-8">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-accent transition-colors"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
