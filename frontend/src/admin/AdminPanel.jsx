import React, { useState } from "react";
import { Link, Routes, Route, useNavigate, Navigate } from "react-router-dom";

// ✅ Reusable Page Layout
function PageLayout({ title, children }) {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center">{title}</h1>
      {children}
    </div>
  );
}

// ✅ Dashboard Page
function Dashboard({ users, stores }) {
  return (
    <PageLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-4xl font-bold mt-2">{users.length}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Total Stores</h2>
          <p className="text-4xl font-bold mt-2">{stores.length}</p>
        </div>
        <div className="bg-gradient-to-br from-pink-600 to-red-600 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Total Ratings</h2>
          <p className="text-4xl font-bold mt-2">450</p>
        </div>
      </div>
    </PageLayout>
  );
}

// ✅ Add User Form
function AddUser({ users, setUsers }) {
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      alert("Please fill all fields");
      return;
    }
    setUsers([...users, form]);
    setForm({ name: "", email: "", role: "" });
  };

  return (
    <PageLayout title="Add User">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
        >
          <option value="">-- Select Role --</option>
          <option value="admin">System Administrator</option>
          <option value="user">Normal User</option>
          <option value="owner">Store Owner</option>
        </select>
        <button
          type="submit"
          className="w-full py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold text-white"
        >
          ➕ Add User
        </button>
      </form>
    </PageLayout>
  );
}

// ✅ Add Store Form
function AddStore({ stores, setStores }) {
  const [form, setForm] = useState({ name: "", address: "", owner: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.owner) {
      alert("Please fill all fields");
      return;
    }
    setStores([...stores, form]);
    setForm({ name: "", address: "", owner: "" });
  };

  return (
    <PageLayout title="Add Store">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Store Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
        />
        <input
          type="text"
          name="address"
          placeholder="Store Address"
          value={form.address}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
        />
        <input
          type="text"
          name="owner"
          placeholder="Owner Name"
          value={form.owner}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white"
        >
          🏪 Add Store
        </button>
      </form>
    </PageLayout>
  );
}

// ✅ View Users
function ViewUsers({ users }) {
  return (
    <PageLayout title="View Users">
      {users.length === 0 ? (
        <p className="text-center text-gray-400">No users added yet.</p>
      ) : (
        <table className="w-full text-left border border-gray-700 bg-gray-900 rounded-lg">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t border-gray-700">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </PageLayout>
  );
}

// ✅ View Stores
function ViewStores({ stores }) {
  return (
    <PageLayout title="View Stores">
      {stores.length === 0 ? (
        <p className="text-center text-gray-400">No stores added yet.</p>
      ) : (
        <table className="w-full text-left border border-gray-700 bg-gray-900 rounded-lg">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">Store Name</th>
              <th className="p-3">Address</th>
              <th className="p-3">Owner</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((s, i) => (
              <tr key={i} className="border-t border-gray-700">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.address}</td>
                <td className="p-3">{s.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </PageLayout>
  );
}

// ✅ Admin Panel
function AdminPanel() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-purple-900 to-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-black/60 backdrop-blur-lg text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/admin/dashboard" className="hover:bg-purple-700 px-4 py-2 rounded-lg">
            Dashboard
          </Link>
          <Link to="/admin/add-user" className="hover:bg-purple-700 px-4 py-2 rounded-lg">
            Add User
          </Link>
          <Link to="/admin/add-store" className="hover:bg-purple-700 px-4 py-2 rounded-lg">
            Add Store
          </Link>
          <Link to="/admin/view-users" className="hover:bg-purple-700 px-4 py-2 rounded-lg">
            View Users
          </Link>
          <Link to="/admin/view-stores" className="hover:bg-purple-700 px-4 py-2 rounded-lg">
            View Stores
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-800/40 to-black/60 p-6 overflow-auto">
        <Routes>
          <Route index element={<Navigate to="add-user" replace />} />
          <Route path="dashboard" element={<Dashboard users={users} stores={stores} />} />
          <Route path="add-user" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="add-store" element={<AddStore stores={stores} setStores={setStores} />} />
          <Route path="view-users" element={<ViewUsers users={users} />} />
          <Route path="view-stores" element={<ViewStores stores={stores} />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminPanel;
