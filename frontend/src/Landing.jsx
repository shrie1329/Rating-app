import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-700 via-black to-pink-900 text-white text-center px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-10 absolute top-0">
        <h1 className="text-2xl font-bold">⭐ Rating Web App</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-pink-400">Home</Link>
          <Link to="/about" className="hover:text-pink-400">About</Link>
          <Link to="/how-it-works" className="hover:text-pink-400">How it Works</Link>
          <Link
            to="/auth"
            className="bg-white text-pink-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200"
          >
            Sign In / Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Rate. Review. Discover.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          A modern platform to rate and review stores with ease.  
          Share your experience and help others choose better.
        </p>
        {/* ✅ Get Started button → Auth page */}
        <Link
          to="/auth"
          className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          🚀 Get Started
        </Link>
      </div>
    </div>
  );
}

export default Landing;

