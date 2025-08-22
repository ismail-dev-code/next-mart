import Link from "next/link";
import React from "react";

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store", // ensures fresh data
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ProductsList() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen p-8 bg-slate-900 text-white">
      <h1 className="text-3xl font-bold text-center mb-10">
        All Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
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
                <p className="text-blue-600 font-bold text-lg">
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
    </div>
  );
}
