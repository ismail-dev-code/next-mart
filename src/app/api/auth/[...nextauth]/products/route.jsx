import { NextResponse } from "next/server";

let products = [
  { id: 1, name: "Laptop", description: "High performance laptop", price: 1200 },
  { id: 2, name: "Phone", description: "Latest smartphone", price: 800 },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req) {
  const body = await req.json();
  const newProduct = { id: products.length + 1, ...body };
  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
