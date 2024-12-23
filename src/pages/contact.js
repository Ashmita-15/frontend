// src/pages/ContactPage.js

import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black text-white">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="text-center">
          <p className="text-lg mb-4">Have questions? Reach out to us for support or inquiries.</p>
          <p className="mb-2">Email: support@learningapp.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
