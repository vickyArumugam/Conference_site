import React from 'react'

const Journal_Publication = () => {
  return (
    <div
      className="relative w-full h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: 'url("public/images/under-con.jpeg") '
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Coming Soon...</h1>
        <p className="text-xl">We're working hard to bring something great!</p>
      </div>
    </div>
  )
}

export default Journal_Publication


