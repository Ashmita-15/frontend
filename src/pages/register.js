import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleGoogleSignIn = () => {
    // Placeholder for Google OAuth functionality
    console.log("Continue with Google clicked");
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* Form Container */}
      <div className="relative bg-gray-800 border-white border-2 p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-md bg-gray-300 text-black border-none focus:outline-none"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Username and Phone Number in the Same Row */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="username" className="block text-lg mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-3 rounded-md bg-gray-300 text-black border-none focus:outline-none"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="number" className="block text-lg mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                className="w-full p-3 rounded-md bg-gray-300 text-black border-none focus:outline-none"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-md bg-gray-300 text-black border-none focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password and Confirm Password in the Same Row */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-lg mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 rounded-md bg-gray-300 text-black border-none focus:outline-none"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-lg mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 rounded-md bg-gray-300 text-black border-none focus:outline-none"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300 flex items-center justify-center mt-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* Login Link */}
          <div className="text-center py-4">
            <a href="/login" className="text-blue-500 hover:underline">
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
