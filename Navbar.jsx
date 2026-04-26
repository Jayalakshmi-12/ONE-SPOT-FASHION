import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, Info, Palette, Shirt, Scissors, LogOut } from 'lucide-react';
import logo from "./logo.jpg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const storedName = sessionStorage.getItem('name');
    if (storedName) setUserName(storedName);
  }, []);

  // 🔒 Redirect logged-in users away from login/signup pages
  useEffect(() => {
    const storedName = sessionStorage.getItem('name');
    const restrictedPaths = ['/login', '/signuppage'];
    if (storedName && restrictedPaths.includes(location.pathname)) {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  const handleLogout = async () => {
    const userId = sessionStorage.getItem('userId');

    if (!userId) {
      alert("You are not logged in.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('userId');
        setUserName(null);
        navigate('/login');
      } else {
        const data = await response.json();
        console.error("Logout error:", data.error);
        alert("Logout failed: " + data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    }
  };

  const handleRestrictedClick = (e) => {
    if (!userName) {
      e.preventDefault();
      alert("Please log in or sign up to access this page.");
    }
  };

  const restrictedLinkClass = userName
    ? "flex items-center space-x-1 text-black hover:text-amber-800"
    : "flex items-center space-x-1 text-gray-400 cursor-not-allowed";

  const openLinkClass = "flex items-center space-x-1 text-black hover:text-amber-800";

  return (
    <nav className="bg-white shadow-lg h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center">
          {/* Logo + Navigation */}
          <div className="flex items-center space-x-8">
            <img
              src={logo}
              alt="Fashion Logo"
              className="h-20 w-20 object-cover rounded-full"
            />
            <div className="flex space-x-6">
              <Link to="/" className="flex items-center space-x-1 text-black hover:text-amber-800">
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link to="/services" className="flex items-center space-x-1 text-black hover:text-amber-800">
                <Info className="w-5 h-5" />
                <span>Services</span>
              </Link>

              <Link to="/color-analysis" className={restrictedLinkClass} onClick={handleRestrictedClick}>
                <Palette className="w-5 h-5" />
                <span>Color Analysis</span>
              </Link>
              <Link to="/attire" className={restrictedLinkClass} onClick={handleRestrictedClick}>
                <Shirt className="w-5 h-5" />
                <span>Attire</span>
              </Link>
              <Link to="/hairdo" className={restrictedLinkClass} onClick={handleRestrictedClick}>
                <Scissors className="w-5 h-5" />
                <span>Hairdo</span>
              </Link>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            {userName ? (
              <>
                <span className="text-gray-700 font-semibold">Hello, {userName}!</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signuppage"
                  className="bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
