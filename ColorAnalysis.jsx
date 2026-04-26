import React, { useState } from 'react';
import axios from "axios";
import color from "./color.jpg";
  const seasonalColors = {
    winter: {
      title: "Winter",
      description: "Clear, cool, and high-contrast colors",
      colors: ["black", "#6C092B", "#D70040", "#FF0040", "#FF2B7F", "#E77FB3", "#C7C4C2", "#202048", "#273B8A", "#0057B8", "#00308F", "#5169C9", "#00BFFF", "#00A877"]
    },
    spring: {
      title: "Spring",
      description: "Warm, clear, and bright colors",
      colors: ["#FFFFF0", "#FFF5C2", "#FFF000", "#FFBF00", "#FF9249", "#F59A6F", "#D77658", "#BFA78F", "#BCE27F", "#8CC945", "#56A653", "#006B54", "#92CBDC", "#763E76"]
    },
    summer: {
      title: "Summer",
      description: "Cool, soft, and muted colors",
      colors: ["#FFFFF0", "#FFEB94", "#FFDD75", "#FF9AA2", "#E75480", "#C23B8E", "#663046", "#808080", "#C8E0EB", "#70C2D7", "#0A8EA0", "#5D76CB", "#080356", "#007874"]
    },
    autumn: {
      title: "Autumn",
      description: "Warm, muted, and rich colors",
      colors: ["#FFF5E1", "#FFD580", "#FFA500", "#FF4500", "#8B0000", "#654321", "#483C32", "#BBAA77", "#556B2F", "#3D5B2D", "#004B49", "#0F4D92", "#4A3041", "#2A0A29"]
    }
  };

  function ColorAnalysis() {
    const [activeTab, setActiveTab] = useState('about');
    const [loading, setLoading] = useState(false);
  
    const handleAnalyze = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/start-analysis');
        alert(response.data.message);
      } catch (error) {
        console.error('Failed to start analysis', error);
        alert('Failed to start analysis');
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      {/* Header */}
      <header className="bg-[rgba(44,62,80,0.85)] shadow-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-white">Skin Color Analysis</h1>
          <p className="text-amber-100 mt-1">Skintone  and undertone detection and analysis</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="bg-amber-100 rounded-xl shadow-lg overflow-hidden border border-amber-200">
          {/* Tabs */}
          <div className="flex border-b border-amber-200 ">
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 text-xl font-medium ${activeTab === 'about' ? 'text-amber-900 border-b-2 border-amber-700' : 'text-amber-700'}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('skintones')}
              className={`px-6 py-3 text-xl font-medium ${activeTab === 'skintones' ? 'text-amber-900 border-b-2 border-amber-700' : 'text-amber-700'}`}
            >
              Skin Tones & Undertones
            </button>
            <button 
              onClick={() => setActiveTab('analyze')}
              className={`px-6 py-3 text-xl font-medium ${activeTab === 'analyze' ? 'text-amber-900 border-b-2 border-amber-700' : 'text-amber-700'}`}
            >
              Analyze
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 text-xl font-medium ${activeTab === 'faq' ? 'text-amber-900 border-b-2 border-amber-700' : 'text-amber-700'}`}
            >
              FAQ
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'about' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-amber-900">How Color Analysis Works</h2>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-blue-800">The Science Behind It</h3>
                    <p className="text-amber-950 leading-relaxed text-xl">
                      Our skin color analysis uses advanced computer vision algorithms to detect and analyze your unique skin tone. 
                      The system captures multiple data points including undertones, surface pigmentation, and color consistency.
                    </p>
                    
                    <div className="mt-6 bg-amber-100 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2 text-2xl" >The Analysis Process:</h4>
                      <ol className="list-decimal list-inside text-amber-950 space-y-2 text-xl">
                        <li>Upload the image in the good lighting conditions or select your skintone and undertone</li>
                        <li>Color calibration against standard references</li>
                        <li>AI-powered skin tone detection and mapping</li>
                        <li>Analysis of skintone and undertones</li>
                        <li>Generation of personalized recommendations</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-blue-800">Benefits of Color Analysis</h3>
                    <ul className="space-y-3 text-xl">
                      <li className="flex items-start">
                        <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                        </div>
                        <span className="text-amber-950">Personalized makeup recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                        </div>
                        <span className="text-amber-950">Clothing color palette customized to your tone</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                        </div>
                        <span className="text-amber-950">Detection of color palette that doesn't suites you</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                        </div>
                        <span className="text-amber-950">Type of jewellery that suites you</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-blue-800 text-xl">
                    Our technology works with a 90% accuracy rate in identifying skin undertones and matching appropriate product recommendations with the data that is trained to our model.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'skintones' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-800">Understanding Skin Tones & Undertones</h2>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-indigo-700">What is Skin Tone?</h3>
                    <p className="text-gray-700 leading-relaxed mb-4 text-xl">
                      Skin tone refers to the surface color of your skin. It's what you see at first glance and can range from very fair to deep. Skin tones are typically categorized into these general groups:
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-amber-100 mr-3"></div>
                        <span className="text-gray-700 text-xl">Fair/Light - Porcelain, ivory, beige</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-amber-300 mr-3"></div>
                        <span className="text-gray-700 text-xl">Medium - Tan, honey, golden</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-amber-600 mr-3"></div>
                        <span className="text-gray-700 text-xl">Olive - Neutral medium tones with green or yellow hints</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-amber-800 mr-3"></div>
                        <span className="text-gray-700 text-xl">Deep - Rich brown, mahogany, ebony</span>
                      </li>
                    </ul>
                    
                    <p className="text-gray-700 mb-4 text-xl">
                      Your skin tone can change seasonally due to sun exposure or other environmental factors. What remains more consistent is your skin's undertone.
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-indigo-700">What is Undertone?</h3>
                    <p className="text-gray-700 leading-relaxed mb-4 text-xl">
                      Undertone is the subtle hue beneath your skin's surface. Unlike skin tone, undertones remain consistent regardless of sun exposure or seasonal changes. Understanding your undertone is key to finding your perfect color palette.
                    </p>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-indigo-800 mb-2 text-2xl">The Three Main Undertones:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="p-1 mr-2 mt-1">
                            <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 text-xl">Cool</span>
                            <p className="text-gray-600 text-lg">Bluish, pink, or rosy undertones. Silver jewelry typically looks better than gold.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="p-1 mr-2 mt-1">
                            <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 text-xl">Warm</span>
                            <p className="text-gray-600 text-lg">Golden, peachy, or yellow undertones. Gold jewelry typically looks better than silver.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="p-1 mr-2 mt-1">
                            <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 text-xl">Neutral</span>
                            <p className="text-gray-600 text-lg">Balance of both cool and warm. Both gold and silver jewelry look flattering.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-gray-700">
                      How to determine your undertone:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-lg space-y-1 ml-2">
                      <li>Check your veins: Blue/purple = cool, green = warm, both = neutral</li>
                      <li>Sun reaction: Burn easily = typically cool, tan easily = typically warm</li>
                      <li>Jewelry test: Look better in silver = cool, gold = warm, both = neutral</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-6 text-indigo-700">Seasonal Color Analysis</h3>
                  
                  <div className="flex justify-center mb-6">
                    <img 
                      src={color}
                      alt="Seasonal color analysis wheels showing color palettes for Winter, Spring, Summer and Autumn types" 
                      className="rounded-lg shadow-md max-w-full"
                    />
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-xl">
                    Seasonal color analysis categorizes people into four "seasons" based on their skin tone, undertone, hair color, and eye color. Each season has a palette of colors that are particularly flattering for that type.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.keys(seasonalColors).map(season => (
                      <div key={season} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                        <h4 className="font-medium text-lg mb-2">{seasonalColors[season].title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{seasonalColors[season].description}</p>
                        <div className="flex flex-wrap gap-2">
                          {seasonalColors[season].colors.map((color, index) => (
                            <div 
                              key={index} 
                              className="w-6 h-6 rounded-full" 
                              style={{backgroundColor: color}}
                              title={color}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <p className="text-blue-800 text-xl">
                      Our color analysis determines both your skin tone and undertone to identify your color palette, helping you make better choices in makeup, clothing, and accessories.
                      You can identify the season that you belongs to based on the your skintone and undertone. 
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'analyze' && (
              <div className="flex flex-col items-center py-12">
                <div className="w-32 h-32 mb-8 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200"></div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready for Your Color Analysis?</h2>
                <p className="text-gray-600 mb-8 text-center max-w-lg text-xl">
                  Our analysis takes approximately 1 minute to complete.
                </p>
                
                <button
                  onClick={handleAnalyze}
                  className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg shadow-md text-xl hover:bg-amber-800 transition "
                  disabled={loading}
                >
                  {loading ? 'Analyzing...' : 'Start Analysis'}
                </button>
                
                <div className="mt-12 w-full max-w-2xl">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">What to expect:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                      <div className="text-indigo-600 font-bold mb-2">Step 1</div>
                      <p className="text-gray-600 text-lg">Click on Analysis and wait for few seconds to start your color analysis</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                      <div className="text-indigo-600 font-bold mb-2">Step 2</div>
                      <p className="text-gray-600 text-lg">Upload a image with good lighting to determine the skintone and undertone or select the skintone and undertone for analysis</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                      <div className="text-indigo-600 font-bold mb-2">Step 3</div>
                      <p className="text-gray-600 text-lg">Results and personalized recommendations will be displayed</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'faq' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-medium text-indigo-700">How accurate is the color analysis?</h3>
                    <p className="mt-2 text-gray-600 text-lg">Our analysis has a 90% accuracy rate when used in proper lighting conditions.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-medium text-indigo-700">What lighting is best for the analysis?</h3>
                    <p className="mt-2 text-gray-600 text-lg">Natural, diffused daylight provides the most accurate results. Avoid direct sunlight or yellow artificial lighting for best results.</p>
                  </div>
                 
              
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

    </div>
  );
};

export default ColorAnalysis;