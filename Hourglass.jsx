import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hourglass() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [
  { img: 'src/components/retrieved_images/CH1.jpg', label: 'Bodycon Dresses', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH2.jpg', label: 'Azazie calvi dress', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH3.jpg', label: 'Bodycon Dresses', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH4.jpg', label: 'Wrap Dresses', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH5.jpg', label: 'A-Line Skirts', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH6.jpg', label: 'A-Line Dresses', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH7.jpg', label: 'Peplum Dresses', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH8.jpg', label: 'Fit-and-Flare Dresses', category: 'Casual' },  // Changed from Tunic tops
{ img: 'src/components/retrieved_images/CH9.jpg', label: 'Curvy Fit Jeans', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH10.jpg', label: 'High-Waisted Jeans', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH11.jpg', label: 'Bootcut Jeans', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH12.jpg', label: 'Flared Jeans', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH13.jpg', label: 'Bootcut Jeans', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH14.jpg', label: 'Pencil Skirts', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH15.jpg', label: 'Peplum Tops', category: 'Casual' },  // Changed from Tunic tops
{ img: 'src/components/retrieved_images/CH16.jpg', label: 'Straight Leg Jeans', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH17.jpg', label: 'Tapered Joggers', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH18.jpg', label: 'Trumpet Skirts', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH19.jpg', label: 'Wrap dresses', category: 'Casual' },
{ img: 'src/components/retrieved_images/CH20.jpg', label: 'Curvy Fit Jeans', category: 'Casual' },

// Professional
{ img: 'src/components/retrieved_images/PH1.jpg', label: 'V neck Aline skirt', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH2.jpg', label: 'Tailored Blazers', category: 'Professional' }, // Changed from Structured jackets
{ img: 'src/components/retrieved_images/PH3.jpg', label: 'Fitted Button-Up Shirts', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH4.jpg', label: 'V-neck Blouses', category: 'Professional' }, // Changed from Vest tops
{ img: 'src/components/retrieved_images/PH5.jpg', label: 'Sierra Sweetheart Maxi dress', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH6.jpg', label: 'Denim maxi dress', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH7.jpg', label: 'High-Waisted Trousers', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH8.jpg', label: 'Sheath Dresses', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH9.jpg', label: 'Polo T-shirts', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH10.jpg', label: 'Straight Pants', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH11.jpg', label: 'Tailored Blazers', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH12.jpg', label: 'Silk Blouses', category: 'Professional' }, // Changed from Vest tops
{ img: 'src/components/retrieved_images/PH13.jpg', label: 'Wide-Leg Pants', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH14.jpg', label: 'Trench Coats', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH15.jpg', label: 'Tailored Blazers', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH16.jpg', label: 'Longline Blazers', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH17.jpg', label: 'Button-Up Shirts', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH18.jpg', label: 'Tank Tops', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH19.jpg', label: 'Fitted T-Shirts', category: 'Professional' },
{ img: 'src/components/retrieved_images/PH20.jpg', label: 'High-Waisted Trousers', category: 'Professional' },

// Traditional
{ img: 'src/components/retrieved_images/TH1.jpg', label: 'Ghararas', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH2.jpg', label: 'Maxi Full-Length Dress', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH3.jpg', label: 'Kurthi Set', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH4.jpg', label: 'Saree', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH5.jpg', label: 'Ghararas', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH6.jpg', label: 'Mullet dress', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH7.jpg', label: 'Anarkali', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH8.jpg', label: 'Sharara', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH9.jpg', label: 'Banarasi Saree', category: 'Traditional' },  
{ img: 'src/components/retrieved_images/TH10.jpg', label: 'ALine gown with dupatta', category: 'Traditional' }, 
{ img: 'src/components/retrieved_images/TH11.jpg', label: 'Indo western gharara set', category: 'Traditional' }, 
{ img: 'src/components/retrieved_images/TH12.jpg', label: 'Georgette saree', category: 'Traditional' }, 
{ img: 'src/components/retrieved_images/TH13.jpg', label: 'Bandhani Saree', category: 'Traditional' }, 
{ img: 'src/components/retrieved_images/TH14.jpg', label: 'Patola Saree', category: 'Traditional' }, 
{ img: 'src/components/retrieved_images/TH15.jpg', label: 'Lehenga choli', category: 'Traditional' }, 
{ img: 'src/components/retrieved_images/TH16.jpg', label: 'Mysore Silk Saree', category: 'Traditional' },  
{ img: 'src/components/retrieved_images/TH17.jpg', label: 'Madhubani Saree', category: 'Traditional' },  
{ img: 'src/components/retrieved_images/TH18.jpg', label: 'Tant Saree', category: 'Traditional' },  
{ img: 'src/components/retrieved_images/TH19.jpg', label: 'Bengal Cotton Saree', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TH20.jpg', label: 'Uppada Saree', category: 'Traditional' }
  ];

  const filteredTips = selectedCategory === 'All'
  ? tips
  : tips.filter((tip) => tip.category === selectedCategory);

const handleImageClick = (index) => {
  setModalIndex(index);
};

const closeModal = () => {
  setModalIndex(null);
};

const showPrev = () => {
  setModalIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredTips.length - 1));
};

const showNext = () => {
  setModalIndex((prevIndex) => (prevIndex < filteredTips.length - 1 ? prevIndex + 1 : 0));
};

return (
  <div className="p-4 bg-amber-50">
    <div className="flex items-center space-x-4 mb-6">
      <button onClick={() => navigate(-1)} className="text-3xl font-bold text-amber-600 hover:text-amber-800">
        ←
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full border text-lg font-medium ${
            selectedCategory === category
              ? 'bg-amber-500 text-white'
              : 'bg-white text-amber-800 hover:bg-amber-100 border-amber-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Clothing Tips for Hourglass Body Shape</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {filteredTips.map((tip, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-3 cursor-pointer"
          onClick={() => handleImageClick(index)}
        >
          <div className="bg-white p-3 rounded-xl shadow-md border-2 border-amber-200 hover:border-amber-400 transition-all">
            <img src={tip.img} alt={tip.label} className="w-56 h-56 object-cover rounded-lg" />
          </div>
          <span className="text-lg font-medium text-amber-900">{tip.label}</span>
        </div>
      ))}
    </div>

    {/* Modal */}
    {modalIndex !== null && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={closeModal}>
        <div className="relative max-w-full max-h-full bg-amber-50 p-6 rounded-xl" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">{filteredTips[modalIndex].label}</h3>
            <img
              src={filteredTips[modalIndex].img}
              alt={filteredTips[modalIndex].label}
              className="w-[600px] h-[750px] rounded-lg border-4 border-amber-300"
            />
          </div>

          {/* Navigation buttons */}
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
          {/* Close button */}
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
export default Hourglass;