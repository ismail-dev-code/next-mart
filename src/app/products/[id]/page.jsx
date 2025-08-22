
import React from "react";
import Swal from "sweetalert2";

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

  const handleOrder = () => {
    Swal.fire({
      title: "Success!",
      text: "You have successfully added this item to your cart for payment.",
      icon: "success",
      confirmButtonColor: "#1e293b",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-8">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left: Product Image */}
        <div className="md:w-1/2 w-full bg-gray-200">
          <img
            src={product.img || "/placeholder.png"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description || "No description available."}
            </p>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-semibold">Seller:</span> {product.seller}
              </p>
              <p>
                <span className="font-semibold">Price:</span>{" "}
                <span className="text-sky-600 font-bold text-lg">
                  ${product.price}
                </span>
              </p>
              <p>
                <span className="font-semibold">Stock:</span> {product.stock}
              </p>
              <p>
                <span className="font-semibold">Ratings:</span> ⭐{" "}
                {product.ratings} ({product.ratingsCount} reviews)
              </p>
              <p>
                <span className="font-semibold">Shipping:</span> $
                {product.shipping}
              </p>
            </div>
          </div>

          {/* Order Now Button */}
          <div className="mt-8">
            <button
            //   onClick={handleOrder}
              className="w-full py-3 rounded-lg bg-slate-900 cursor-pointer text-white font-semibold hover:bg-slate-800 transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
