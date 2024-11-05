import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Skills from './component/Skills';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-green-500">
      
        <nav className="flex bg-blue-500 p-5 ">
        
        <ul className="flex space-x-96">
            <li><Link className="text-white flex text-2xl gap-3 hover:bg-slate-500" to="/">Home</Link></li>
            <li><Link className="text-white text-2xl gap-3 hover:bg-slate-500" to="/about">About</Link></li>
            <li><Link className="text-white text-2xl gap-3 hover:bg-slate-500" to="/contact">Contact</Link></li>
            <li><Link className='text-white text-2xl gap-3 hover:bg-slate-500' to="/skills">Skills</Link></li>
          </ul>
        </nav>
      
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} /> {/* Ensure this line is present */}
          </Routes>
        </main>
        <footer className='bg-red-600 p-4 text-center text-white'>
        © Soban | All rights reserved 2024 | My Multi-Page Site
        </footer>
      </div>
      
    </Router>

  );
};

export default App;
