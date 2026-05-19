"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Users, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Absolute Safety",
    description: "State-of-the-art temporal displacement technology with multiple failsafes and trained guides."
  },
  {
    icon: Clock,
    title: "Precise Timing",
    description: "Arrive at the exact moment in history you choose. Our temporal accuracy is unmatched."
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Historians and temporal specialists accompany every journey for an authentic experience."
  },
  {
    icon: Award,
    title: "Premium Service",
    description: "Luxury accommodations, period-appropriate attire, and personalized itineraries included."
  }
]

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              About TimeTravel
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Pioneers of Temporal Tourism
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Since our founding, TimeTravel Agency has been at the forefront of temporal 
              exploration. We believe everyone deserves to experience history firsthand—to 
              walk where legends walked and witness moments that shaped our world.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of historians, scientists, and hospitality experts craft journeys 
              that are not just trips through time, but transformative experiences that 
              change how you see the past, present, and future.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
