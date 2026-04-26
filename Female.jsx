import React from 'react';
import { useNavigate } from 'react-router-dom';

function Female() {
  const navigate = useNavigate();
  
  const shapes = [
    {
      key: 'round',
      label: 'Round',
      image: '/src/components/retrieved_images/ground.jpg',
    },
    {
      key: 'rectangle',
      label: 'Rectangle',
      image: '/src/components/retrieved_images/grectangle.jpg',
    },
    {
      key: 'heart',
      label: 'Heart',
      image: '/src/components/retrieved_images/gheart.jpg',
    },
    {
      key: 'diamond',
      label: 'Diamond',
      image: '/src/components/retrieved_images/gdiamond.jpg',
    },
    {
      key: 'oval',
      label: 'Oval',
      image: '/src/components/retrieved_images/goval.jpg',
    },
    {
      key: 'square',
      label: 'Square',
      image: '/src/components/retrieved_images/gsquare.jpg',
    },
  ];
  
  return (
    <div className="p-6 text-center relative bg-amber-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-amber-200 hover:bg-amber-300 rounded-full p-2 shadow-md transition-colors"
        aria-label="Go back"
      >
        <svg
          className="w-6 h-6 text-amber-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <h1 className="text-3xl font-bold mb-6 text-amber-900 pt-8">Choose Your Face Shape</h1>
      <p className="text-amber-700 mb-8">Select the shape that best matches your face</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center max-w-6xl mx-auto">
        {shapes.map((shape) => (
          <div
            key={shape.key}
            onClick={() => navigate(`/female/${shape.key}`)}
            className="cursor-pointer transform transition-transform hover:scale-105"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-amber-200 hover:border-amber-400 transition-colors">
              <img
                src={shape.image}
                alt={shape.label}
                className="w-full object-contain h-64 rounded-lg mx-auto"
              />
              <p className="mt-3 font-medium text-amber-800 text-lg">{shape.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Female;