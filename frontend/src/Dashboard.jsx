import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-black to-pink-700 text-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-black/60 backdrop-blur-md text-white py-4 px-8 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold">⭐ Rating App Dashboard</h1>
        <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">👤 Total Users</h2>
          <p className="text-4xl font-bold text-pink-400">120</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">🏬 Total Stores</h2>
          <p className="text-4xl font-bold text-green-400">45</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">⭐ Ratings Submitted</h2>
          <p className="text-4xl font-bold text-yellow-400">320</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
