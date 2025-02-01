import React from 'react'

const Journal_Publication = () => {
  return (
    <div>
      <section 
        className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('public/images/maintenance.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Coming Soon....
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journal_Publication


