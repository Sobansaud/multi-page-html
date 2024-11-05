import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex">
            <Link to="/" className="text-red-800 hover:bg-blue-600 p-2 rounded">Home</Link>
            <Link to="/about" className="text-white hover:bg-blue-600 p-2 rounded">About</Link>
            <Link to="/skills" className='text-white hover:bg-blue-600 p-2 rounded'>Skills</Link>
            <Link to="/contact" className="text-white hover:bg-blue-600 p-2 rounded">Contact</Link>
            
        </nav>
    );
};

export default Navbar;
