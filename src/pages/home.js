import React from "react";


const Home = () => {
  return (
    <div>
      {/* Background Video */}
      <div className="relative w-full h-screen mt-[-2.25%]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/videos/bg.mp4" // Replace with your video file path
            autoPlay
            loop
            muted
          />
          
          {/* Dark Overlay */}
          <div className="absolute top-0left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>
          
          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20">
            <h1 className="text-white text-5xl font-bold">ADMIGOAL</h1>
            <p className="text-gray-300 text-xl font-medium mt-2">
              A gateway for your higher education
            </p>
            {/* Buttons */} 
            <div className="flex space-x-4 mb-20 mt-[2%]">
              <button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                Explore
              </button>
              <button className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-lg shadow-md hover:bg-green-700 transition">
                Register
              </button>
            </div>
          </div>
        </div>
      {/* Other Sections */}
      
       {/* New Section: Image and Text */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="mt-12 md:mt-16">
            <img
              src="/images/img1.jpg" // Replace with your image file path
              alt="Admission Process"
              className="w-full md:w-3/4 lg:w-[80%] h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="text-center md:text-left mt-2 md:mt-0">
      <h2 className="text-3xl font-bold text-black">
        Making the admission process easier!
      </h2>
      <p className="text-lg text-gray-700 mt-2">
        Our platform simplifies the admission journey, helping you easily find the best universities and make informed decisions.
      </p>
      {/* New Paragraph with Project Explanation */}
      <p className="text-md text-gray-600 mt-4">
        At ADMIGOAL, we aim to revolutionize the higher education admission process. Our platform connects students with top universities, providing them with the tools and information needed to make the best choice for their future. With a user-friendly interface and a wealth of resources, we aim to make the admission process as smooth and efficient as possible.
      </p>
    </div>
        </div>
      </section>
      {/* Courses by Universities Section */}
<section className="w-full bg-gray-100 py-12">
  <div className="max-w-screen-xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-black mb-6">Courses by Universities</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <div className="course-item bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        <h3 className="text-xl font-semibold text-black">B.Tech</h3>
      </div>
      <div className="course-item bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        <h3 className="text-xl font-semibold text-black">BCA</h3>
      </div>
      <div className="course-item bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        <h3 className="text-xl font-semibold text-black">BSc.</h3>
      </div>
      <div className="course-item bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        <h3 className="text-xl font-semibold text-black">B.Com</h3>
      </div>
      <div className="course-item bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        <h3 className="text-xl font-semibold text-black">MCA</h3>
      </div>
      <div className="course-item bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        <h3 className="text-xl font-semibold text-black">M.Tech</h3>
      </div>
      <div className="course-item bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        <h3 className="text-xl font-semibold text-black">B.A</h3>
      </div>
      <div className="course-item bg-white p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        <h3 className="text-xl font-semibold text-black">BBA</h3>
      </div>
    </div>
  </div>
</section>
<section className="w-full py-12 bg-gray-100">
  <div className="max-w-screen-xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-black mb-6">Predict Your University Course</h2>

    {/* Form for Predicting Course */}
    <form className="w-full md:w-1/2 mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-col space-y-4">
        
        {/* Entrance Exam Marks */}
        <div className="flex flex-col">
          <label htmlFor="examMarks" className="text-lg font-medium text-gray-700">
            Entrance Exam Marks
          </label>
          <input
            type="number"
            id="examMarks"
            name="examMarks"
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your entrance exam marks"
            required
          />
        </div>
        
        {/* Rank */}
        <div className="flex flex-col">
          <label htmlFor="rank" className="text-lg font-medium text-gray-700">
            Rank
          </label>
          <input
            type="number"
            id="rank"
            name="rank"
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your rank"
            required
          />
        </div>

        {/* Entry Type */}
        <div className="flex flex-col">
          <label htmlFor="entryType" className="text-lg font-medium text-gray-700">
            Entry Type
          </label>
          <select
            id="entryType"
            name="entryType"
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Entry Type</option>
            <option value="regular">Regular</option>
            <option value="lateral">Lateral</option>
          </select>
        </div>

        {/* Extracurricular Activities */}
        <div className="flex flex-col">
          <label htmlFor="extracurricular" className="text-lg font-medium text-gray-700">
            Extracurricular Activities
          </label>
          <textarea
            id="extracurricular"
            name="extracurricular"
            className="mt-2 p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your extracurricular activities (optional)"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Predict Course
          </button>
        </div>
      </div>
    </form>
  </div>
</section>
<footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Subscribe Our Newsletter</h3>
            <p>You can opt out of our newsletters at any time. See our <a href="#" className="text-blue-400">privacy policy</a>.</p>
            <form className="flex items-center">
              <input type="email" className="px-4 py-2 rounded-l-md border border-gray-300" placeholder="Enter email here..." />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                <i className="fa fa-paper-plane-o"></i>
              </button>
            </form>
            <img src="images/payments.png" alt="Payments" className="mt-4 w-full max-w-xs mx-auto" />
          </div>

          {/* Join Us Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Join us today</h3>
            <p>Would you like to earn your profits by joining our team? Join us without losing time.</p>
            <a href="/login.js" className="text-blue-400 hover:underline">Fill your form now!</a>
          </div>

          {/* Popular Tags Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Popular Tags</h3>
            <ul className="list-inline">
              {['course', 'B.Tech', 'BCA', 'B.Com', 'BBA', 'MBA',].map((tag, index) => (
                <li key={index} className="inline-block mr-2 mb-2">
                  <a href="#" className="text-blue-400 hover:underline">{tag}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Support</h3>
            <ul>
              {['Terms of Use', 'Copyrights', 'Create a Ticket', 'Pricing & Plans', 'Careers', 'Trademark'].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-blue-400 hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-gray-400 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="mr-4">
              <img src="images/logo.png" alt="Logo" className="h-8" />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;
