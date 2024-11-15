import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black/60 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-sm text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#blog" className="text-sm text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#whitepaper" className="text-sm text-gray-400 hover:text-white">
                  Whitepaper
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#twitter" className="text-sm text-gray-400 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#linkedin" className="text-sm text-gray-400 hover:text-white">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-sm text-gray-400 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Cyrenix. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
