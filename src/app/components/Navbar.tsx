'use client';

import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-background shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-secondary">
            Hekto
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-secondary hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/Shop" 
              className="text-secondary-light hover:text-accent transition-colors"
            >
              Shop
            </Link>
            <Link 
              href="/Product" 
              className="text-secondary-light hover:text-accent transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/blog" 
              className="text-secondary-light hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-secondary-light hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link 
              href="/Contact" 
              className="text-secondary-light hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Search, Cart & Login */}
          <div className="hidden md:flex items-center gap-6">
            <SearchBar />
            <Link href="/cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-light hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </Link>
            <Link 
              href="/Login"
              className="text-secondary-light hover:text-accent transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="mb-4">
              <SearchBar />
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-secondary hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/Shop" className="text-secondary-light hover:text-accent transition-colors">
                Shop
              </Link>
              <Link href="/Product" className="text-secondary-light hover:text-accent transition-colors">
                Products
              </Link>
              <Link href="/blog" className="text-secondary-light hover:text-accent transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-secondary-light hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/Contact" className="text-secondary-light hover:text-accent transition-colors">
                Contact
              </Link>
              <Link href="/cart" className="flex items-center gap-2 text-secondary-light hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
                <span className="bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  5
                </span>
              </Link>
              <Link href="/Login" className="flex items-center gap-2 text-secondary-light hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};