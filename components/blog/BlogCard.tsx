import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative rounded-lg overflow-hidden bg-black/30 hover:bg-black/40 transition-colors duration-300">
      <Link href={`/blog/${post.slug}`} className="block p-6">
        <div className="grid sm:grid-cols-[1fr_2fr] gap-6">
          {post.coverImage && (
            <div className="relative h-48 rounded-md overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
              {post.title}
            </h2>
            <div className="text-sm text-gray-400 mb-3">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <p className="text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-auto">
              <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                Read more →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
