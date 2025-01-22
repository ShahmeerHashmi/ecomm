'use client';

import Image from "next/image";
import { useCart } from "@/app/contexts/CartContext"; // Import the useCart hook

import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client"; // Import the Sanity client
import { Card } from "../ui/card";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { FaCartPlus, FaHeart } from 'react-icons/fa'; // Import icons from react-icons

export interface Product {
  _id: '',
  image: '',
  name: '',
  price: 0,
  description: '',
  category: '',
  rating: 0,
  stock: 0,
  };


const LatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log('Fetching featured products...');
      const query = groq`*[_type == "product" && isFeaturedProduct == true]{
        _id,
        name,
        price,
        description,
        category,
        image,
        rating {
          rate,
          count
        }
      }`;
      try {
        const data = await client.fetch(query);
        console.log('Fetched products:', data);
        setLatestProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { addToCart } = useCart();

  if (loading) {
    return (
      <section className="container mx-auto py-8 sm:py-16 px-4">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Latest Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            New arrival
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Best seller
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Featured
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Special offer
          </button>
        </div>
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Card key={index} className="p-3 sm:p-4 animate-pulse">
              <div className="h-48 sm:h-60 relative mb-3 sm:mb-4 bg-gray-200 rounded-lg"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-8 sm:py-16 px-4">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Latest Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            New arrival
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Best seller
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Featured
          </button>
          <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
            Special offer
          </button>
        </div>
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

 

  return (
    <section className="container mx-auto py-8 sm:py-16 px-4">
      <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
        Latest Products
      </h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
        <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
          New arrival
        </button>
        <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
          Best seller
        </button>
        <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
          Featured
        </button>
        <button className="text-sm sm:text-base text-secondary hover:text-accent transition-colors">
          Special offer
        </button>
      </div>
      <div className="grid grid-cols-2 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mx-4 md:mx-8 lg:mx-16">
  {latestProducts.slice(0, 6).map((product) => (
    <Card
      key={product._id}
      className="relative group hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl w-full"
    >
      <Link href={`/product/${product._id}`} className="block">
        <div className="p-3 sm:p-4 md:p-6 flex flex-col h-full">
          {/* Image Container */}
          <div className="relative h-16 sm:h-20 md:h-28 w-full mb-2 sm:mb-4 md:mb-6 rounded-lg overflow-hidden">
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              fill
              className="object-contain group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 360px) 320px, (max-width: 450px) 400px, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 text-gray-900">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Price and Rating */}
          <div className="mt-auto flex justify-between items-center">
            <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-accent">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="text-xs sm:text-sm md:text-base text-gray-600 mr-1">
               
              </span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>

      {/* Add to Cart and Wishlist Icons */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
         onClick={() => addToCart(product)}
          className="p-1 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <FaCartPlus className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent the Link from redirecting
            e.stopPropagation(); // Stop event propagation
            console.log("Add to Wishlist:", product._id); // Add your wishlist logic here
          }}
          className="p-1 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 ml-1 sm:ml-2"
        >
          <FaHeart className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </Card>
  ))}
</div>
    </section>
  );
};

export default LatestProducts;