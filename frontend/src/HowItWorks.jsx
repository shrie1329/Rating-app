import React from "react";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Sign Up / Log In",
      description: "Create your account and join the community of reviewers and store seekers."
    },
    {
      number: "2",
      title: "Find Stores",
      description: "Browse the list of stores, search, and explore based on reviews and ratings."
    },
    {
      number: "3",
      title: "Rate & Review",
      description: "Share your experience with ratings and comments to help others decide."
    },
    {
      number: "4",
      title: "Discover the Best",
      description: "See which stores are most loved and make smarter choices effortlessly."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-pink-800 text-white px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 px-10 absolute top-0">
        <h1 className="text-2xl font-bold">⭐ Rating Web App</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/about" className="hover:text-yellow-300">About</a>
          <a href="/how-it-works" className="hover:text-yellow-300">How It Works</a>
        </div>
      </nav>

      {/* How It Works Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
          How It Works 🚀
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transform transition"
            >
              <div className="text-5xl font-bold text-yellow-400 mb-4">{step.number}</div>
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-200">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
