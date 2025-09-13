import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-pink-800 to-pink-600 text-white px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-10 absolute top-0">
        <h1 className="text-2xl font-bold">⭐ Rating Web App</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/about" className="hover:text-yellow-300">About</a>
        </div>
      </nav>

      {/* About Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          About Our Platform
        </h1>
        <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
          ⭐ Rating Web App is a modern platform designed to make rating and reviewing
          stores easier than ever.  
          Our mission is simple: empower users to share experiences, discover trusted stores,
          and make smarter decisions.  
          Whether you're finding the best local shop or sharing your voice, this platform
          brings people together through authentic feedback.
        </p>
      </div>
    </div>
  );
}

export default About;
