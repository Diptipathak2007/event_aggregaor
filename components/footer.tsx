import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-lg">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-2 inline-block"
            >
              TechRadar
            </Link>
            <p className="text-sm text-muted-foreground mt-2">Connecting students with tech events that matter.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#submit-event" className="text-muted-foreground hover:text-primary">
                  Submit Event
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} TechRadar. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">Made with 💜 for tech-savvy students</p>
        </div>
      </div>
    </footer>
  )
}
