'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/contexts/CartContext"; // Import the useCart hook
import { urlFor } from "@/sanity/lib/image";

export default function ShippingPage() {
  const [keepUpdated, setKeepUpdated] = useState(false);
  const { cart } = useCart(); // Use the useCart hook to get the cart state

  // Calculate subtotal and total
  const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.stock || 1)), 0);
  const total = subtotal + 6.00; // Adding shipping cost

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Hekto Demo</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              
              {/* Email Input */}
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email or mobile phone number"
                  className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                />
              </div>

              {/* Keep me updated checkbox */}
              <div className="mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={keepUpdated}
                    onChange={(e) => setKeepUpdated(e.target.checked)}
                    className="form-checkbox text-pink-500"
                  />
                  <span className="text-sm text-gray-600">
                    Keep me up to date on news and exclusive offers
                  </span>
                </label>
              </div>

              {/* Shipping Address */}
              <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full p-3 border rounded focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              {/* Continue Button */}
              <div className="mt-8">
                <Link 
                  href="/order-completed"
                  className="inline-block bg-pink-500 text-white px-8 py-3 rounded hover:bg-pink-600 transition-colors"
                >
                  Continue Shipping
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-[#F4F4FC] p-6 rounded-lg">
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item._id} className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-white rounded">
                      <Image
                        src={item.image ? urlFor(item.image).url() : '/default-image.png'}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.stock || 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs text-gray-500">
                       
                      </p>
                    </div>
                    <span className="font-medium">
                      ${(item.price * (item.stock || 1)).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotals:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Totals:</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500">
                  ✓ Shipping & taxes calculated at checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}