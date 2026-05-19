import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { About } from "@/components/about"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <About />
      <Footer />
      <Chatbot />
    </main>
  )
}
