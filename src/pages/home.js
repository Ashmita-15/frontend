import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const greySection = document.getElementById('grey-section');
      if (greySection) {
        const rect = greySection.getBoundingClientRect();
        const threshold = 150; // Start animation when 150px of the section is visible
        if (rect.top <= window.innerHeight - threshold && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }

      const textSection = document.getElementById('text-section');
      if (textSection) {
        const rect = textSection.getBoundingClientRect();
        const threshold = 150;
        if (rect.top <= window.innerHeight - threshold && rect.bottom >= 0) {
          setIsTextVisible(true);
        }
      }

      const videoSection = document.getElementById('video-section');
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVideoVisible(true);
        } else {
          setIsVideoVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <header className="bg-black text-white py-4 shadow-md">
        <nav className="flex justify-end max-w-screen-xl mx-auto px-4">
          <div className="space-x-6">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/distraction-detection" className="hover:text-gray-300">Distraction Detection</a>
            <a href="/login" className="hover:text-gray-300">Login</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <div
        className="relative min-h-screen bg-gradient-to-r from-blue-800 to-black text-white"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left Aligned Text */}
        <div className="absolute top-[6%] left-10">
          <h1 className="text-7xl font-bold leading-none">
            <span className="block">Live</span>
            <span className="block">Distraction</span>
            <span className="block">Detector</span>
          </h1>
          <p className="mt-6 text-xl max-w-md">
            An intelligent solution for detecting distractions and improving focus while learning.
          </p>
        </div>
        {/* Centered Blue Button at the Bottom */}
        <div className="absolute bottom-10 left-[51%] transform -translate-x-1/2">
          <a
            href="/distraction-detection"
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="bg-gray-500 w-full h-3/4">.</div>
      {/* Grey Section with Cards */}
      <div id="grey-section" className="bg-gradient-to-r from-blue-900 to-black py-12">
        <div
          className={`max-w-screen-xl mx-auto p-10 rounded-md transition-transform duration-500 ${
            isVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between space-x-6">
            {/* Card 1 */}
            <div className="bg-white text-black w-[25%] h-[300px] p-6 rounded-md shadow-lg flex flex-col justify-between">
              <img src="/images/card1.jpg" alt="Card 1" className="h-[200px] object-cover mb-4 rounded-md" />
              <h2 className="text-xl font-bold">Do you get distracted every time you sit to study?</h2>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black w-[25%] h-[300px] p-6 rounded-md shadow-lg flex flex-col justify-between">
              <img src="/images/card2.jpg" alt="Card 2" className="h-[200px] object-cover mb-4 rounded-md" />
              <h2 className="text-xl font-bold">Calls/Messages/Texts— all these attract you to use your phone?</h2>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-black w-[25%] h-[300px] p-6 rounded-md shadow-lg flex flex-col justify-between">
              <img src="/images/card3.jpg" alt="Card 3" className="h-[200px] object-cover mb-4 rounded-md" />
              <h2 className="text-xl font-bold">Do you feel sleepy while studying?</h2>
            </div>

            {/* Card 4 */}
            <div className="bg-white text-black w-[25%] h-[300px] p-6 rounded-md shadow-lg flex flex-col justify-between">
              <img src="/images/card4.jpg" alt="Card 4" className="h-[200px] object-cover mb-4 rounded-md" />
              <h2 className="text-xl font-bold">Need solutions for coping with these distractions?</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 w-full h-3/4">.</div>
      {/* Text Section */}
      <div id="text-section" className="bg-gray-800 py-16">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-7xl font-bold text-center leading-tight">
            {['Let’s', 'overcome', 'these distractions', 'TOGETHER!'].map((word, index) => (
              <span
                key={index}
                className={`block transform transition-transform duration-500 ${
                  isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div className="bg-gray-500 w-full h-3/4">.</div>
      {/* Video Section */}
      <div id="video-section" className="bg-gray-900 py-16 px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9 bg-black border-4 border-gray-700 rounded-lg overflow-hidden" style={{ marginLeft: '40px' }}>
              {isVideoVisible && (
                <video
                  className="w-full h-full object-cover"
                  src="/videos/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </div>
          </div>
            {/* Text and Button on the Right */}
         <div className="w-full lg:w-1/2 text-white" style={{ marginLeft: '300px' }}>
          <h1 className="text-6xl font-bold leading-tight mb-6">
          <span className="block" style={{ marginLeft: '20px' }}>Solutions</span>
          <span className="block">to help you</span>
          <span className="block">get stronger</span>
          </h1>
          <a href="/distraction-detection" className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"style={{ marginLeft: '80px' }}>
           Start your session
           </a>
         </div>
        </div>
      </div>
      <div className="bg-gray-500 w-full h-3/4">.</div>
      <footer className="bg-gradient-to-r from-blue-800 to-black text-white">
  {/* Questions Section - Inline */}
  <div className="flex justify-between items-center p-4">
    <p className="mr-4">Questions? Call 000-790-345-0388</p>

    {/* Language Button - Glowy Border and Transparent Background */}
    <select
      id="language"
      name="Language Select"
      className="bg-transparent border-2 border-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      <option lang="en" label="English">English</option>
      <option lang="hi" label="Hindi">Hindi</option>
    </select>
  </div>

  {/* List of Sections Divided into Four Parts */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
    <ul className="space-y-2">
      <li><a href="/">FAQ</a></li>
      <li><a href="/">Investor Relations</a></li>
      <li><a href="/">Privacy</a></li>
      <li><a href="/">Speed Test</a></li>
    </ul>
    <ul className="space-y-2">
      <li><a href="/">Help Center</a></li>
      <li><a href="/">Jobs</a></li>
      <li><a href="/">Cookie Preferences</a></li>
      <li><a href="/">Legal Notices</a></li>
    </ul>
    <ul className="space-y-2">
      <li><a href="/">Account</a></li>
      <li><a href="/">Ways to Improve</a></li>
      <li><a href="/">Corporate Information</a></li>
      <li><a href="/">Only on our platform</a></li>
    </ul>
    <ul className="space-y-2">
      <li><a href="/">Media Centre</a></li>
      <li><a href="/">Terms of Use</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
  </div>

  {/* Netflix India Text */}
  <div className="text-center py-4">
    <p>Live Distraction Detector</p>
  </div>
</footer>

    </div>
  );
};

export default HomePage;
