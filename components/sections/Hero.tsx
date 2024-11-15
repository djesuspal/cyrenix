'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-orange-500/20" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-50" />
      </div>
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center space-y-8 px-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            be a part of
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              history
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Join us in shaping the future of blockchain infrastructure and investment opportunities.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-purple-100">
            Connect with Us
          </Button>
        </motion.div>
      )}
    </section>
  )
}
