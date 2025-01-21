"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client"; // Import Sanity client
import groq from "groq"; // Import GROQ
import { urlFor } from "@/sanity/lib/image"; // Import urlFor for image URLs

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const GridPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [perPage, setPerPage] = useState<number>(12);
  const [sortBy, setSortBy] = useState<string>("best-match");
  const [view, setView] = useState<string>("grid");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products from Sanity...");
        // Define the GROQ query to fetch products
        const query = groq`*[_type == "product"]{
          _id,
          title,
          price,
          description,
          category,
          image,
          rating {
            rate,
            count
          }
        }`;

        // Fetch data from Sanity
        const data = await client.fetch(query);
        console.log("Fetched products:", data);

        // Map Sanity data to match the Product interface
        const formattedProducts = data.map((product: any) => ({
          id: product._id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: urlFor(product.image).url(), // Use urlFor to get the image URL
          rating: {
            rate: product.rating?.rate || 0,
            count: product.rating?.count || 0,
          },
        }));

        setProducts(formattedProducts);
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
      <div className="min-h-screen">
        <div className="bg-[#F6F5FF] py-6 sm:py-20">
          <div className="container mx-auto px-4 min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] sm:max-w-none">
            <h1 className="text-xl sm:text-3xl font-bold text-center sm:text-left">
              Shop Grid Default
            </h1>
            <p className="mt-2 text-sm sm:text-base text-center sm:text-left">
              Home . Pages . <span className="text-pink-500">Shop Grid Default</span>
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-6 sm:mt-12 min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] sm:max-w-none">
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="text-center sm:text-left">
              <h2 className="text-base sm:text-lg font-semibold text-[#151875]">
                Ecommerce Accessories & Fashion Items
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">Loading...</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 min-[360px]:grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: perPage }).map((_, index) => (
              <div key={index} className="animate-pulse bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="p-3 bg-[#F6F7FB]">
                  <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
                </div>
                <div className="p-3 text-center">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/4 mx-auto mb-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <div className="bg-[#F6F5FF] py-6 sm:py-20">
          <div className="container mx-auto px-4 min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] sm:max-w-none">
            <h1 className="text-xl sm:text-3xl font-bold text-center sm:text-left">
              Shop Grid Default
            </h1>
            <p className="mt-2 text-sm sm:text-base text-center sm:text-left">
              Home . Pages . <span className="text-pink-500">Shop Grid Default</span>
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-6 sm:mt-12 min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] sm:max-w-none">
          <p className="text-center text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-[#F6F5FF] py-6 sm:py-20">
        <div className="container mx-auto px-4 min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] sm:max-w-none">
          <h1 className="text-xl sm:text-3xl font-bold text-center sm:text-left">
            Shop Grid Default
          </h1>
          <p className="mt-2 text-sm sm:text-base text-center sm:text-left">
            Home . Pages . <span className="text-pink-500">Shop Grid Default</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 sm:mt-12 min-[360px]:max-w-[360px] min-[450px]:max-w-[450px] sm:max-w-none">
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="text-center sm:text-left">
            <h2 className="text-base sm:text-lg font-semibold text-[#151875]">
              Ecommerce Accessories & Fashion Items
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">About {products.length} results</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <div className="flex items-center justify-between sm:justify-start">
              <span className="text-sm">Per Page:</span>
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="ml-2 border rounded py-1 px-2 text-sm w-24"
              >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            </div>

            <div className="flex items-center justify-between sm:justify-start">
              <span className="text-sm">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="ml-2 border rounded py-1 px-2 text-sm w-36"
              >
                <option value="best-match">Best Match</option>
                <option value="price-low">Price Low to High</option>
                <option value="price-high">Price High to Low</option>
              </select>
            </div>

            <div className="flex items-center justify-between sm:justify-start">
              <span className="text-sm">View:</span>
              <div className="ml-2 flex gap-2">
                <button
                  onClick={() => setView("grid")}
                  className={`p-1.5 rounded border ${
                    view === "grid" ? "text-pink-500 border-pink-500" : "text-gray-500 border-gray-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-1.5 rounded border ${
                    view === "list" ? "text-pink-500 border-pink-500" : "text-gray-500 border-gray-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-6 ${
            view === "grid"
              ? "grid grid-cols-1 min-[360px]:grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
              : "flex flex-col space-y-4"
          }`}
        >
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} passHref>
              <div
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  view === "list" ? "sm:flex sm:mb-4" : ""
                }`}
              >
                <div
                  className={`relative p-3 bg-[#F6F7FB] ${
                    view === "list" ? "sm:w-1/3" : ""
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-[180px] sm:h-48 object-contain mx-auto"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button className="p-1.5 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button className="p-1.5 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <button className="p-1.5 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  className={`p-3 text-center ${
                    view === "list" ? "sm:w-2/3 sm:text-left sm:p-4" : ""
                  }`}
                >
                  <h3 className="text-[#151875] font-bold text-sm sm:text-base">
                    {product.title}
                  </h3>
                  <div
                    className={`flex justify-center mt-1 ${
                      view === "list" ? "sm:justify-start" : ""
                    }`}
                  >
                    {/* RatingStars component can be added here */}
                  </div>
                  <div className="mt-1 space-x-2">
                    <span className="text-[#151875] font-bold text-sm sm:text-base">
                      ${(product.price)}
                    </span>
                    <span className="text-gray-400 line-through text-xs sm:text-sm">
    {typeof product.price === "number" ? product.price : ""}
  </span>
                  </div>
                  {view === "list" && (
                    <p className="hidden sm:block mt-2 text-sm text-gray-600">
                      {product.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridPage;