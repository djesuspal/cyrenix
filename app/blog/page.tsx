import Link from "next/link"
import { BlogCard } from "@/components/blog/BlogCard"
import { samplePosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog | Cyrenix",
  description: "Latest insights on blockchain infrastructure and investment opportunities from Denis Jesus Palma Abanto."
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Blog</h1>
          <p className="text-xl text-gray-300 mb-12">
            Latest insights on blockchain infrastructure and investment opportunities.
          </p>

          <div className="grid gap-8">
            {samplePosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12">
            <Link 
              href="/"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
