import React, { useState } from 'react';
import addressBg from '../address.jpg';

export function MyAddress() {
  const [addresses, setAddresses] = useState([]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-stone-100 relative flex flex-col" style={{
      backgroundImage: `url(${addressBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      <div className="relative z-10 flex flex-col h-full w-full p-6 md:p-12">
        {/* Heading - My Address */}
        <div className="text-right pb-4 flex-shrink-0">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900" style={{ 
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            My Address
          </h1>
        </div>

        {/* Envelope Style Card Container - Centered */}
        <div className="flex items-center justify-center flex-grow">
        <div className="w-full max-w-6xl px-4">
          {/* Envelope - Red Background */}
          <div className="bg-red-900 rounded-3xl shadow-2xl overflow-hidden">
            {/* Envelope Flap (Triangle top) */}
            <div className="relative h-32 bg-red-800 flex items-end justify-center">
              {/* White content inside flap */}
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-light text-gray-400">
                  ✦
                </div>
              </div>
            </div>

            {/* Main Content Area - White */}
            <div className="bg-white p-8 md:p-12">
              <div className="text-center space-y-6">
                {/* Main Heading */}
                <h2 className="text-3xl md:text-5xl font-black text-gray-900" style={{
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: '-0.02em'
                }}>
                  FRAGMENTS<br/>OF PERSONAL<br/>ALCHEMY
                </h2>

                {/* Decorative Line */}
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-gray-900"></div>
                </div>

                {/* Subtitle/Description */}
                <p className="text-gray-700 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
                  Manage your delivery addresses with elegance and precision. Each address is a fragment of your personal journey, stored with care.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  <button className="px-10 py-3 bg-gray-900 text-white rounded-full font-semibold text-sm md:text-base hover:bg-gray-800 transition duration-300">
                    Add Address
                  </button>
                  <button className="px-10 py-3 bg-gray-200 text-gray-900 rounded-full font-semibold text-sm md:text-base hover:bg-gray-300 transition duration-300 border-2 border-gray-900">
                    View All
                  </button>
                </div>

                {/* Decorative Signature Style Text */}
                <div className="pt-4 text-gray-600 italic text-lg md:text-xl font-light" style={{
                  fontFamily: 'cursive'
                }}>
                  Journey
                </div>
              </div>
            </div>

            {/* Bottom Red Section */}
            <div className="bg-red-900 h-16 flex items-center justify-center">
              <p className="text-white text-xl font-light tracking-widest">
                MARTSEVAYA
              </p>
            </div>
          </div>

          {/* Address Cards Below */}
          {addresses.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {addresses.map((address, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-red-900">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{address.name}</h3>
                  <p className="text-gray-600 text-sm">{address.street}</p>
                  <p className="text-gray-600 text-sm">{address.city}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
