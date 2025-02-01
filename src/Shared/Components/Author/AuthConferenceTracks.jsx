import React from 'react'
import ConferenceTracks from './ConferenceTracks';

export default function AuthConferenceTracks() {
  return (
    <>
    <div
      className="h-[60vh] bg-cover bg-center flex justify-center items-center text-white px-4"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/images/business-8941891_1920.jpg')`,
      }}
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">CONFERENCE TRACKS</h1>
      </div>
    </div>

    <ConferenceTracks/>
    </>
  );
}
