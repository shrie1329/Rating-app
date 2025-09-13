import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function UserHome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">Welcome to RatingApp</h1>
      <p className="text-gray-300">Browse stores and share your experiences.</p>
    </div>
  );
}

function BrowseStores() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4 text-pink-400">Browse Stores</h2>
      <p>All available stores will be shown here...</p>
    </div>
  );
}

function GiveRating() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4 text-pink-400">Give Rating</h2>
      <p>Rate stores from 1 to 5 ⭐</p>
    </div>
  );
}

function UserAccount() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4 text-pink-400">Your Account</h2>
      <p>Update profile, view your ratings etc.</p>
    </div>
  );
}

export default function UserPanel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-black/70 backdrop-blur-md shadow-lg p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-500">⭐ RatingApp</h1>
        <div className="flex space-x-6">
          <Link to="/user/home" className="hover:text-pink-400">Home</Link>
          <Link to="/user/stores" className="hover:text-pink-400">Stores</Link>
          <Link to="/user/rating" className="hover:text-pink-400">Rating</Link>
          <Link to="/user/account" className="hover:text-pink-400">User Account</Link>
          <button
            onClick={handleLogout}
            className="bg-pink-600 hover:bg-pink-700 px-4 py-1 rounded-lg"
          >
            Log Out
          </button>
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="home" element={<UserHome />} />
          <Route path="stores" element={<BrowseStores />} />
          <Route path="rating" element={<GiveRating />} />
          <Route path="account" element={<UserAccount />} />
        </Routes>
      </main>
    </div>
  );
}
