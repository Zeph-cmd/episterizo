import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold">Episterizo</Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/chapters" className="nav-link">Episterizo Topics</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
        </div>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block nav-link">Home</Link>
            <Link href="/chapters" className="block nav-link">Episterizo Topics</Link>
            <Link href="/resources" className="block nav-link">Resources</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
