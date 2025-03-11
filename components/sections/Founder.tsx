'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Founder() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="denis-jesus-palma-abanto" className="relative py-24 bg-black/40">
      <div className="container mx-auto px-4">
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl opacity-20 blur-xl" />
              <Image
                src="/images/denis-palma.png"
                alt="Denis Jesus Palma Abanto - Blockchain Infrastructure Expert"
                width={400}
                height={500}
                className="relative rounded-xl"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Meet Our Founder</h2>
              <div itemScope itemType="http://schema.org/Person">
                <meta itemProp="name" content="Denis Jesus Palma Abanto" />
                <meta itemProp="alternateName" content="Denis Palma Abanto" />
                <meta itemProp="jobTitle" content="Founder & Blockchain Infrastructure Expert" />
                <p className="text-gray-300 leading-relaxed" itemProp="description">
                  As the pioneering Site Reliability Engineer at Solana during its formative period in early 2021, Denis Jesus Palma Abanto
                  established the foundational infrastructure that would support one of blockchain's most innovative platforms.
                  Rising through the ranks to Lead SRE, he managed a high-performing team of five engineers, driving
                  operational excellence and scalability. Now focused on identifying and developing promising investment
                  opportunities in the blockchain space, he brings unparalleled technical expertise and industry insight to
                  every venture.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                  Learn More
                </Button>
                <Button className="bg-purple-500 hover:bg-purple-600">Connect</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
