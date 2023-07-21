import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/api";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFromData) => ({
      ...prevFromData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleRegisterForm = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const { refresh, access } = response.data;
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("accessToken", access);
      navigate("/login");
    } catch (error) {
      alert("Register Failed!");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-thin mb-6">Sign Up</h2>
        <form onSubmit={handleRegisterForm}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
          <p className="mt-3">
            Already have account?{" "}
            <Link className="text-sky-500" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
