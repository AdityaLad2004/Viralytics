import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
        {/* Navbar */}
        <nav className="bg-violet-600 shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex items-center">
              {/* Product logo and name */}
              <span className="text-xl font-bold text-gray-800 mr-4">
                <Link to="/">🚀 Viralytics</Link>
              </span>
            </div>
            <div className="flex items-center">
              
              <Link to="/teams" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Teams
              </Link>

              <Link to="/dashboard" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </Link>
            </div>
          </div>
        </nav>
        </div>

        

  )
}

export default Navbar