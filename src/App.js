import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import DistractionDetection from './pages/distractiondetection';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ContactPage from './pages/contact';

function App() {
  return (
    <Router>
      <div>
        

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/distraction-detection" element={<DistractionDetection />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />}  />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
