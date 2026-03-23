import React, { useState } from 'react';
import { X } from 'lucide-react';

// Import step images
import step1 from '../1.png';
import step2 from '../2.png';
import step3 from '../3.png';
import step4 from '../4.png';
import informationBg from '../information.jpg';
import img10 from '../10.png';
import img11 from '../11.png';
import img12 from '../12.png';
import img13 from '../13.png';
import img14 from '../14.png';
import img15 from '../15.jpg';

export function MyStore() {
  const [activeStep, setActiveStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [currentFormStep, setCurrentFormStep] = useState(0);

  const formSteps = [
    {
      title: 'Select the artist',
      description: 'Search for the artist\'s name in our list of accepted artists. If your artist is not listed, we do not accept their artworks for sale by individuals, even if galleries sell them on Artsper.',
      fields: ['Select the artist']
    },
    {
      title: 'Photos of the artwork',
      description: 'Upload high quality photos of your artwork',
      fields: ['Upload photos']
    },
    {
      title: 'Proof of authenticity',
      description: 'Provide proof of authenticity documents',
      fields: ['Upload proof']
    },
    {
      title: 'Information',
      description: 'Provide artwork information',
      fields: ['Artwork info']
    },
    {
      title: 'Price and shipping',
      description: 'Set your price and shipping details',
      fields: ['Price', 'Shipping']
    }
  ];

  const steps = [
    {
      number: 1,
      image: step1,
      title: 'Select your artwork:',
      description: 'Add an artwork purchased on Artsper or elsewhere.'
    },
    {
      number: 2,
      image: step2,
      title: 'Verified by our experts:',
      description: 'Response within 24h to 7 days depending on the artwork.'
    },
    {
      number: 3,
      image: step3,
      title: 'Online listing:',
      description: 'Make sure your photos look great, we\'ll take care of the rest!'
    },
    {
      number: 4,
      image: step4,
      title: 'The artwork is sold!',
      description: 'Receive your payment once delivery is confirmed and the legal period has passed.'
    }
  ];

  return (
    <>
      {showForm ? (
        <div className="min-h-screen bg-white">
          <div className="border-b border-gray-200 px-8 py-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div></div>
              <button onClick={() => { setShowForm(false); setCurrentFormStep(0); }} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">×</button>
            </div>
          </div>

          <div className="border-b border-gray-200 px-8 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center gap-2 mb-6">
                {formSteps.map((step, index) => (
                  <div key={index} className="flex-1 flex items-center">
                    <button onClick={() => setCurrentFormStep(index)} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${index < currentFormStep ? 'bg-slate-900 text-white' : index === currentFormStep ? 'bg-slate-900 text-white' : 'bg-gray-300 text-gray-600'}`}>{index + 1}</button>
                    {index < formSteps.length - 1 && <div className={`flex-1 h-1 mx-2 ${index < currentFormStep ? 'bg-slate-900' : 'bg-gray-300'}`}></div>}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                {formSteps.map((step, index) => <span key={index} className="text-center flex-1">{step.title}</span>)}
              </div>
            </div>
          </div>

          <div className="max-w-full mx-auto px-8 py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{formSteps[currentFormStep].title}</h2>
            <p className="text-gray-600 mb-8 text-lg">{formSteps[currentFormStep].description}</p>

            {currentFormStep === 0 && (
              <div>
                <label className="block font-bold text-slate-900 mb-4 text-lg">Select the artist <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Search for an artist..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
                <div className="mt-12 pt-12 border-t border-gray-200 -mx-8 px-8 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ backgroundImage: `url(${informationBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                  <div className="absolute inset-0 bg-white/20"></div>
                  <div className="relative z-10 max-w-7xl mx-auto">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-center mb-12" style={{ textShadow: '0 4px 8px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(255, 255, 255, 0.4)' }}>What can you sell on Zigguratss?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="border border-gray-200 rounded-lg p-10 bg-white/95 shadow-lg backdrop-blur-sm">
                        <div className="text-6xl mb-6 text-center">🖼️</div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg text-center">Artworks in perfect condition</h4>
                        <p className="text-gray-600 text-base text-center">All artworks must be in perfect condition.</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-10 bg-white/95 shadow-lg backdrop-blur-sm">
                        <div className="text-6xl mb-6 text-center">💰</div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg text-center">Prices linked to the artist's market value</h4>
                        <p className="text-gray-600 text-base text-center">The price must be in line with the artist's market value.</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-10 bg-white/95 shadow-lg backdrop-blur-sm">
                        <div className="text-6xl mb-6 text-center">⭐</div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg text-center">Unique or numbered artworks</h4>
                        <p className="text-gray-600 text-base text-center">The artwork must be unique or a numbered limited edition.</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-10 bg-white/95 shadow-lg backdrop-blur-sm">
                        <div className="text-6xl mb-6 text-center">📜</div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg text-center">Proof of provenance</h4>
                        <p className="text-gray-600 text-base text-center">You must have a certificate of authenticity and purchase invoice.</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-10 bg-white/95 shadow-lg backdrop-blur-sm">
                        <div className="text-6xl mb-6 text-center">🎨</div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg text-center">Contemporary artworks</h4>
                        <p className="text-gray-600 text-base text-center">We do not accept design objects and vintage artworks made before 1950.</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-10 bg-white/95 shadow-lg backdrop-blur-sm">
                        <div className="text-6xl mb-6 text-center">✨</div>
                        <h4 className="font-bold text-slate-900 mb-3 text-lg text-center">Artsper's artistic line</h4>
                        <p className="text-gray-600 text-base text-center">If your artwork matches Artsper's curatorial line, it will be published.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentFormStep === 1 && (
              <div>
                <label className="block font-bold text-slate-900 mb-4 text-lg">Upload photos <span className="text-red-500">*</span></label>
                <p className="text-gray-600 mb-6">Add at least 3 photos of your artwork. JPG, JPEG, PNG, WEBP, HEIC or HEIF format, minimum 600px on one side, maximum 5000×5000px and 8MB. Take quality photos in daylight against a neutral background.</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Recommended photo types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                      <img src={img10} alt="Frontal view" className="w-80 h-80 mx-auto mb-4 object-contain" />
                      <p className="text-sm font-semibold text-slate-900">Frontal view, background cropped</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                      <img src={img11} alt="In room view" className="w-80 h-80 mx-auto mb-4 object-contain" />
                      <p className="text-sm font-semibold text-slate-900">In room view</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                      <img src={img12} alt="Signature" className="w-80 h-80 mx-auto mb-4 object-contain" />
                      <p className="text-sm font-semibold text-slate-900">Signature</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                      <img src={img13} alt="Side view" className="w-80 h-80 mx-auto mb-4 object-contain" />
                      <p className="text-sm font-semibold text-slate-900">Side view</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                      <img src={img14} alt="Back view" className="w-80 h-80 mx-auto mb-4 object-contain" />
                      <p className="text-sm font-semibold text-slate-900">Back view</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                      <img src={img15} alt="Details" className="w-80 h-80 mx-auto mb-4 object-contain" />
                      <p className="text-sm font-semibold text-slate-900">Details</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                      <img src={img15} alt="Details" className="w-80 h-80 mx-auto mb-4 object-contain" />
                      <p className="text-sm font-semibold text-slate-900">Details</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition">
                      <img src={img15} alt="Details" className="w-80 h-80 mx-auto mb-4 object-contain" />
                      <p className="text-sm font-semibold text-slate-900">Details</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block font-bold text-slate-900 mb-4">Upload photos <span className="text-red-500">*</span></label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-slate-900 hover:bg-gray-50 transition">
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-2">JPG, PNG, WEBP up to 8MB</p>
                  </div>
                </div>
              </div>
            )}

            {currentFormStep === 2 && (
              <div>
                <label className="block font-bold text-slate-900 mb-4 text-lg">Upload proof <span className="text-red-500">*</span></label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-slate-900 transition">
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                </div>
              </div>
            )}

            {currentFormStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block font-bold text-slate-900 mb-2 text-lg">Artwork Title <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter artwork title" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="block font-bold text-slate-900 mb-2 text-lg">Description <span className="text-red-500">*</span></label>
                  <textarea placeholder="Describe your artwork" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" rows="4"></textarea>
                </div>
              </div>
            )}

            {currentFormStep === 4 && (
              <div className="space-y-6">
                <div>
                  <label className="block font-bold text-slate-900 mb-2 text-lg">Price <span className="text-red-500">*</span></label>
                  <input type="number" placeholder="Enter price" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
                <div>
                  <label className="block font-bold text-slate-900 mb-2 text-lg">Shipping Cost <span className="text-red-500">*</span></label>
                  <input type="number" placeholder="Enter shipping cost" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
                </div>
              </div>
            )}

            <div className="flex justify-between gap-4 mt-12">
              <button onClick={() => setCurrentFormStep(Math.max(0, currentFormStep - 1))} disabled={currentFormStep === 0} className="px-6 py-3 text-slate-900 font-semibold hover:text-slate-700 disabled:text-gray-400 disabled:cursor-not-allowed transition">← Back</button>
              {currentFormStep === formSteps.length - 1 ? (
                <button onClick={() => setShowForm(false)} className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition">Submit →</button>
              ) : (
                <button onClick={() => setCurrentFormStep(currentFormStep + 1)} className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition">Next →</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-white via-yellow-50 to-yellow-100 relative overflow-hidden">
          <div className="absolute top-0 left-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-200 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10 w-full">
            <div className="pt-12 pb-8 text-center px-4">
              <h1 className="text-7xl md:text-8xl font-black text-slate-900 drop-shadow-lg tracking-tighter mb-4" style={{ fontWeight: 900 }}>MY STORE</h1>
              <p className="text-slate-700 text-base font-bold max-w-2xl mx-auto drop-shadow-sm mb-2">Sell your artworks and reach a global audience of art collectors</p>
              <p className="text-slate-600 text-sm max-w-2xl mx-auto drop-shadow-sm">Share your work with collectors worldwide. Our expert team verifies authenticity and helps you connect with buyers.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 -mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {steps.map((step, index) => (
                  <div key={index} onClick={() => setActiveStep(index)} className="group cursor-pointer text-center transform transition-all duration-300 hover:scale-105">
                    <div className="mb-6"><img src={step.image} alt={`Step ${step.number}`} className="w-100 h-100 mx-auto object-contain" /></div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center py-12">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 drop-shadow-lg mb-6 uppercase tracking-tight">YOU DON'T HAVE ANY ARTWORKS FOR SALE YET. NOW'S THE TIME TO BREATHE NEW LIFE INTO YOUR COLLECTION!</h2>
                <button onClick={() => setShowForm(true)} className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-16 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg">Resell an artwork</button>
              </div>

              <div className="flex justify-center gap-8 mt-12 pt-6 border-t border-amber-200">
                <button className="text-slate-700 hover:text-slate-900 font-semibold transition-colors duration-300 flex items-center gap-2"><span>❓</span> FAQ</button>
                <button className="text-slate-700 hover:text-slate-900 font-semibold transition-colors duration-300 flex items-center gap-2"><span>📋</span> Terms of sale</button>
              </div>
            </div>
          </div>


        </div>
      )}
    </>
  );
}
