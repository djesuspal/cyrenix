// @ts-nocheck - Disable TypeScript checking for this file
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { samplePosts } from "@/lib/blog-data"
import { formatDate } from "@/lib/utils"

// Generate static params for all blog posts
export async function generateStaticParams() {
  return samplePosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = samplePosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found | Cyrenix",
      description: "The blog post you're looking for doesn't exist."
    }
  }

  return {
    title: `${post.title} | Cyrenix Blog`,
    description: post.excerpt,
  }
}

// Blog post page component
export default function BlogPost({ params }) {
  const post = samplePosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/blog"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>

          <article>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-400 text-sm">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </div>

            {post.coverImage && (
              <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose prose-invert prose-xl max-w-none">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="mb-6 leading-relaxed text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <Link 
              href="/blog"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
