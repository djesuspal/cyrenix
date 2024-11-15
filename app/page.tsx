import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { Founder } from "@/components/sections/Founder"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white overflow-hidden">
      <Header />
      <Hero />
      <Founder />
      <Footer />
    </div>
  )
}
