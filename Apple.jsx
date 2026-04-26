
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Apple() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalIndex, setModalIndex] = useState(null); // Index of selected image

  const categories = ['All', 'Casual', 'Professional', 'Traditional'];

  const tips = [
      // Casual
      { img: 'src/components/retrieved_images/CA1.jpg', label: 'A line kurthi', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA2.jpg', label: 'V-neck Blouse', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA3.jpg', label: 'Wrap Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA4.jpg', label: 'A-line Tunic', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA5.jpg', label: 'simple kurthi', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA6.jpg', label: 'High-low Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA7.jpg', label: 'Button-up Shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA8.jpg', label: 'White Shirt + Wide-Leg Jeans', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA9.jpg', label: 'Black Tee + Open Shirt + Ripped Jeans', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA10.jpg', label: 'Belted Shirt', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA11.jpg', label: 'Asymmetrical Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA12.jpg', label: 'Ruffle Sleeve Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA13.jpg', label: 'Draped Blouse', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA14.jpg', label: 'Knotted Tee', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA15.jpg', label: 'Cap Sleeve Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA16.jpg', label: 'Wrap Peplum Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA17.jpg', label: 'Tiered Blouse', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA18.jpg', label: 'Bodycon Dress', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA19.jpg', label: 'Smocked Top', category: 'Casual' },
      { img: 'src/components/retrieved_images/CA20.jpg', label: 'Cowl Neck Top', category: 'Casual' },
    
      // Professional
      { img: 'src/components/retrieved_images/PA1.jpg', label: 'kuthi', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA2.jpg', label: 'Structured Coat', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA3.jpg', label: 'Collarless Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA4.jpg', label: 'Cinched Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA5.jpg', label: 'Tweed Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA6.jpg', label: 'Peplum Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA7.jpg', label: 'Belted Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA8.jpg', label: 'Double-breasted Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA9.jpg', label: 'Slim Fit Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA10.jpg', label: 'Minimalist Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA11.jpg', label: 'Open Front Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA12.jpg', label: 'Silk Blouse', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA13.jpg', label: 'Notch Lapel Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA14.jpg', label: 'Longline Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA15.jpg', label: 'Cropped Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA16.jpg', label: 'Wrap Shirt', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA17.jpg', label: 'Fitted Jacket', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA18.jpg', label: 'Textured Blazer', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA19.jpg', label: 'Tucked-in Top', category: 'Professional' },
      { img: 'src/components/retrieved_images/PA20.jpg', label: 'Pleated Blazer', category: 'Professional' },
    
      // Traditional
      { img: 'src/components/retrieved_images/TA1.jpg', label: 'Anarkali Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA2.jpg', label: 'Angrakha Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA3.jpg', label: 'Wrap Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA4.jpg', label: 'Solid Dark Green Handloom Cotton Saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA5.jpg', label: 'Green Checkered Saree with Scallop Border', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA6.jpg', label: 'A-line Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA7.jpg', label: 'Printed Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA8.jpg', label: 'Straight Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA9.jpg', label: 'Ethnic Frock', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA10.jpg', label: 'High-low Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA11.jpg', label: 'Kaftan Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA12.jpg', label: 'Chikankari Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA13.jpg', label: 'Front-open Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA14.jpg', label: 'Embroidered Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA15.jpg', label: 'Side-slit Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA16.jpg', label: 'Brocade Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA17.jpg', label: 'Gathered Kurti', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA18.jpg', label: 'Layered Kurta', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA19.jpg', label: 'Banarasi Saree', category: 'Traditional' },
      { img: 'src/components/retrieved_images/TA20.jpg', label: 'Kanjeevaram Saree', category: 'Traditional' }

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

  <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Clothing Tips for Apple Body Shape</h2>

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
export default Apple;