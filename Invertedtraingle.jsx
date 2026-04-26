import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Invertedtraingle() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [
    { img: 'src/components/retrieved_images/CIn1.jpg', label: 'Peplum Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn2.jpg', label: 'V-neck Blouse', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn3.jpg', label: 'Wrap Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn4.jpg', label: 'A-line Tunic', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn5.jpg', label: 'Kurthi suit', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn6.jpg', label: 'High-low Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn7.jpg', label: 'Button-up Shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn8.jpg', label: 'Sleeveless Blouse', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn9.jpg', label: 'Flowy Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn10.jpg', label: 'Belted Shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn11.jpg', label: 'Asymmetrical Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn12.jpg', label: 'Ruffle Sleeve Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn13.jpg', label: 'Draped Blouse', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn14.jpg', label: 'Knotted Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn15.jpg', label: 'Cap Sleeve Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn16.jpg', label: 'Kimono Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn17.jpg', label: 'Tiered Blouse', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn18.jpg', label: 'Tunic Dress', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn19.jpg', label: 'Peasant Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CIn20.jpg', label: 'Soft Knit Top', category: 'Casual' },
    
      // Professional
      { img: 'src/components/retrieved_images/PIn1.jpg', label: 'Tailored Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn2.jpg', label: 'Structured Coat', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn3.jpg', label: 'Aliya cut short kurthi', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn4.jpg', label: 'Cinched Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn5.jpg', label: 'Ruffle hem midi dress', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn6.jpg', label: 'Peplum Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn7.jpg', label: 'Belted Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn8.jpg', label: 'Double-breasted Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn9.jpg', label: 'Slim Fit Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn10.jpg', label: 'Minimalist Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn11.jpg', label: 'Open Front Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn12.jpg', label: 'Silk Blouse', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn13.jpg', label: 'Notch Lapel Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn14.jpg', label: 'Longline Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn15.jpg', label: 'Cropped Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn16.jpg', label: 'Work Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn17.jpg', label: 'Fitted Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn18.jpg', label: 'Textured Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn19.jpg', label: 'Formal Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PIn20.jpg', label: 'Pleated Blazer', category: 'Professional' },
    
      // Traditional
      { img: 'src/components/retrieved_images/TIn1.jpg', label: 'Anarkali Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn2.jpg', label: 'Angrakha Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn3.jpg', label: 'Wrap Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn4.jpg', label: 'Flared Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn5.jpg', label: 'Front-slit Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn6.jpg', label: 'A-line Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn7.jpg', label: 'Printed Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn8.jpg', label: 'Straight Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn9.jpg', label: 'Ethnic Frock', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn10.jpg', label: 'High-low Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn11.jpg', label: 'Kaftan Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn12.jpg', label: 'Chikankari Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn13.jpg', label: 'Front-open Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn14.jpg', label: 'Embroidered Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn15.jpg', label: 'Side-slit Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn16.jpg', label: 'Gharchola saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn17.jpg', label: 'satin saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn18.jpg', label: 'Organza saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn19.jpg', label: 'Tissue saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TIn20.jpg', label: 'Ruffle saree', category: 'Traditional' },
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
export default Invertedtraingle;