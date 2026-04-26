import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BodyShapeGuide = ({goBack}) => {
  
  const bodyShapes = [
    {
      title: 'Rectangle',
      image: 'src/images/rectangle.jpg',
      description:
        'Shoulders, waist and hips are about the same width. Emphasise the waist to break up the rectangle.',
    },
    {
      title: 'Pear',
      image: 'src/images/traingle.jpg',
      description:
        'Hips are wider than the bust and the waist is defined. Emphasise the waist and add volume to the upper body.',
    },
    {
      title: 'Inverted Triangle',
      image: 'src/images/invertedtriangle.jpg',
      description:
        'The bust is wider than the hips. Emphasise the waist and add volume to the lower body.',
    },
    {
      title: 'Hourglass',
      image: 'src/images/hourglass.jpg',
      description:
        'Bust and hips are of similar width with a narrow waist. Emphasise the waist and keep the upper and lower body balanced.',
    },
    {
      title: 'Apple',
      image: 'src/images/apple.jpg',
      description:
        'Larger bust with a fuller mid-section and narrow hips. Emphasise the bust and shoulders and create a more defined waist.',
    },
  ];

 
  
  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-amber-50">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="absolute top-1 left-4 p-4 text-2xl text-amber-900 hover:text-amber-700 transition-colors z-50"
      >
        ←
      </button>

      <h1 className="text-center text-4xl font-bold mb-8 text-amber-900">The 5 Basic Body Shapes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {bodyShapes.map((shape) => (
          <div key={shape.title} className="flex flex-col items-center text-center bg-amber-100 p-6 rounded-lg shadow-md border border-amber-200">
            <img
              src={shape.image}
              alt={shape.title}
              className="mx-auto mb-4 w-48 h-48 object-contain rounded-md border-2 border-amber-300"
            />
            <h2 className="text-2xl font-semibold mb-2 text-amber-800">{shape.title}</h2>
            <p className="text-base text-amber-900">{shape.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Attire = () => {
  const [showBodyShapeGuide, setShowBodyShapeGuide] = useState(false);
  const navigate = useNavigate();

  const attireOptions = [
    { title: 'Apple', image: 'src/images/apple.jpg', path: '/apple' },
    { title: 'Rectangle', image: 'src/images/rectangle.jpg', path: '/rectangle' },
    { title: 'Triangle', image: 'src/images/traingle.jpg', path: '/traingle' },
    { title: 'Inverted Triangle', image: 'src/images/invertedtriangle.jpg', path: '/Invertedtraingle' },
    { title: 'Hourglass', image: 'src/images/hourglass.jpg', path: '/hourglass' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };
  

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-8">
      {/* Back Button only on Attire list */}
      {!showBodyShapeGuide && (
        <button
          onClick={() => navigate(-1)}
          className="absolute top-1 left-4 p-4 text-2xl text-amber-900 hover:text-amber-700 transition-colors z-50"
        >
          ←
        </button>
      )}

      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8 text-amber-900 border-b-2 border-amber-300 pb-3">
          Attire Recommendations
        </h1>

        {!showBodyShapeGuide ? (
          <>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              {attireOptions.map((option) => (
                <button
                  key={option.title}
                  onClick={() => handleNavigation(option.path)}
                  className="flex flex-col items-center focus:outline-none transform hover:scale-105 transition duration-300"
                >
                  <div className="bg-amber-200 p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-48 h-48 object-cover rounded-md border-2 border-amber-300"
                    />
                    <div className="text-center mt-3 text-lg font-medium text-amber-900">{option.title}</div>
                  </div>
                </button>
              ))}
            </div>


            <div className="mt-10 text-center">
              <button
                onClick={() => setShowBodyShapeGuide(true)}
                className="px-6 py-2 bg-amber-700 text-amber-50 rounded-full hover:bg-amber-800 transition-colors shadow-md"
              >
                Find Your Body Shape
              </button>
            </div>
          </>
        ) : (
          <BodyShapeGuide goBack={() => setShowBodyShapeGuide(false)} />
        )}

        <footer className="mt-16 pt-4 border-t border-amber-300 text-center text-amber-700 text-sm">
          <p>Find your perfect style based on your unique body shape</p>
        </footer>
      </div>
    </div>
  );
};

export default Attire;