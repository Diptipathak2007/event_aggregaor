"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SubmitEventForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Event Submitted!",
        description: "Your event has been submitted for review.",
      })
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="submit-event" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/20 p-2 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Submit Your Event</h2>
            <p className="text-muted-foreground md:text-lg">
              Have a tech event coming up? Let us help you reach thousands of tech-savvy students!
            </p>
            <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="font-medium mb-2">Why submit your event?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Reach thousands of tech-savvy students
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Increase attendance and engagement
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Connect with the right audience
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Completely free to submit
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl p-6 bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input type="text" placeholder="Event Name" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input type="date" placeholder="Date" required />
                </div>
                <div className="space-y-2">
                  <Input type="time" placeholder="Time" required />
                </div>
              </div>
              <div className="space-y-2">
                <Input type="text" placeholder="Location" required />
              </div>
              <div className="space-y-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="tech-talk">Tech Talk</SelectItem>
                    <SelectItem value="webinar">Webinar</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Event Description" required className="min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Input type="url" placeholder="Registration Link" required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Event"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
