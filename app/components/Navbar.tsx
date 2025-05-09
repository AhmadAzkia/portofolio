'use client'
import React from 'react'
import Link from 'next/link'
import { HiHome } from 'react-icons/hi'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export const Navbar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md rounded-full shadow-lg px-8 py-3 flex items-center justify-between max-w-3xl bg-indigo-600 backdrop-blur-md">
      <div className="flex items-center gap-6">
        {!isHomePage && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="text-gray-200 hover:text-white transition">
              <HiHome className="w-6 h-6" />
            </Link>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link href="/about" className="text-gray-200 hover:text-white transition">Certification</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link href="/projects" className="text-gray-200 hover:text-white transition">Skills</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link href="/skills" className="text-gray-200 hover:text-white transition">Chatroom</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Link href="/contact" className="text-gray-200 hover:text-white transition">About</Link>
        </motion.div>
      </div>
    </nav>
  )
}
