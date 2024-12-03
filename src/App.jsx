import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Hero from './component/HeroSection/Hero';
import Footer from './component/footer/footer';

const App = () => {
  return (
    <div className="bg-[#F1F2F4] min-h-screen">'
    '
    <BrowserRouter>
      <Navbar />
      <Hero/>
      <Footer/>

    </BrowserRouter>
    </div>
  );
};

export default App;
