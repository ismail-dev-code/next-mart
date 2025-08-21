import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function GET() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("emaJohnDB"); 
    const collection = database.collection("products");

    const products = await collection.find({}).toArray();
    await client.close();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const product = await req.json();
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("emaJohnDB");
    const collection = database.collection("products");

    const result = await collection.insertOne(product);
    await client.close();

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to create product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}