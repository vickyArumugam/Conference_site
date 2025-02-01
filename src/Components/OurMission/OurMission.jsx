import React from 'react'

export default function Ourmission() {
  return (
    <div>
        {/* Mission Statement */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify">
              ICCSI provides a dynamic platform for presenting cutting-edge research, 
              fostering meaningful discussions, and building collaborative partnerships 
              between academia and industry. We're committed to inspiring innovation 
              and driving the future of computer science through knowledge exchange 
              and networking opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}