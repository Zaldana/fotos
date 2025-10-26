'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 font-[family-name:var(--font-bebas-neue)]">
              Ruben Zaldaña
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              href="/nature"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/nature') || isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Nature
            </Link>
            <Link
              href="/travel"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/travel') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Travel
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
