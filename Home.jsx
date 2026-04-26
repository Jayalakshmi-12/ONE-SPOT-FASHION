import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
    
      {/* Hero Section */}
      <div className="bg-[rgba(44,62,80,0.85)] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-8xl font-bold text-amber-100 leading-tight">ONE SPOT FASHION</h2>
            </div>
           
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl italic text-black mb-4">Hey there,</h2>
            <h3 className="text-2xl font-bold text-black mb-6">I'M ALL ABOUT HELPING YOU DISCOVER YOUR PERFECT STYLE</h3>
            
           <p className="text-amber-900 mb-6">
  Experience fashion like never before with our cutting-edge virtual dressing technology. Effortlessly explore different styles, colors, and outfits—no need to change a single piece of clothing. Visualize your look in real time and make confident style choices with ease.  
  <br /><br />
  Discover your most flattering shades with our advanced color analysis, designed to highlight your natural beauty. Plus, explore our Hairdo section to find the perfect haircut tailored to your unique face shape. It's fashion, personalized to you.
</p>
            
          </div>
          <div className="flex justify-center">
            <img 
              src="https://i.pinimg.com/736x/bf/31/8f/bf318fc44c3e83594b45a1ff36171494.jpg" 
              alt="Fashion stylist"
              className="max-w-md"
            />
          </div>
        </div>
      </div>
      
     
    </div>
  );
}

export default Home;