"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All" },
  { id: "hackathon", label: "Hackathons" },
  { id: "workshop", label: "Workshops" },
  { id: "tech-talk", label: "Tech Talks" },
  { id: "webinar", label: "Webinars" },
]

export function FilterTabs() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <section className="py-6">
      <div className="flex overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex space-x-2 mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                activeTab === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary hover:bg-secondary/80",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
