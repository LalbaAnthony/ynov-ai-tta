"use client"

import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  destinations: [
    { label: "Paris 1889", href: "#destinations" },
    { label: "Cretaceous Era", href: "#destinations" },
    { label: "Florence 1504", href: "#destinations" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Safety", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">TimeTravel<span className="text-primary">.</span></span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Experience history firsthand with the world&apos;s premier temporal tourism agency.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@timetravel.agency</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) TIME-NOW</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Temporal HQ, Geneva</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 TimeTravel Agency. All rights reserved across all timelines.
          </p>
          <p className="text-xs text-muted-foreground">
            Temporal displacement services subject to availability and temporal stability regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}
