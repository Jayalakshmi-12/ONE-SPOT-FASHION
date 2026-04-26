import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Frectangle() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hairstyles = [
        {
      name: "layered medium length",
      image: "/src/components/retrieved_images/ReF1.jpg",
    },
    {
      name: "butterfly haircut",
      image: "/src/components/retrieved_images/ReF2.jpg",
    },
    {
      name: "layered medium length",
      image: "/src/components/retrieved_images/ReF3.jpg",
    },
    {
      name: "U cut with long layers",
      image: "/src/components/retrieved_images/ReF4.jpg",
    },
    {
      name: "Side-Swept layered bob",
      image: "/src/components/retrieved_images/ReF5.jpg",
    },
    {
      name: "layered bob with bangs",
      image: "/src/components/retrieved_images/Re6.jpg",
    },

  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : hairstyles.length - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex < hairstyles.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Navigation Bar */}
      <div className="bg-amber-100 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-amber-200 hover:bg-amber-300 rounded-full p-2 shadow-md transition-colors flex items-center"
            aria-label="Go back"
          >
            <svg
              className="w-5 h-5 text-amber-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="ml-1 text-amber-800 font-medium">Back</span>
          </button>
          <div className="flex-grow"></div>
          <span className="text-amber-900 font-medium">Haircut Finder</span>
        </div>
      </div>

      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-amber-900">Recommended Haircuts for Rectangle Face</h1>
        <p className="text-amber-700 mb-8">Click on a haircut to see it in detail</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {hairstyles.map((style, index) => (
            <div
              key={index}
              className="cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-amber-200 hover:border-amber-400 transition-colors">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full object-contain h-64 rounded-lg mx-auto"
                />
                <h2 className="text-xl font-semibold mt-4 text-amber-800">{style.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-full max-h-full bg-amber-50 p-6 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                {hairstyles[currentIndex].name}
              </h3>
              <img
                src={hairstyles[currentIndex].image}
                alt={hairstyles[currentIndex].name}
                className="w-[600px] h-[750px] rounded-lg border-4 border-amber-300 object-contain"
              />
            </div>

            <button
              onClick={showPrev}
              className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-amber-500 text-white px-4 py-3 rounded-full text-2xl font-bold hover:bg-amber-600"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-amber-500 text-white px-4 py-3 rounded-full text-2xl font-bold hover:bg-amber-600"
            >
              ›
            </button>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-full text-base font-medium"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Frectangle;
