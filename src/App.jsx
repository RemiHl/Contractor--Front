import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import MouseShadow from './components/MouseShadow';
import LoginPage from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Header />
      <MouseShadow />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;