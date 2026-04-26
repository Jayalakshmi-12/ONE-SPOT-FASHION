import { Triangle } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Brectangle() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [
    { img: 'src/components/retrieved_images/RBC1.jpg', label: 'Layered casual shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC2.jpg', label: 'Slim-fit T-shirt with jacket', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC3.jpg', label: 'Bomber jacket style', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC4.jpg', label: 'V-neck casual sweater', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC5.jpg', label: 'Printed button-down shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC6.jpg', label: 'Denim jacket with white tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC7.jpg', label: 'Layered hoodie & tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC8.jpg', label: 'Longline cardigan', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC9.jpg', label: 'Color-blocked sweatshirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC10.jpg', label: 'Crew neck striped tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC11.jpg', label: 'Vertical stripe tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC12.jpg', label: 'Henley T-shirt with layers', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC13.jpg', label: 'Rolled sleeve shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC14.jpg', label: 'Fitted T-shirt with vest', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC15.jpg', label: 'Cotton jacket layered look', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC16.jpg', label: 'Casual pullover sweater', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC17.jpg', label: 'Slim-fit Henley top', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC18.jpg', label: 'Patterned casual shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/RBC19.jpg', label: 'Fitted crew neck shirt', category: 'Casual' },
    
        
        
    { img: 'src/components/retrieved_images/RBP1.jpg', label: 'Structured grey blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP2.jpg', label: 'Tailored navy blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP3.jpg', label: 'Double-breasted suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP4.jpg', label: 'Subtle pinstripe suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP5.jpg', label: 'Tapered fit blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP6.jpg', label: 'Slim-fit office suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP7.jpg', label: 'Blazer with pocket square', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP8.jpg', label: 'Two-tone formal suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP9.jpg', label: 'Formal navy coat', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP10.jpg', label: 'Blazer over turtleneck', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP11.jpg', label: 'Gray plaid business suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP12.jpg', label: 'Patterned dress shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP13.jpg', label: 'Cropped black jacket', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP14.jpg', label: 'Business casual shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP15.jpg', label: 'Modern lapel suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP16.jpg', label: 'Fitted formal jacket', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP17.jpg', label: 'Office wear blazer set', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP18.jpg', label: 'Patterned grey jacket', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP19.jpg', label: 'Slim business coat', category: 'Professional' },
    { img: 'src/components/retrieved_images/RBP21.jpg', label: 'Straight-leg formal pants', category: 'Professional' },
    
    
    
    { img: 'src/components/retrieved_images/RBT1.jpg', label: 'long sleeved shirt and dhoti', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT2.jpg', label: 'white shirt and dhoti', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT3.jpg', label: 'Embroidered kurta set', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT4.jpg', label: 'Solid pathani suit', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT5.jpg', label: 'Sherwani kurtha', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT6.jpg', label: 'Asymmetric kurta style', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT7.jpg', label: 'Casual cotton kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT8.jpg', label: 'Printed Nehru vest', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT9.jpg', label: 'Classic ethnic wear', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT10.jpg', label: 'Jodhpuri suit', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT11.jpg', label: 'Mandarin collar kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT12.jpg', label: 'Kurtha and a dhoti', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT13.jpg', label: 'Chikankari kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT14.jpg', label: 'Angrakha kurta style', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT15.jpg', label: 'Pastel kurta with stole', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT16.jpg', label: 'Festive kurta look', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT17.jpg', label: 'Beige pathani suit', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT18.jpg', label: 'Silk kurta for events', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT19.jpg', label: 'Classic kurta pajama', category: 'Traditional' },
    { img: 'src/components/retrieved_images/RBT20.jpg', label: 'Minimalist sherwani', category: 'Traditional' },
    
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
export default Brectangle;