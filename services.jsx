import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      title: "Color Analysis",
      description: "Unlock your ideal color palette to enhance your natural beauty.",
      image: "https://i.pinimg.com/736x/15/62/20/1562209f3d050b386766ef3b0e9da238.jpg",
      icon: "✨",
      link: "/color-analysis"
    },
    {
      title: "Hairdo",
      description: "Personalized hairstyle recommendations based on your face shape, lifestyle, and hair texture.",
      image: "https://i.pinimg.com/736x/86/83/0d/86830d7339f555e439d412b64ad66018.jpg",
      icon: "💇",
      link:"/hairdo"
    },
    {
      title: "Attire",
      description: "Outfit suggestions based on your body type, personality, and occasion.",
      image: "https://i.pinimg.com/736x/5a/ab/7b/5aab7bb32d6292a7bb4315b5625d186e.jpg",
      icon: "👗",
      link:"/Attire"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 py-24 px-6 font-sans min-h-screen">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-1/2 w-36 h-36 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Header with stylized underline */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-amber-800 mb-6">
          Our Expertise: Tailored Services
          <div className="w-40 h-1 bg-amber-500 mx-auto mt-2 rounded-full"></div>
        </h2>
        
        <p className="text-lg text-amber-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          In this project, we focus on providing personalized services that enhance your natural style and confidence. 
          From selecting the right colors to discovering the perfect hairstyle and attire, each service is designed with your individual needs in mind.
        </p>
      </div>

      {/* Project overview with improved styling */}
      <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto mb-20 text-center border-l-4 border-amber-500 relative z-10 transform hover:scale-[1.01] transition-all duration-300">
        <div className="absolute -top-4 -left-4 bg-amber-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl shadow-lg">
          <span>★</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-amber-800">
          Project Overview
        </h3>
        <p className="text-amber-700 text-lg leading-relaxed max-w-3xl mx-auto">
          At the heart of our initiative lies a simple yet powerful belief: style is deeply personal. 
          Through meticulous analysis of body types, facial features, and lifestyle preferences, we craft 
          tailored solutions that empower individuals to express their most authentic selves. 
          Our services go beyond trends — they are about uncovering the timeless essence of your individuality. 
          Whether for a professional milestone or personal transformation, we aim to inspire confidence, spark joy, 
          and elevate the way you present yourself to the world.
        </p>
      </div>

      {/* Services grid with enhanced card styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="relative h-96 rounded-2xl overflow-hidden cursor-pointer border-2 border-amber-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-amber-500 group"
          >
            {/* Service icon badge */}
            <div className="absolute top-4 right-4 z-20 bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl opacity-90 shadow-md">
              {service.icon}
            </div>
            
            {/* Image with filter effect on hover */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
            
            {/* Overlay with content */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/60 to-amber-900/90 flex flex-col justify-end items-center text-white p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl transform translate-y-4 group-hover:translate-y-0">
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <div className="w-16 h-0.5 bg-amber-200 mb-4"></div>
              <p className="text-lg text-center text-amber-50">{service.description}</p>
              <Link to={service.link}>
  <button className="mt-6 px-6 py-2 bg-white text-amber-800 rounded-full font-medium hover:bg-amber-100 transition-colors duration-300 transform hover:scale-105">
    Learn More
  </button>
</Link>
            </div>
          </div>
        ))}
      </div>
      
    
      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;