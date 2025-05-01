import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Portfolio
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
