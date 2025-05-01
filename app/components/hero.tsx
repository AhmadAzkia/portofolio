import React from 'react'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m <span className="text-indigo-600">Ahmad Azkia Fadlan</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate developer creating beautiful and functional web applications
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 