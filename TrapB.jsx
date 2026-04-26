
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TrapB() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [
    { img: 'src/components/retrieved_images/TrBC1.jpg', label: 'V-neck t-shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC2.jpg', label: 'Slim-fit shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC3.jpg', label: 'Casual blazers', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC4.jpg', label: 'Straight-leg trousers', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC5.jpg', label: 'Slim-fit jeans', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC6.jpg', label: 'Polo shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC7.jpg', label: 'Button-down shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC8.jpg', label: 'Tailored jackets', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC9.jpg', label: 'Bomber jackets', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC10.jpg', label: 'Denim jackets', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC11.jpg', label: 'Crewneck sweaters', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC12.jpg', label: 'Chino pants', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC13.jpg', label: 'Slim-fit jeans', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC14.jpg', label: 'Straight-leg trousers', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC15.jpg', label: 'Casual blazers', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC16.jpg', label: 'Polo shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC17.jpg', label: 'Button-down shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC18.jpg', label: 'Tailored jackets', category: 'Casual' },
    { img: 'src/components/retrieved_images/TrBC19.jpg', label: 'Bomber jackets', category: 'Casual' },
    
    // Professional
    { img: 'src/components/retrieved_images/TrBP1.jpg', label: 'V-neck t-shirts', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP2.jpg', label: 'Slim-fit shirts', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP3.jpg', label: 'Casual blazers', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP4.jpg', label: 'Straight-leg trousers', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP5.jpg', label: 'Slim-fit jeans', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP6.jpg', label: 'Button-down shirts', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP7.jpg', label: 'Tailored jackets', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP8.jpg', label: 'Bomber jackets', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP9.jpg', label: 'Denim jackets', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP10.jpg', label: 'Crewneck sweaters', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP11.jpg', label: 'Chino pants', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP12.jpg', label: 'Polo shirts', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP13.jpg', label: 'Button-down shirts', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP14.jpg', label: 'Tailored jackets', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP15.jpg', label: 'Slim-fit jeans', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP16.jpg', label: 'Chino pants', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP17.jpg', label: 'Casual blazers', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP18.jpg', label: 'Bomber jackets', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP19.jpg', label: 'Polo shirts', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP20.jpg', label: 'Denim jackets', category: 'Professional' },
    { img: 'src/components/retrieved_images/TrBP21.jpg', label: 'Crewneck sweaters', category: 'Professional' },

    // Traditional
    { img: 'src/components/retrieved_images/TrBT1.jpg', label: 'Tailored Blazers', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT2.jpg', label: 'kurtha paijama', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT3.jpg', label: ' Kurta with Nehru Jacket', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT4.jpg', label: 'Paijama set', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT5.jpg', label: 'Button-down kutha', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT6.jpg', label: 'Slim-fit Trousers', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT7.jpg', label: 'Formal Jackets', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT8.jpg', label: 'Crewneck kurthas', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT9.jpg', label: 'Dress Shirts', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT10.jpg', label: 'Slim-fit Jeans', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT11.jpg', label: 'Tuxedo Blazers', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT12.jpg', label: 'Bowtie Shirts', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT13.jpg', label: 'Tailored Suits', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT14.jpg', label: 'Floral kurtha', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT15.jpg', label: 'Straight-leg kurtha set', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT16.jpg', label: 'simple kurtha set', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT17.jpg', label: 'Mandarin Collar kurtha', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT18.jpg', label: 'Necktie kurtha', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT19.jpg', label: 'Dhothi set', category: 'Traditional' },
{ img: 'src/components/retrieved_images/TrBT20.jpg', label: 'Traditional Suits', category: 'Traditional' },
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

  <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Clothing Tips for Trapezoid Body Shape</h2>

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
export default TrapB;