// src/pages/DistractionDetection.js

import React from 'react';

const DistractionDetection = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Live Distraction Detection</h2>
        <div className="flex justify-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-700 transition duration-300 mb-4">
            Start Detection
          </button>
        </div>
        <div className="text-center text-lg">
          <p>Monitor your focus in real-time and get personalized tips to stay engaged in learning.</p>
        </div>
      </div>
    </div>
  );
};

export default DistractionDetection;
