import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* About Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to ADMIGOAL! We are a platform dedicated to simplifying the admission process for students.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our goal is to help students discover the best universities and courses, making the decision-making process easier and more efficient.
          </p>

          {/* Mission Section */}
          <div className="bg-gray-50 py-8 px-4 md:px-16 mb-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              At ADMIGOAL, we aim to provide students with the tools, resources, and information they need to make informed decisions about their higher education. We connect students with top universities worldwide and offer a seamless platform to explore courses and admission processes.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gray-50 py-8 px-4 md:px-16 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-black mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              Our vision is to revolutionize the higher education admission process, making it accessible, transparent, and user-friendly. We strive to be a one-stop platform for all educational needs, empowering students to make the best choices for their future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
