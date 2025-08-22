import React from "react";

async function fetchProduct(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await fetchProduct(params.id);

  return (
    <div className="min-h-screen p-8 flex justify-center items-center bg-gray-50">
      <div className="max-w-lg w-full border rounded-xl p-6 shadow-md bg-white">
        <img
          src={product.img || "/placeholder.png"}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-blue-600 font-bold text-xl">${product.price}</p>
      </div>
    </div>
  );
}
