import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-teal-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold"> Flight Dashboard</div>

        <div className="space-x-4">
          <Link
            to="/"
            className={`px-4 py-2 rounded hover:bg-teal-700 ${
              location.pathname === '/' ? 'bg-teal-800' : ''
            }`}
          >
            Home
          </Link>

          <Link
            to="/flight-add"
            className={`px-4 py-2 rounded hover:bg-teal-700 ${
              location.pathname === '/flight-add' ? 'bg-teal-800' : ''
            }`}
          >
            Add Flight
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
