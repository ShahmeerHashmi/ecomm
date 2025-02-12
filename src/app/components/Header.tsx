"use client"

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary w-full p-2 sm:p-4">
      <div className="container mx-auto text-white">
        {/* Mobile Header */}
        <div className="flex justify-between items-center sm:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

          <div className="flex gap-2">
            <Link href="/Login" className="text-[11px] hover:text-accent-light">
              Login
            </Link>
            <span className="text-[11px]">|</span>
            <Link href="/register" className="text-[11px] hover:text-accent-light">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden pt-4 pb-2 space-y-4 border-t border-white/10 mt-2">
            <div className="flex flex-col gap-2">
              <a href="mailto:syedshahmeer@gmail.com" className="text-[11px] hover:text-accent-light">
                syedshahmeer@gmail.com
              </a>
              <a href="tel:03123607710" className="text-[11px] hover:text-accent-light">
                03123607710
              </a>
            </div>
            
            <nav className="flex flex-col gap-2">
              <Link href="/account" className="text-[11px] hover:text-accent-light">
                Account
              </Link>
              <Link href="/wishlist" className="text-[11px] hover:text-accent-light">
                Wishlist
              </Link>
              <Link href="/cart" className="text-[11px] hover:text-accent-light">
                Shopping Cart
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden sm:flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:syedshahmeer@gmail.com" className="text-sm hover:text-accent-light">
              syedshahmeer@gmail.com
            </a>
            <a href="tel: 03123607710" className="text-sm hover:text-accent-light">
              03123607710
            </a>
          </div>
          
          <div className="flex gap-6 items-center">
            <nav className="flex gap-4">
              <Link href="/account" className="text-sm hover:text-accent-light">
                Account
              </Link>
              <Link href="/wishlist" className="text-sm hover:text-accent-light">
                Wishlist
              </Link>
              <Link href="/cart" className="text-sm hover:text-accent-light">
                Shopping Cart
              </Link>
            </nav>
            
            <div className="flex gap-4">
              <Link href="/Login" className="text-sm hover:text-accent-light">
                Login
              </Link>
              <span className="text-sm">|</span>
              <Link href="/register" className="text-sm hover:text-accent-light">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};