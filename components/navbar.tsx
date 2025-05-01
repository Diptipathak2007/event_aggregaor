"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                TechRadar
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#submit-event" className="text-sm font-medium transition-colors hover:text-primary">
              Submit Event
            </Link>
            <Link href="#newsletter" className="text-sm font-medium transition-colors hover:text-primary">
              Newsletter
            </Link>
            <Button size="sm">Sign Up</Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 bg-background/95 backdrop-blur-lg">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#submit-event"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Event
            </Link>
            <Link
              href="#newsletter"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </Link>
            <Button size="sm" className="w-full">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
