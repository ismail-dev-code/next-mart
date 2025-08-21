"use client";

import React, { useState, useEffect } from "react";

async function fetchProducts() {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default function HighlightProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
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
      <h1 className="text-3xl font-bold text-center mb-8">Highlighted Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-slate-900 gap-8">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-2xl p-5 shadow-md hover:shadow-xl transition bg-white"
          >
            <img
              src={product.img || "/placeholder.png"}
              alt={product.name}
              className="w-full h-56 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-1 line-clamp-1">{product.name}</h2>
            <p className="text-gray-500 mb-3 text-sm line-clamp-2">{product.description}</p>
            <p className="text-blue-600 font-bold text-lg">${product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center text-white mt-10 space-x-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-2 rounded-lg border text-sm font-medium transition
                     hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-6 py-2 rounded-lg border text-sm font-medium transition
                     hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
