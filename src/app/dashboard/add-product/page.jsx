"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProductPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const newProduct = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
    };

    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
    });

    setLoading(false);
    router.push("/products");
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Product Name" required className="border p-2" />
        <textarea name="description" placeholder="Description" required className="border p-2" />
        <input name="price" type="number" placeholder="Price" required className="border p-2" />
        <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
