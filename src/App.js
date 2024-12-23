import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Universities from './pages/universities';
import About from './pages/about';
import Contact from './pages/contact';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        {/* Header with Navigation Links */}
        <header className="absolute top-0 left-0 w-full px-6 py-4 bg-black">
          <nav className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">ADMIGOAL</h1>
            <ul className="flex space-x-6 text-white">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/universities" className="hover:text-gray-300">
                  Universities
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-gray-300">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes for Pages */}
        <div className="container mx-auto p-4 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
