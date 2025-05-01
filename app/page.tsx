import { EventCard } from "@/components/event-card"
import { FilterTabs } from "@/components/filter-tabs"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SearchFilters } from "@/components/search-filters"
import { SubmitEventForm } from "@/components/submit-event-form"
import { AboutUs } from "@/components/about-us"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90 overflow-hidden">
        <div className="relative">
          {/* Background gradient blobs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

          <Navbar />
          <main className="container mx-auto px-4 relative z-10">
            <Hero />
            <FilterTabs />
            <SearchFilters />

            <section id="events" className="py-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Trending Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>

            <AboutUs />
            <NewsletterSignup />
            <SubmitEventForm />
          </main>
          <Footer />

          {/* Floating theme toggle */}
          <div className="fixed bottom-6 right-6 z-50">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

// Sample event data
const events = [
  {
    id: 1,
    title: "HackTech 2023",
    date: "Oct 15-17, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "Stanford University",
    type: "hackathon",
    description: "48-hour coding competition with amazing prizes and networking opportunities.",
    image: "/placeholder.svg?height=200&width=400",
    trending: true,
    seats: "limited",
  },
  {
    id: 2,
    title: "AI Workshop Series",
    date: "Oct 22, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "Online",
    type: "workshop",
    description: "Learn the fundamentals of AI and machine learning with hands-on projects.",
    image: "/placeholder.svg?height=200&width=400",
    trending: true,
    seats: "available",
  },
  {
    id: 3,
    title: "Web3 Developer Summit",
    date: "Nov 5, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "MIT Campus",
    type: "tech-talk",
    description: "Join industry leaders for discussions on the future of web development.",
    image: "/placeholder.svg?height=200&width=400",
    trending: false,
    seats: "available",
  },
  {
    id: 4,
    title: "Design Systems Webinar",
    date: "Nov 12, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Online",
    type: "webinar",
    description: "Learn how to create and implement effective design systems for your projects.",
    image: "/placeholder.svg?height=200&width=400",
    trending: false,
    seats: "unlimited",
  },
  {
    id: 5,
    title: "Startup Pitch Competition",
    date: "Nov 18, 2023",
    time: "5:00 PM - 9:00 PM",
    location: "UC Berkeley",
    type: "tech-talk",
    description: "Watch innovative startups pitch their ideas to venture capitalists.",
    image: "/placeholder.svg?height=200&width=400",
    trending: true,
    seats: "limited",
  },
  {
    id: 6,
    title: "Cybersecurity Bootcamp",
    date: "Dec 1-3, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Georgia Tech",
    type: "workshop",
    description: "Intensive 3-day bootcamp covering essential cybersecurity concepts and practices.",
    image: "/placeholder.svg?height=200&width=400",
    trending: false,
    seats: "filling-fast",
  },
]
