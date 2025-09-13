import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import AdminPanel from "./admin/AdminPanel";
import UserPanel from "./user/UserPanel";
import OwnerPanel from "./owner/OwnerPanel";


function App() {
  return (
    <Router>
      <Routes>
        {/* Normal user pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Admin panel */}
        <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="/user/*" element={<UserPanel />} />
          <Route path="/owner/*" element={<OwnerPanel />} />
        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-pink-900 to-purple-800 text-white">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found 🚨</h1>
              <Link
                to="/"
                className="px-6 py-3 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
              >
                Go Back Home
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
