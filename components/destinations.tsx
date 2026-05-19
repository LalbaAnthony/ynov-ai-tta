"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Clock, ArrowRight, X, Volume2, VolumeX, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Destination {
  id: string
  title: string
  era: string
  year: string
  description: string
  highlights: string[]
  duration: string
  price: string
  image: string
  audio?: string
  color: string
}

const destinations: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    era: "Belle Epoque",
    year: "1889",
    description: "Assistez a l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Flanez dans les rues eclairees au gaz, visitez les impressionnistes a Montmartre et vivez l'age d'or de la culture parisienne.",
    highlights: [
      "Inauguration de la Tour Eiffel",
      "Ouverture du Moulin Rouge",
      "Rencontrez Claude Monet",
      "Exposition Universelle"
    ],
    duration: "3-7 jours",
    price: "A partir de 12 500 EUR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.1.1-XMqLGmCJxLUJarxzq8879eeHz6OePy.png",
    audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.1-plcpAJRrIbveYwetVtnefg1byU4BXN.mp3",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "cretaceous",
    title: "Cretace",
    era: "L'ere des Dinosaures",
    year: "-68 Millions",
    description: "Voyagez au Cretace superieur et observez les creatures les plus majestueuses ayant jamais foule la Terre. Nos capsules d'observation securisees vous offrent une experience epoustouflante en toute securite.",
    highlights: [
      "T-Rex dans son habitat naturel",
      "Vols de Pteranodons",
      "Troupeaux de Triceratops",
      "Flore prehistorique"
    ],
    duration: "1-3 jours",
    price: "A partir de 25 000 EUR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.1.2-kuFBGny24rgIzwKPN2F9BlSTwcYmyH.png",
    audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trex-roar-VhtmYjEy2DQrJoizedWsCjsA7plrJe.mp3",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    era: "Haute Renaissance",
    year: "1504",
    description: "Arpentez les rues ou Leonard, Michel-Ange et Raphael ont cree leurs chefs-d'oeuvre. Assistez au devoilement du David et vivez l'apogee de l'accomplissement artistique de l'humanite.",
    highlights: [
      "Ceremonie du devoilement du David",
      "Atelier de Leonard de Vinci",
      "Visite du palais des Medicis",
      "Cours d'art de la Renaissance"
    ],
    duration: "5-10 jours",
    price: "A partir de 18 000 EUR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.1.3-Es4aKJt5a09Pfo1ysTZuyNHJNKiujZ.png",
    audio: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.2-4l7m0p1Ou2LMCYXe4gMd80GiljACgQ.mp3",
    color: "from-rose-500/20 to-pink-500/20"
  }
]

function DestinationCard({ destination, onClick }: { destination: Destination; onClick: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
    }
  }, [])

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Card
      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer h-full"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (audioRef.current && isPlaying) {
          audioRef.current.pause()
          audioRef.current.currentTime = 0
          setIsPlaying(false)
        }
      }}
    >
      {/* Audio Element */}
      {destination.audio && (
        <audio ref={audioRef} src={destination.audio} />
      )}

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${destination.color} opacity-40 z-10`} />
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-20" />
        
        {/* Year Badge */}
        <div className="absolute top-4 left-4 z-30">
          <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-mono text-primary border border-border/50">
            {destination.year}
          </span>
        </div>

        {/* Audio Toggle */}
        {destination.audio && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            onClick={toggleAudio}
            className="absolute top-4 right-4 z-30 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 hover:bg-background transition-colors"
            aria-label={isPlaying ? "Arreter le son" : "Ecouter l'ambiance"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-primary" />
            ) : (
              <Play className="h-4 w-4 text-muted-foreground" />
            )}
          </motion.button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {destination.era}
        </span>
        <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
          {destination.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{destination.duration}</span>
          </div>
          <span className="text-primary font-semibold">
            {destination.price}
          </span>
        </div>
      </div>

      {/* Hover Arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="h-5 w-5 text-primary" />
      </div>
    </Card>
  )
}

export function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const modalAudioRef = useRef<HTMLAudioElement>(null)
  const [isModalAudioPlaying, setIsModalAudioPlaying] = useState(false)

  useEffect(() => {
    if (modalAudioRef.current) {
      modalAudioRef.current.volume = 0.3
    }
  }, [selectedDestination])

  useEffect(() => {
    // Stop audio when modal closes
    if (!selectedDestination && modalAudioRef.current) {
      modalAudioRef.current.pause()
      setIsModalAudioPlaying(false)
    }
  }, [selectedDestination])

  const toggleModalAudio = () => {
    if (modalAudioRef.current) {
      if (isModalAudioPlaying) {
        modalAudioRef.current.pause()
      } else {
        modalAudioRef.current.play()
      }
      setIsModalAudioPlaying(!isModalAudioPlaying)
    }
  }

  return (
    <section id="destinations" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Choisissez Votre Epoque
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Nos Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trois voyages extraordinaires a travers le temps, chacun offrant une fenetre unique 
            sur les moments les plus remarquables de l&apos;humanite.
          </p>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <DestinationCard 
                destination={destination} 
                onClick={() => setSelectedDestination(destination)} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Destination Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedDestination(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Audio */}
              {selectedDestination.audio && (
                <audio ref={modalAudioRef} src={selectedDestination.audio} loop />
              )}

              {/* Modal Image */}
              <div className="relative h-64">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedDestination.color} opacity-30`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  {/* Audio Toggle */}
                  {selectedDestination.audio && (
                    <button
                      onClick={toggleModalAudio}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                      aria-label={isModalAudioPlaying ? "Couper le son" : "Activer le son"}
                    >
                      {isModalAudioPlaying ? (
                        <Volume2 className="h-5 w-5 text-primary" />
                      ) : (
                        <VolumeX className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  )}
                  
                  <button
                    onClick={() => setSelectedDestination(null)}
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-primary">
                    {selectedDestination.year}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {selectedDestination.era}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4">{selectedDestination.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedDestination.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Points Forts
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedDestination.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="flex items-center gap-6 mb-8 p-4 bg-secondary/30 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{selectedDestination.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{selectedDestination.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Disponible</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">A partir de</span>
                    <p className="text-2xl font-bold text-primary">{selectedDestination.price}</p>
                  </div>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Reserver ce Voyage
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
