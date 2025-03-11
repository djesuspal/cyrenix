import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors bg-purple-500 text-white hover:bg-purple-600"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
