import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function GET(req, { params }) {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("emaJohnDB");
    const collection = database.collection("products");

    const product = await collection.findOne({ _id: new ObjectId(params.id) });
    await client.close();

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("emaJohnDB");
    const collection = database.collection("products");

    const result = await collection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: body }
    );

    await client.close();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to update product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("emaJohnDB");
    const collection = database.collection("products");

    const result = await collection.deleteOne({ _id: new ObjectId(params.id) });
    await client.close();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to delete product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
