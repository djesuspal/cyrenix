'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Cyrenix Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="#founder" className="text-sm hover:text-purple-400 transition-colors">
            Team
          </Link>
          <Button className="bg-white text-black hover:bg-purple-100">Contact Us</Button>
        </nav>
      </div>
    </header>
  )
}
