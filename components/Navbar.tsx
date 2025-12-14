"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              SHIVA TRADERS
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#hero" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition-colors">Home</Link>
              <Link href="#about" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition-colors">About</Link>
              <Link href="#services" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition-colors">Services</Link>
              <Link href="#why-us" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition-colors">Why Us</Link>
              <Link href="#contact" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link href="#hero" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#about" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#services" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#why-us" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Why Us</Link>
            <Link href="#contact" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium text-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
