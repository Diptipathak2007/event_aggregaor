"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Globe } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Discover & Join the Coolest Tech Events 🔥
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Hackathons, Workshops & Talks for College Innovators
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#events">
                <Button size="lg" className="group">
                  Explore Events
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#submit-event">
                <Button size="lg" variant="outline">
                  Submit Your Event
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Animated tech elements */}
              <div className="absolute -top-10 -left-10 animate-float animation-delay-2000">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 shadow-xl">
                  <Code className="h-8 w-8 text-pink-500" />
                </div>
              </div>
              <div className="absolute top-1/2 -right-12 animate-float">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-white/10 shadow-xl">
                  <Cpu className="h-10 w-10 text-blue-500" />
                </div>
              </div>
              <div className="absolute -bottom-10 left-1/3 animate-float animation-delay-4000">
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-white/10 shadow-xl">
                  <Globe className="h-7 w-7 text-yellow-500" />
                </div>
              </div>

              {/* Main illustration */}
              <div className="w-full h-[400px] rounded-3xl bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                        <Zap className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Connect & Learn</h3>
                      <p className="text-muted-foreground">Join the community of tech enthusiasts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Zap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
