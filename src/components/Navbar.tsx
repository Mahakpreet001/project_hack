import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <Car className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">GoCab</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/company" className="hover:text-gray-300">Company</Link>
            <Link to="/safety" className="hover:text-gray-300">Safety</Link>
            <Link to="/help" className="hover:text-gray-300">Help</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-gray-300">Log in</Link>
          <Link to="/signup" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}