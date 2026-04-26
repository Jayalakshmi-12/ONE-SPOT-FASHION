import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.jpg"; 

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [name, setName] = useState(""); // Name comes first
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnimateIn(true), 100);
  }, []);

  const handleLoginClick = () => setShowLogin(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name.trim() || !userId.trim() || !password.trim()) {
      alert("Please enter Name, User ID, and Password.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/login", { name, userId, password });
  
      if (response.data.success) {
        const fetchedName = response.data.name || name;
        setName(fetchedName);
  
        setModalMessage(`Welcome back, ${fetchedName}!`);
        setShowModal(true);
  
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('name', fetchedName);
  
        setTimeout(() => {
          setShowModal(false);
          window.location.reload(); // Reload the page
  
          // After reloading, redirect to the home page
          window.location.href = "/home"; // Navigate to the home page
        }, 6000);
      } else {
        setModalMessage("Invalid credentials.");
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000); // Hide modal after 2 seconds
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  
  return (
    <div className="min-h-screen w-full bg-amber-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-96 md:h-[34rem] bg-amber-100 rounded-3xl shadow-2xl overflow-hidden border border-amber-300">
        
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-36 h-36 rounded-full bg-amber-200 blur-2xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-amber-500 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-amber-600 blur-2xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Main content */}
        <div className="relative h-full w-full flex ">
          {/* Left Section */}
          <div
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${animateIn ? showLogin ? "-translate-x-1/3 opacity-0" : "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <div className="absolute inset-0 bg-amber-100 bg-opacity-50 z-10 rounded-3xl" />
            <div className="absolute top-8 left-8 z-20 flex items-center space-x-4">
  <img
    src={logo}
    alt="Fashion Logo"
    className="h-20 w-20 object-cover rounded-full"
  />
  <div className="text-amber-900">
    <h2 className="text-4xl font-extrabold tracking-tight">One Spot Fashion</h2>
    <p className="text-base opacity-80 mt-1">Elevate your style experience</p>
  </div>
</div>


          </div>

          {/* Right Section - Form */}
          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out p-8 md:p-12 flex flex-col justify-center ${showLogin ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div className="w-full max-w-sm mx-auto backdrop-blur-md bg-amber-50/80 p-8 rounded-3xl border border-amber-300 shadow-md">
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-semibold text-amber-900">Log In</h2>
                <p className="text-amber-800 text-sm mt-2">Enter your credentials to log in</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-800 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white border border-amber-300 text-amber-900 placeholder-[#9e8774] focus:ring-2 focus:ring-[#d6a97a] focus:outline-none"
                    placeholder="Enter your Name"
                    required
                  />
                </div>

                {/* User ID field */}
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-amber-800 mb-1">
                    User ID
                  </label>
                  <input
                    id="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white border border-amber-300 text-amber-800 placeholder-[#9e8774] focus:ring-2 focus:ring-[#d6a97a] focus:outline-none"
                    placeholder="Enter your User ID"
                    required
                  />
                </div>

                {/* Password field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-amber-800] mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 rounded-lg bg-white border border-amber-300 text-amber-800 placeholder-[#9e8774] focus:ring-2 focus:ring-[#d6a97a] focus:outline-none"
                    placeholder="Enter your Password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!name.trim() || !userId.trim() || !password.trim()}
                  className={`w-full text-white font-semibold p-3 rounded-lg mt-4 transition-all duration-300 shadow-md ${
                    !name.trim() || !userId.trim() || !password.trim()
                      ? "bg-amber-600 cursor-not-allowed"
                      : "bg-amber-800 hover:bg-amber-900"
                  }`}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>

          {/* CTA Button */}
          {!showLogin && (
            <div className="absolute left-0 bottom-0 w-full flex justify-center mb-8 z-10">
              <button
                onClick={handleLoginClick}
                className="px-8 py-3 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d6a97a] transform hover:scale-105"
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white text-amber-900] p-8 rounded-2xl shadow-lg text-center max-w-xs w-full">
            <h2 className="text-2xl font-bold mb-2">{modalMessage}</h2>
            {modalMessage.startsWith("Welcome") && (
              <p className="text-sm text-[#5c4433]">Redirecting to Home Page...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
