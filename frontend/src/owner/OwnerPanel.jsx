import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 🔹 Replace this with your API call later
    const sampleData = [
      { id: 1, name: "Alice", email: "alice@mail.com" },
      { id: 2, name: "Bob", email: "bob@mail.com" },
      { id: 3, name: "Charlie", email: "charlie@mail.com" },
    ];
    setUsers(sampleData);
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-6">View Users</h2>
      <input
        type="text"
        placeholder="Search in Users..."
        className="w-full p-3 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-6"
      />

      {/* ✅ Table of users */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-pink-800 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-gray-700 hover:bg-pink-900/40">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Ratings() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    // 🔹 Replace with API call later
    const sampleRatings = [
      { id: 1, user: "Alice", store: "Pizza Place", rating: 5 },
      { id: 2, user: "Bob", store: "Coffee Hub", rating: 4 },
    ];
    setRatings(sampleRatings);
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-6">Ratings</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-pink-800 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">User</th>
              <th className="p-3">Store</th>
              <th className="p-3">Rating</th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((r) => (
              <tr key={r.id} className="border-b border-gray-700 hover:bg-pink-900/40">
                <td className="p-3">{r.id}</td>
                <td className="p-3">{r.user}</td>
                <td className="p-3">{r.store}</td>
                <td className="p-3">{r.rating} ⭐</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Account() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-6">Account</h2>
      <p className="text-center text-lg text-gray-300">
        Manage your account details here.
      </p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-6">Dashboard</h2>
      <p className="text-center text-lg text-gray-300">
        Welcome to Store Owner Dashboard
      </p>
    </div>
  );
}

function OwnerPanel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-pink-900 via-black to-black">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8">Owner Panel</h2>
          <nav className="flex flex-col space-y-4">
            <Link to="/owner/dashboard" className="hover:bg-pink-700 px-4 py-2 rounded-lg">
              Dashboard
            </Link>
            <Link to="/owner/view-users" className="hover:bg-pink-700 px-4 py-2 rounded-lg">
              View Users
            </Link>
            <Link to="/owner/ratings" className="hover:bg-pink-700 px-4 py-2 rounded-lg">
              Ratings
            </Link>
            <Link to="/owner/account" className="hover:bg-pink-700 px-4 py-2 rounded-lg">
              Account
            </Link>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg mt-6"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gradient-to-b from-pink-950 to-black rounded-lg m-4">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="view-users" element={<ViewUsers />} />
          <Route path="ratings" element={<Ratings />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </main>
    </div>
  );
}

export default OwnerPanel;


