'use client';

import { Card } from "@/components/ui/card";
import { getProductsByCategory } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export const FeaturedProducts = () => {
  const featuredProducts = getProductsByCategory('featured');

  return (
    <section className="py-8 sm:py-16">
      <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
        Featured Products
      </h2>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id}
              className="relative group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
            >
              <Link href="/product" className="block">
                <div className="p-3 sm:p-4 flex flex-col h-full">
                  <div className="relative h-40 sm:h-48 w-full mb-3 sm:mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 360px) 320px, (max-width: 450px) 400px, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{product.description}</p>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="font-bold text-accent text-sm sm:text-base">${product.price}</span>
                    <div className="flex items-center">
                      <span className="text-xs sm:text-sm text-gray-600 mr-1">{product.rating}</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Quick action buttons */}
              <div className="absolute top-2 right-2 flex flex-col gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <Link 
                  href="/product"
                  className="p-1.5 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </Link>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to wishlist functionality
                  }}
                  className="p-1.5 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart functionality
                  }}
                  className="p-1.5 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
