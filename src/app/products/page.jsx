import Link from "next/link";
import products from "@/mock/products.json";

export default function ProductList() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-bold">${p.price}</p>
            <Link href={`/products/${p.id}`} className="text-blue-500 underline">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
