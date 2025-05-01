"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface EventProps {
  event: {
    id: number
    title: string
    date: string
    time: string
    location: string
    type: string
    description: string
    image: string
    trending?: boolean
    seats?: string
  }
}

export function EventCard({ event }: EventProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "bg-purple-500 hover:bg-purple-600"
      case "workshop":
        return "bg-blue-500 hover:bg-blue-600"
      case "tech-talk":
        return "bg-pink-500 hover:bg-pink-600"
      case "webinar":
        return "bg-green-500 hover:bg-green-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  const getSeatsLabel = (seats?: string) => {
    switch (seats) {
      case "limited":
        return "⏳ Limited Seats"
      case "filling-fast":
        return "🔥 Filling Fast"
      case "available":
        return "✅ Seats Available"
      default:
        return null
    }
  }

  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-xl",
        isHovered ? "scale-[1.02] shadow-xl" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <Badge className={cn("text-white", getTypeColor(event.type))}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
        </div>

        {/* Trending badge */}
        {event.trending && (
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500/50">
              🔥 Trending
            </Badge>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{event.title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            {event.location}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

        <div className="flex items-center justify-between">
          {getSeatsLabel(event.seats) && <span className="text-xs font-medium">{getSeatsLabel(event.seats)}</span>}
          <Button size="sm" className="ml-auto">
            Register
          </Button>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
