import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.jpg"; // Make sure this path is correct

const API_BASE_URL = "http://localhost:5000/api";

const SignUpPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    password: "",
    email: "",
  });
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setAnimateIn(true), 100);
  }, []);

  const handleLoginClick = () => setShowLogin(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 8) return "Too Short";

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) return "Strong";
    if ((hasUpperCase && hasLowerCase) || (hasNumber && hasSpecialChar)) return "Medium";

    return "Weak";
  };

  const generateUserId = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/generate-userid`);
      return response.data.userid;
    } catch (error) {
      console.error("Error generating user ID:", error);
      return `USER-${Date.now()}`;
    }
  };

  const validateForm = () => {
    const { name, gender, age, password, email } = formData;

    if (!name || !gender || !age || !password || !email) {
      setError("All fields must be filled.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters, include one uppercase letter and one special character.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const generatedId = await generateUserId();
      setUserId(generatedId);

      const userData = {
        userId: generatedId,
        name: formData.name.trim(),
        gender: formData.gender.trim(),
        age: parseInt(formData.age, 10),
        password: formData.password.trim(),
        email: formData.email.trim(),
      };

      const response = await axios.post(`${API_BASE_URL}/users`, userData);

      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to save user data");
      }

      sessionStorage.setItem("userId", generatedId);
      sessionStorage.setItem("name", formData.name);
      setShowModal(true);
      setFormData({
        name: "",
        gender: "",
        age: "",
        password: "",
        email: "",
      });

      // Redirect after 3 seconds
      setTimeout(() => {
        setShowModal(false);
        window.location.reload(); // Reload the page

        // After reloading, redirect to the home page
        window.location.href = "/home"; // Navigate to the home page
      }, 6000);
    } catch (err) {
      console.error("Signup error:", err);
      const errorMessage = err.response?.data?.error || err.message || "Failed to save your information.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
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

        {/* Brand section */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            animateIn
              ? showLogin
                ? "-translate-x-1/3 opacity-0"
                : "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-amber-100 bg-opacity-50 z-10 rounded-3xl" />
          <div className="absolute top-8 left-8 z-20 flex items-center space-x-4">
            <img src={logo} alt="Fashion Logo" className="h-20 w-20 object-cover rounded-full" />
            <div className="text-amber-900">
              <h2 className="text-4xl font-extrabold tracking-tight">One Spot Fashion</h2>
              <p className="text-base opacity-80 mt-1">Elevate your style experience</p>
            </div>
          </div>
        </div>

        {/* Signup Form Section */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-12 flex flex-col justify-center ${
            showLogin ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-sm mx-auto backdrop-blur-md bg-amber-50/80 p-8 rounded-3xl border border-amber-300 shadow-md">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-semibold text-amber-900">Sign Up</h2>
              <p className="text-amber-800 text-sm mt-2">Create your fashion profile</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-white border border-amber-300 text-amber-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white border border-amber-300 text-amber-900"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-1">Age</label>
                  <input
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    type="number"
                    required
                    placeholder="Enter your age"
                    className="w-full p-3 rounded-lg bg-white border border-amber-300 text-amber-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-white border border-amber-300 text-amber-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">Password</label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  required
                  placeholder="Enter a strong password"
                  className="w-full p-3 rounded-lg bg-white border border-amber-300 text-amber-900"
                />
                {formData.password && (
                  <div className="mt-2 text-sm">
                    Strength:{" "}
                    <span
                      className={`font-semibold ${
                        passwordStrength === "Strong"
                          ? "text-green-600"
                          : passwordStrength === "Medium"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {passwordStrength}
                    </span>
                  </div>
                )}
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 mt-4 text-lg font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* CTA Button */}
        {!showLogin && (
          <div className="absolute left-0 bottom-0 w-full flex justify-center mb-8 z-10">
            <button
              onClick={handleLoginClick}
              className="px-8 py-3 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transform hover:scale-105"
            >
             Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl text-amber-900 font-semibold">Registration Successful!</h3>
            <p className="mt-2">Your account has been created successfully.</p>
            <p className="mt-2">
              Your User ID is: <strong>{userId}</strong>
            </p>
            <p className="mt-1">
             please note your userid
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;