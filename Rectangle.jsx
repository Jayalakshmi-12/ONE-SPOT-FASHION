
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Rectangle() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [
    { img: 'src/components/retrieved_images/CR1.jpg', label: 'Peplum tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR2.jpg', label: 'V-neck blouses', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR3.jpg', label: 'Flowy shirts', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR4.jpg', label: 'A-line tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR5.jpg', label: 'Off-shoulder tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR6.jpg', label: 'Smocked blouses', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR7.jpg', label: 'Empire waist blouses', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR8.jpg', label: 'Draped tunics', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR9.jpg', label: 'Ruffle hem tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR10.jpg', label: 'Tiered tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR11.jpg', label: 'Loose-fit shirts', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR12.jpg', label: 'Cap-sleeve tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR13.jpg', label: 'Flutter sleeve tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR14.jpg', label: 'Printed blouses', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR15.jpg', label: 'Wrap-front tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR16.jpg', label: 'Flowy peasant tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR17.jpg', label: 'Kimono sleeve tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR18.jpg', label: 'Casual flare tops', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR19.jpg', label: 'Pleated blouses', category: 'Casual' },
      { img: 'src/components/retrieved_images/CR20.jpg', label: 'Rounded hem tops', category: 'Casual' },
    
      // Professional
      { img: 'src/components/retrieved_images/PR1.jpg', label: 'Blazer over blouse', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR2.jpg', label: 'Draped office top', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR3.jpg', label: 'Structured dress shirts', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR4.jpg', label: 'Wide-leg trousers', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR5.jpg', label: 'Waist-detailed blazers', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR6.jpg', label: 'Pleated formal skirts', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR7.jpg', label: 'Fitted pencil skirts', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR8.jpg', label: 'Peplum blazers', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR9.jpg', label: 'Belted suits', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR10.jpg', label: 'Tailored slacks', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR11.jpg', label: 'Boat neck tops', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR12.jpg', label: 'Flowy blouses', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR13.jpg', label: 'Tucked-in shirts', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR14.jpg', label: 'Pleated trousers', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR15.jpg', label: 'Formal wrap tops', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR16.jpg', label: 'Darted blazers', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR17.jpg', label: 'Double-breasted coats', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR18.jpg', label: 'Monochrome outfits', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR19.jpg', label: 'Cropped formal jackets', category: 'Professional' },
      { img: 'src/components/retrieved_images/PR20.jpg', label: 'Business sheath dresses', category: 'Professional' },
    
      // Traditional
      { img: 'src/components/retrieved_images/TR1.jpg', label: 'Empire waist dresses', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR2.jpg', label: 'Paneled kurtas', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR3.jpg', label: 'Satin Silk Saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR4.jpg', label: 'Angrakha-style tops', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR5.jpg', label: 'High-slit kurtas', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR6.jpg', label: 'A-line anarkalis', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR7.jpg', label: 'Floor-length kurtas', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR8.jpg', label: 'Churidar suits', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR9.jpg', label: 'Cape-style kurtas', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR10.jpg', label: 'Front slit suits', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR11.jpg', label: 'Printed straight kurtis', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR12.jpg', label: 'Kalidar kurtas', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR13.jpg', label: 'Cotton blend suits', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR14.jpg', label: 'Fit & flare kurtis', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR15.jpg', label: 'Kurta with belt', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR16.jpg', label: 'Half saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR17.jpg', label: 'Kurta-palazzo sets', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR18.jpg', label: 'Side-slit kurtas', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR19.jpg', label: 'Ruffle Georgette Saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TR20.jpg', label: 'Mirror-work kurtas', category: 'Traditional' },
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

    <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Clothing Tips for Rectangle Body Shape</h2>

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
export default Rectangle;