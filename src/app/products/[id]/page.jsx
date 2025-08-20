import products from "@/mock/products.json";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-xl font-bold">${product.price}</p>
    </div>
  );
}
