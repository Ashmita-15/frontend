import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username:'',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/video1.mp4"
        autoPlay
        loop
        muted
      />
      {/* Content */}
      <div className="relative bg-black p-8 rounded-lg shadow-lg w-full max-w-sm z-10">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-md bg-gray-700 text-white border-none focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
           </div>
           <div className="mb-4">
            <label htmlFor="username" className="block text-lg mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-3 rounded-md bg-gray-700 text-white border-none focus:outline-none"
              value={formData.username}
              onChange={handleChange}
              required
            />
           </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-md bg-gray-700 text-white border-none focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 rounded-md bg-gray-700 text-white border-none focus:outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-lg mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-3 rounded-md bg-gray-700 text-white border-none focus:outline-none"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <a
            type="submit" href="/distractiondetection"
            className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
          >
            Register
          </a>
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
