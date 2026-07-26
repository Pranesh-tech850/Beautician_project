import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <nav className="bg-pink-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            GlowUp ✨
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-pink-200 transition">
              Home
            </Link>

            <Link to="/services" className="hover:text-pink-200 transition">
              Services
            </Link>

            <Link to="/bookings" className="hover:text-pink-200 transition">
              My Bookings
            </Link>

            <Link to="/about" className="hover:text-pink-200 transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-pink-200 transition">
              Contact
            </Link>

            {user ? (
              <>
                <span className="font-semibold">👋 {user.name}</span>

                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/bookings">My Bookings</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
