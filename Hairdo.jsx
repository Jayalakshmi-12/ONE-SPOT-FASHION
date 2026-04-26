// Hairdo.jsx
import React, { useState } from 'react';
import FaceShapeDetector from './FaceShapeDetector'; // ✅ Make sure this path is correct
import femaleImg from '../images/female1.jpg';
import maleImg from '../images/male1.jpg';

const Hairdo = () => {
  const [showModal, setShowModal] = useState(false);
  const [stopCamera, setStopCamera] = useState(null);
  const [lastShape, setLastShape] = useState('');

  const openModal = () => setShowModal(true);
 const closeModal = () => {
  if (stopCamera) stopCamera();
  setShowModal(false);
  setLastShape('');
  window.location.reload(); // 🔁 Refresh the page
};


  const navigateToGender = (gender) => {
    window.location.href = `/${gender}`;
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 min-h-screen flex flex-col items-center pb-20 px-4">
      {/* Header */}
      <header className="text-center mt-16">
        <div className="flex items-center justify-center mb-2">
          <div className="w-10 h-1 bg-amber-500 rounded mr-3"></div>
          <h1 className="text-4xl font-extrabold text-amber-900 tracking-wide relative">
            <span className="text-xs text-amber-600 absolute -top-3 left-0">✦</span>
            HAIRDO ADVISOR
          </h1>
          <div className="w-10 h-1 bg-amber-500 rounded ml-3"></div>
        </div>
        <p className="text-sm text-amber-700 tracking-widest font-semibold">PERSONAL STYLING COMPANION</p>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-5xl bg-white mt-16 p-10 rounded-xl shadow-xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300" />
        <h2 className="text-xl text-amber-600 italic mb-1 font-light">Introducing</h2>
        <h3 className="text-4xl font-extrabold text-amber-900 tracking-wide mb-6">FACE SHAPE DETECTION</h3>
        <p className="text-lg text-amber-700 max-w-lg mx-auto mb-8">
          For personalized haircut recommendations tailored to your unique face shape.
        </p>
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 px-8 rounded-lg text-lg tracking-wider uppercase font-semibold transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          Start Your Analysis
        </button>
      </section>

      {/* Face Shape Result */}
      {lastShape && (
        <div className="mt-10 bg-white border-l-4 border-amber-500 px-6 py-4 rounded-lg shadow-md text-center max-w-md w-full">
          <p className="text-xl text-amber-800">
            Your Detected Face Shape: <span className="font-bold text-amber-900">{lastShape}</span>
          </p>
        </div>
      )}

      {/* Gender Selection */}
      <section className="w-full max-w-5xl mt-20">
        <div className="bg-white p-12 rounded-xl shadow-xl text-center">
          <h4 className="text-2xl font-bold text-amber-900 mb-10 relative inline-block">
            SELECT YOUR GENDER
            <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 rounded" />
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            {[{ label: 'Female', img: femaleImg }, { label: 'Male', img: maleImg }].map(({ label, img }) => (
              <div key={label} onClick={() => navigateToGender(label)} className="cursor-pointer">
                <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg mx-auto transform transition-transform duration-300 will-change-transform hover:scale-105 group">
                  <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-transparent opacity-40 pointer-events-none" />
                  <div className="absolute bottom-0 w-full bg-white bg-opacity-90 py-4">
                    <p className="text-center font-bold text-xl text-amber-800">{label.toUpperCase()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full max-w-5xl bg-white mt-20 p-12 text-center rounded-xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full -mr-16 -mt-16 opacity-50" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200 rounded-full -ml-12 -mb-12 opacity-40" />
        <h3 className="text-3xl font-bold text-amber-900 mb-6 relative inline-block">
          Haircut complements Face Shape
          <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 rounded" />
        </h3>
        <p className="text-lg text-amber-700 max-w-3xl mx-auto leading-relaxed relative z-10">
          The right haircut enhances your facial features and bone structure. Understanding your face shape helps choose a haircut
          that balances proportions and brings harmony to your look.
        </p>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center backdrop-blur"
          onClick={closeModal}
        >
          <div
            className="bg-white max-w-4xl w-full mx-6 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-amber-200 px-8 py-5 bg-gradient-to-r from-amber-50 to-white">
              <h4 className="text-2xl font-bold text-amber-800">FACE SHAPE ANALYSIS</h4>
              <button
                onClick={closeModal}
                className="text-amber-800 hover:text-amber-600 bg-amber-100 hover:bg-amber-200 p-2 rounded-full transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <FaceShapeDetector
                setLastShape={setLastShape}
                setStopCamera={setStopCamera}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hairdo;
