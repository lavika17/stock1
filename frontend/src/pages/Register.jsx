import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "user",
    profilePhoto: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Left Illustration Panel */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 to-purple-700 p-10 ">
        <h2 className="text-4xl font-bold mb-4">INVEST</h2>
        <p className="text-lg text-gray-200 text-center max-w-md">
          Manage your finances, track investments, and stay ahead with real-time insights.
        </p>
        <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="Illustration" className="w-2/3 mt-10" />
      </div>

      {/* Right Form Panel */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 space-y-5"
        >
          <h2 className="text-3xl font-bold text-center text-white">Create Account</h2>

          {/* Full Name */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="9876543210"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Profile Photo */}
          <div className="space-y-2">
            <label className="block text-sm text-gray-300">Profile Photo URL</label>
            <input
              type="text"
              name="profilePhoto"
              value={formData.profilePhoto}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center text-sm text-gray-300">
            <input type="checkbox" required className="mr-2" />
            I agree to the terms of service and privacy policy
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
          >
            Sign Up
          </button>

          {/* Social Login */}
          <div className="text-center text-sm text-gray-400 mt-4">Or continue with:</div>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">G</button>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">f</button>
          </div>

          {/* Sign In Link */}
          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}