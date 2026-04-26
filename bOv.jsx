
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Boval() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [
    { img: 'src/components/retrieved_images/OBC1.jpg', label: 'Polo shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC2.jpg', label: 'Henley shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC3.jpg', label: 'Layered jacket', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC4.jpg', label: 'V-neck tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC5.jpg', label: 'Vertical stripe tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC6.jpg', label: 'Open casual shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC7.jpg', label: 'Dark wash jeans', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC8.jpg', label: 'Casual blazer', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC9.jpg', label: 'Slim chinos', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC10.jpg', label: 'Henley shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC11.jpg', label: 'Bomber jacket', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC12.jpg', label: 'Layered hoodie', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC13.jpg', label: 'Minimal print tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC14.jpg', label: 'Cardigan', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC15.jpg', label: 'Casual over-shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC16.jpg', label: 'Dark joggers', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC17.jpg', label: 'Plain crew neck tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC18.jpg', label: 'Layered flannel shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC19.jpg', label: 'Fitted sweater', category: 'Casual' },
    { img: 'src/components/retrieved_images/OBC20.jpg', label: 'Zip-up hoodie', category: 'Casual' },
  
    
    { img: 'src/components/retrieved_images/OBP1.jpg', label: 'Structured blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP2.jpg', label: 'Slim-fit shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP3.jpg', label: 'Vertical stripe shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP4.jpg', label: 'Dark dress pants', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP5.jpg', label: 'Tailored blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP6.jpg', label: 'Single-breasted suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP7.jpg', label: 'Buttoned vest', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP8.jpg', label: 'Fitted formal shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP9.jpg', label: 'Tapered trousers', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP10.jpg', label: 'Navy blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP11.jpg', label: 'Oxford shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP12.jpg', label: 'Solid formal shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP13.jpg', label: 'Pinstripe blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP14.jpg', label: 'Tucked-in dress shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP15.jpg', label: 'Grey trousers', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP16.jpg', label: 'Belted trousers', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP17.jpg', label: 'Tailored overcoat', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP18.jpg', label: 'Slim-fit trousers', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP19.jpg', label: 'Light formal shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP20.jpg', label: 'Formal blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP21.jpg', label: 'Flat-front pants', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP22.jpg', label: 'Stretch trousers', category: 'Professional' },
    { img: 'src/components/retrieved_images/OBP23.jpg', label: 'Dress pants', category: 'Professional' },
  
    
    { img: 'src/components/retrieved_images/OBT1.jpg', label: 'Long kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT2.jpg', label: 'Straight kurta set', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT3.jpg', label: 'Angarkha kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT4.jpg', label: 'Mandarin collar kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT5.jpg', label: 'Nehru jacket', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT6.jpg', label: 'A-line kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT8.jpg', label: 'Churidar kurta set', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT9.jpg', label: 'Asymmetrical kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT10.jpg', label: 'High-low kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT11.jpg', label: 'Side-slit kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT12.jpg', label: 'Jacquard kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT13.jpg', label: 'Barena Delfo Gioli Trousers suit', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT14.jpg', label: 'wide leg trousers', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT15.jpg', label: 'Linen suits', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT16.jpg', label: 'Double-breasted suit', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT17.jpg', label: 'light-coloured linen suit', category: 'Traditional' },
    { img: 'src/components/retrieved_images/OBT18.jpg', label: 'olive green pure linen suit', category: 'Traditional' },
    
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

    <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Clothing Tips for Oval Body Shape</h2>

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
export default Boval;
