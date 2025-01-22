'use client';

import Image from "next/image";
import Link from "next/link";

export default function OrderCompletedPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F6F5FF] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">Order Completed</h1>
          <div className="text-sm">
            <Link href="/" className="text-gray-600">Home</Link>
            <span className="mx-2">.</span>
            <Link href="/pages" className="text-gray-600">Pages</Link>
            <span className="mx-2">.</span>
            <span className="text-pink-500">Order Completed</span>
          </div>
        </div>
      </div>

      {/* Order Completed Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Clock Icon */}
          <div className="mb-8 relative">
            <div className="w-24 h-24 mx-auto bg-[#F6F5FF] rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-[#151875]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            {/* Checkmark Badge */}
            <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-1 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h2 className="text-3xl font-bold text-[#151875] mb-6">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Thank you for your order! Your order is being processed and will be completed within 3-6
            hours. You will receive an email confirmation when your order is completed.
          </p>

          {/* Continue Shopping Button */}
          <Link 
            href="/"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded hover:bg-pink-600 transition-colors"
          >
            Continue Shopping
          </Link>

          {/* Mobile Icon */}
          <div className="mt-12">
            <div className="w-16 h-16 mx-auto">
              <svg 
                className="w-full h-full text-pink-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-5 ml-80 gap-8 items-center opacity-50">
          <Image
            src="/logosss.jpg"
            alt="Company logos"
            width={800}
            height={100}
            className="col-span-2 md:col-span-5 object-contain"
          />
        </div>
      </div>
    </main>
  );
}
