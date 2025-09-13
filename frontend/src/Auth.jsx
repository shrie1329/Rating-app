import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role!");
      return;
    }

    // 👉 Normally here we would call backend API with email+password+role
    // For now just redirect based on role
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "owner") {
      navigate("/owner");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-pink-800 text-white px-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          )}

          {/* Role Dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">-- Select Role --</option>
            <option value="admin">System Administrator</option>
            <option value="user">Normal User</option>
            <option value="owner">Store Owner</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold text-white shadow-lg transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center mt-6 text-gray-300">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-pink-400 font-semibold hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
