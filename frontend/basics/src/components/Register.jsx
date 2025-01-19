import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ fullname: "", password: "", email: "", phoneNumber: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/register", formData);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded px-8 py-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input
          name="fullname"
          placeholder="fullname"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        />
        <input
          name="email"
          placeholder="email"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        />
        <input
          name="phoneNumber"
          placeholder="phoneNumber"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
