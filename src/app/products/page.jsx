import React from "react";

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ProductsList() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img
            src={product.img || "/placeholder.png"}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-blue-600 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
