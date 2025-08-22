"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

// Small inline spinner component
function Spinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

async function fetchProducts() {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default function HighlightProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // stop loading once fetch is done
      }
    }
    loadProducts();
  }, []);

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="min-h-screen p-8 text-white bg-slate-900">
      <h1 className="text-3xl font-bold text-center mb-10">
        Highlighted Products
      </h1>

      {/* Loading Spinner */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={product.img || "/placeholder.png"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-slate-800 flex flex-col justify-between h-48">
                  <div>
                    <h2 className="text-lg font-semibold truncate mb-1">
                      {product.name}
                    </h2>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Price + Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-sky-900 font-bold text-lg">
                      ${product.price}
                    </p>
                    <Link
                      href={`/products/${product._id}`}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center text-white mt-10 space-x-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-2 cursor-pointer rounded-lg border border-gray-500 text-sm font-medium transition hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-lg border border-gray-500 text-sm font-medium transition hover:bg-gray-700 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
