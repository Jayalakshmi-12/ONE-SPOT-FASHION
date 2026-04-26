import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VirtualDressingRoom from './VirtualDressingRoom';

function Attire() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleStartVirtualDressing = () => {
    setShowModal(true);
    setModalContent(<VirtualDressingRoom />);
  };

  const handleCloseModal = () => {
    window.location.reload()
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen">
      {/* Custom font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Announcement Bar */}
      <div className="bg-[rgba(44,62,80,0.85)] shadow-md text-white py-6 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center">
          <span className="animate-pulse mr-2">✨</span>
          <p className="font-medium tracking-wide text-sm md:text-base">
            VIRTUAL TRY-ON EXPERIENCE – DISCOVER YOUR PERFECT STYLE
          </p>
          <span className="animate-pulse ml-2">✨</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 blur-sm" 
             style={{ backgroundImage: 'url("src/images/background.jpg")' }}></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight">
                Redefine Your <span className="text-amber-800">Style</span> Experience
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Step into the future of fashion with our immersive virtual dressing room.
                Try on countless styles without changing clothes.
              </p>
              <button
                onClick={handleStartVirtualDressing}
                className="inline-block px-8 py-4 bg-gradient-to-r from-amber-700 to-yellow-800 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Start Virtual Experience
              </button>
            </div>
            
            {/* Right Content - Floating Card */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                  <img 
                    src="src/images/background.jpg" 
                    alt="Virtual Dressing Experience" 
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Experience Fashion Like Never Before</h3>
                <p className="text-gray-600 text-lg">
                  See how different styles complement your look instantly and make confident fashion choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Gender Selection Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-amber-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Select Your Category</h2>
            <div className="w-24 h-1 bg-amber-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred category to discover styles tailored specifically for you.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            {/* Female Category */}
            <div className="group relative cursor-pointer" onClick={() => navigate('/girl')}>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="src/images/girl.jpg"
                  alt="Female Fashion"
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-medium mb-2">Women's Fashion</h3>
                  <p className="mb-4 opacity-90">Explore styles curated for women</p>
                  <span className="inline-block px-4 py-2 border border-white rounded-full text-sm font-medium transform group-hover:bg-white group-hover:text-amber-800 transition-all duration-300">
                    Explore Collection
                  </span>
                </div>
              </div>
            </div>
            
            {/* Male Category */}
            <div className="group relative cursor-pointer" onClick={() => navigate('/boy')}>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="src/images/boy.jpg"
                  alt="Male Fashion"
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-medium mb-2">Men's Fashion</h3>
                  <p className="mb-4 opacity-90">Discover styles designed for men</p>
                  <span className="inline-block px-4 py-2 border border-white rounded-full text-sm font-medium transform group-hover:bg-white group-hover:text-amber-800 transition-all duration-300">
                    Explore Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 backdrop-blur-sm">
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl transform transition-all duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-gray-200 px-6 py-4">
              <h3 className="text-xl font-medium text-gray-900">Virtual Dressing Room</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {modalContent}
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button
                className="px-6 py-2 bg-gradient-to-r from-amber-700 to-yellow-800 text-white rounded-full shadow hover:shadow-md transition-all duration-300"
                onClick={handleCloseModal}
              >
                Close Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Attire;