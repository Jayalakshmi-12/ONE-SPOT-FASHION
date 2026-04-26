
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Traingle() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [
    { img: 'src/components/retrieved_images/CP1.jpg', label: 'Peplum Top', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP2.jpg', label: 'V-Neck Blouse', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP3.jpg', label: 'Wrap Top', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP4.jpg', label: 'Cropped Jacket', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP5.jpg', label: 'A-Line Tunic', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP6.jpg', label: 'Puff Sleeve Blouse', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP7.jpg', label: 'Flared Hem Top', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP8.jpg', label: 'Off-Shoulder Top', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP9.jpg', label: 'Color Block Tee', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP10.jpg', label: 'Pleated Blouse', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP11.jpg', label: 'Sleeveless Shell', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP12.jpg', label: 'Boat Neck Tee', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP13.jpg', label: 'Kimono Sleeve Top', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP14.jpg', label: 'Tunic with Slits', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP15.jpg', label: 'Balloon Sleeve Top', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP16.jpg', label: 'Layered Hem Blouse', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP17.jpg', label: 'Frill Neck Top', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP18.jpg', label: 'Boxy Fit Tee', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP19.jpg', label: 'Sweetheart Neck Top', category: 'Casual' },
{ img: 'src/components/retrieved_images/CP20.jpg', label: 'Tie-Front Blouse', category: 'Casual' },


{ img: 'src/components/retrieved_images/PP1.jpg', label: 'Tailored Blazer', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP2.jpg', label: 'Structured Jacket', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP3.jpg', label: 'Formal Blouse', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP4.jpg', label: 'High-Waist Trousers', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP5.jpg', label: 'Double-Breasted Blazer', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP6.jpg', label: 'Notch Collar Jacket', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP7.jpg', label: 'Tapered Pants', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP8.jpg', label: 'Pencil Skirt', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP9.jpg', label: 'Silk Shirt', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP10.jpg', label: 'Cowl Neck Blouse', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP11.jpg', label: 'Sleeveless Blazer', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP12.jpg', label: 'Flowy Blouse', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP13.jpg', label: 'Button-Down Shirt', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP14.jpg', label: 'Wide-Leg Trousers', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP15.jpg', label: 'Slim Fit Blazer', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP16.jpg', label: 'Pleated Trousers', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP17.jpg', label: 'Belted Blazer', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP18.jpg', label: 'Chiffon Shirt', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP19.jpg', label: 'Tucked Blouse', category: 'Professional' },
{ img: 'src/components/retrieved_images/PP20.jpg', label: 'Halter Neck Top', category: 'Professional' },


{ img: 'src/components/retrieved_images/TP1.jpg', label: 'Empire Waist Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP2.jpg', label: 'A-Line Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP3.jpg', label: 'Wrap Dress', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP4.jpg', label: 'Chiffon saree', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP5.jpg', label: 'Puff sleeved blouses', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP6.jpg', label: 'Organza saree', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP7.jpg', label: 'Front Slit Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP8.jpg', label: 'Boat Neck Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP9.jpg', label: 'Yoke Style Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP10.jpg', label: 'Side-Slit Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP11.jpg', label: 'Round Neck Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP12.jpg', label: 'Flared Hem Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP13.jpg', label: 'Straight Cut Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP14.jpg', label: 'Mandarin Collar Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP15.jpg', label: 'Ruhani Sharma saree', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP16.jpg', label: 'Chanderi saree', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP17.jpg', label: 'Panelled Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP18.jpg', label: 'Keyhole Neck Kurti', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP19.jpg', label: 'Sequined georgette saree', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TP20.jpg', label: 'Embroidered velvet saree', category: 'Traditional' },

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

    <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Clothing Tips for Triangle Body Shape</h2>

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
export default Traingle;