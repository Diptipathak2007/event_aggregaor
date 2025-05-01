"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="newsletter" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="rounded-2xl p-6 md:p-10 bg-gradient-to-br from-primary/20 via-primary/10 to-background backdrop-blur-sm border border-border/50">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/20 p-2 mb-2">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get weekly event alerts</h2>
              <p className="text-muted-foreground md:text-lg">
                Stay updated with the coolest tech events straight to your inbox!
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <Button type="submit" className="w-full h-12 group" disabled={isSubmitting}>
                  Subscribe
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-primary">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline underline-offset-2 hover:text-primary">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
