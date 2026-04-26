import { Triangle } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Btriangle() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];


  const tips = [{ img: 'src/components/retrieved_images/TBC1.jpg', label: 'Polo shirt with shoulder detail', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC2.jpg', label: 'Crew neck T-shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC3.jpg', label: 'Layered casual jacket', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC4.jpg', label: 'Vertical-striped shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC5.jpg', label: 'Denim jacket', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC6.jpg', label: 'Chino pants with contrast top', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC7.jpg', label: 'Raglan sleeve tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC8.jpg', label: 'V-neck shirts', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC9.jpg', label: 'Fitted zip-up hoodie', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC10.jpg', label: 'Dark-wash jeans and solid tee', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC11.jpg', label: 'Casual shirt jacket', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC12.jpg', label: 'Tapered joggers with structured top', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC13.jpg', label: 'Bomber jacket', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC14.jpg', label: 'Layered Henley shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC15.jpg', label: 'Textured crew neck', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC16.jpg', label: 'Relaxed flannel shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC17.jpg', label: 'Slim-fit casual trousers', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC18.jpg', label: 'Fitted tee with open shirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC19.jpg', label: 'Minimalist sweatshirt', category: 'Casual' },
    { img: 'src/components/retrieved_images/TBC20.jpg', label: 'Short-sleeve layered top', category: 'Casual' },

    // Professional
    { img: 'src/components/retrieved_images/TBP1.jpg', label: 'Structured blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP2.jpg', label: 'Slim-fit dress shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP3.jpg', label: 'Tailored suit jacket', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP4.jpg', label: 'Formal checkered shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP5.jpg', label: 'Layered vest and shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP6.jpg', label: 'Two-tone business blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP7.jpg', label: 'Single-breasted formal coat', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP8.jpg', label: 'Pinstripe suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP9.jpg', label: 'Formal Oxford shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP10.jpg', label: 'Light business blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP11.jpg', label: 'Blazer and crew neck combo', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP12.jpg', label: 'Classic tie and shirt', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP13.jpg', label: 'Tapered navy blazer', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP14.jpg', label: 'Grey fitted suit', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP15.jpg', label: 'Check suit jacket', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP16.jpg', label: 'Blazer with dress pants', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP17.jpg', label: 'Black formal jacket', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP18.jpg', label: 'Contrasting vest set', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP19.jpg', label: 'Neutral tone jacket', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP20.jpg', label: 'Classic formal outfit', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP21.jpg', label: 'Tapered dress pants', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP22.jpg', label: 'Charcoal slacks', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP23.jpg', label: 'Mid-rise trousers', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP24.jpg', label: 'Straight-leg suit pants', category: 'Professional' },
    { img: 'src/components/retrieved_images/TBP25.jpg', label: 'Dark formal pants', category: 'Professional' },

    // Traditional
    { img: 'src/components/retrieved_images/TBT1.jpg', label: 'Sherwani with shoulder work', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT2.jpg', label: 'Kurta with Nehru jacket', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT3.jpg', label: 'Angrakha-style kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT4.jpg', label: 'Minimalist Sherwani', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT5.jpg', label: 'Classic white kurta-pyjama', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT6.jpg', label: 'A-line Achkan', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT7.jpg', label: 'Layered ethnic kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT8.jpg', label: 'Pastel Kurta with vest', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT9.jpg', label: 'Traditional Pathani suit', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT10.jpg', label: 'Bandhgala with embroidery', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT11.jpg', label: 'Embroidered Sherwani', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT12.jpg', label: 'Kurta and dhoti set', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT13.jpg', label: 'Indo-western fusion set', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT14.jpg', label: 'Front-open kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT15.jpg', label: 'Kurta with brocade vest', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT16.jpg', label: 'Mandarin collar kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT17.jpg', label: 'Dark toned Sherwani', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT18.jpg', label: 'Festive bandhgala', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT19.jpg', label: 'Layered Nehru jacket look', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT20.jpg', label: 'Silk kurta-pyjama', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT21.jpg', label: 'Flared traditional kurta', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT22.jpg', label: 'Royal ethnic ensemble', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT23.jpg', label: 'Achkan with gold buttons', category: 'Traditional' },
    { img: 'src/components/retrieved_images/TBT24.jpg', label: 'Textured Nehru kurta', category: 'Traditional' },
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
export default Btriangle;
