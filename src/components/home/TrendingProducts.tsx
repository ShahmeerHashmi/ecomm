"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { FaCartPlus, FaHeart } from 'react-icons/fa'; // Import icons from react-icons

export interface Product {
 _id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
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
        setTrendingProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  

  if (loading) {
    return (
      <section className="py-8 sm:py-16">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Trending Products
        </h2>
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Card key={index} className="p-3 sm:p-4 animate-pulse">
              <div className="h-48 sm:h-60 relative mb-3 sm:mb-4 bg-gray-200 rounded-lg"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </Card>
          ))}
        </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-8 sm:py-16 px-4">
        <h2 className="text-center text-xl sm:text-2xl font-extrabold text-primary-dark mb-6 sm:mb-12">
          Trending Products
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
        Trending Products
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
        {trendingProducts.slice(0, 6).map((product) => (
          <Card
            key={product._id}
            className="relative group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
          >
            <Link href={`/product/${product._id}`} className="block">
              <div className="p-3 sm:p-4 flex flex-col h-full">
                <div className="relative h-40 sm:h-48 w-full mb-3 sm:mb-4">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 360px) 320px, (max-width: 450px) 400px, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {product.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <span className="font-bold text-accent text-sm sm:text-base">${product.price}</span>
                  <div className="flex items-center">
                    <span className="text-xs sm:text-sm text-gray-600 mr-1">
                      {product.rating?.rate ?? 'N/A'}
                    </span>
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

            {/* Add to Cart and Wishlist Icons */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
                <FaCartPlus className="text-gray-700 w-5 h-5" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 ml-2">
                <FaHeart className="text-gray-700 w-5 h-5" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};


export default TrendingProducts;