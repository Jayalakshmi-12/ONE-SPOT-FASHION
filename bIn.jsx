
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Binverted() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [
    { img: 'src/components/retrieved_images/InBC1.jpg', label: 'Slim-fit Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC2.jpg', label: 'V-neck T-shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC3.jpg', label: 'Casual Shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC4.jpg', label: 'Henley Shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC5.jpg', label: 'Raglan Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC6.jpg', label: 'Casual Polo', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC7.jpg', label: 'V-neck Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC8.jpg', label: 'Short Sleeve Shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC9.jpg', label: 'Muscle Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC10.jpg', label: 'Casual Button-down', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC11.jpg', label: 'Light Hoodie', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC12.jpg', label: 'Graphic Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC13.jpg', label: 'V-neck Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC14.jpg', label: 'Slim Fit Shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC15.jpg', label: 'Bomber Jacket', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC16.jpg', label: 'Cotton Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC17.jpg', label: 'Crewneck Sweatshirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/InBC18.jpg', label: 'Fitted Henley', category: 'Casual' },
    
      // Professional
      { img: 'src/components/retrieved_images/InBP1.jpg', label: 'Tailored Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP2.jpg', label: 'Slim Fit Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP3.jpg', label: 'Formal Shirt', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP4.jpg', label: 'Oxford Shirt', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP5.jpg', label: 'Dress Shirt', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP6.jpg', label: 'Pinstripe Suit', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP7.jpg', label: 'Blazer & Trousers', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP8.jpg', label: 'White Formal Shirt', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP9.jpg', label: 'Single-breasted Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP10.jpg', label: 'Two-piece Suit', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP11.jpg', label: 'Tailored Shirt', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP12.jpg', label: 'Mandarin Collar Shirt', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP13.jpg', label: 'Formal Vest', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP14.jpg', label: 'Suit with Tie', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP15.jpg', label: 'Slim Cut Suit', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP16.jpg', label: 'Navy Blue Suit', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP17.jpg', label: 'Grey Formal Suit', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP18.jpg', label: 'Notch Lapel Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP19.jpg', label: 'Office Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP20.jpg', label: 'Classic Suit', category: 'Professional' },
      { img: 'src/components/retrieved_images/InBP21.jpg', label: 'Straight-leg Trousers', category: 'Professional' },
    
      // Traditional
      { img: 'src/components/retrieved_images/InBT1.jpg', label: 'Short Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT2.jpg', label: 'Sherwani', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT3.jpg', label: 'Angrakha Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT4.jpg', label: 'Pathani Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT5.jpg', label: 'Asymmetric Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT6.jpg', label: 'Nehru Jacket', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT7.jpg', label: 'Long Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT8.jpg', label: 'Ethnic Jacket', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT9.jpg', label: 'Churidaar Set', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT10.jpg', label: 'Kurta Pyjama', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT11.jpg', label: 'Embroidered Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT12.jpg', label: 'Silk Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT13.jpg', label: 'Printed Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT14.jpg', label: 'Sherwani with Stole', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT15.jpg', label: 'Anarkali Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT16.jpg', label: 'Ethnic Blazer', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT17.jpg', label: 'Plain Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT18.jpg', label: 'Festive Sherwani', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT19.jpg', label: 'Mandarin Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/InBT20.jpg', label: 'Jodhpuri Suit', category: 'Traditional' },
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

    <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Clothing Tips for Inverted Triangle Body Shape</h2>

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
export default Binverted;