import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Denis Jesus Palma Abanto | Cyrenix",
  description: "Learn more about Denis Jesus Palma Abanto, Cyrenix founder and blockchain infrastructure expert."
}

export default function AboutDenisPage() {
  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white overflow-hidden">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link 
              href="/"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl opacity-20 blur-xl" />
              <Image
                src="/images/denis-palma.png"
                alt="Denis Jesus Palma Abanto - Blockchain Infrastructure Expert"
                width={500}
                height={600}
                className="relative rounded-xl w-full"
                priority
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">Denis Jesus Palma Abanto</h1>
              <p className="text-xl text-purple-400">Founder & Blockchain Infrastructure Expert</p>
              
              <div itemScope itemType="http://schema.org/Person">
                <meta itemProp="name" content="Denis Jesus Palma Abanto" />
                <meta itemProp="alternateName" content="Denis Palma Abanto" />
                <meta itemProp="jobTitle" content="Founder & Blockchain Infrastructure Expert" />
                
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed" itemProp="description">
                    As the pioneering Site Reliability Engineer at Solana during its formative period in early 2021, Denis Jesus Palma Abanto
                    established the foundational infrastructure that would support one of blockchain&apos;s most innovative platforms.
                  </p>
                  
                  <p className="leading-relaxed">
                    Rising through the ranks to Lead SRE, he managed a high-performing team of five engineers, driving
                    operational excellence and scalability. His technical leadership was instrumental in Solana&apos;s ability to handle
                    unprecedented transaction volumes while maintaining network reliability.
                  </p>
                  
                  <p className="leading-relaxed">
                    With deep expertise in distributed systems and blockchain infrastructure, Denis brings a unique perspective to
                    scalability challenges in the Web3 ecosystem. His practical experience building mission-critical systems has informed
                    his approach to identifying promising investment opportunities.
                  </p>
                  
                  <p className="leading-relaxed">
                    At Cyrenix, Denis combines technical expertise with strategic vision to evaluate and develop blockchain projects with
                    transformative potential. His focus remains on infrastructure solutions that address core challenges in the industry.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <h2 className="text-2xl font-semibold mb-4">Connect</h2>
                <div className="flex space-x-4">
                  <Button className="bg-purple-500 hover:bg-purple-600">LinkedIn</Button>
                  <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
