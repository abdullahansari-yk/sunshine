
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const defaults = {
  _id: "home",
  title: "Sunshine | Smart Farming Solutions",
  description: "Discover Sunshine's smart farming solutions for farmers.",
  ogImageUrl: "",
};

async function getSeoCollection() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB || "sunshine");
  return db.collection("Seo_metadata");
}

export async function GET() {
  try {
    const collection = await getSeoCollection();

    await collection.updateOne(
      { _id: "home" },
      { $setOnInsert: defaults },
      { upsert: true }
    );

    const seo = await collection.findOne(
      { _id: "home" },
      { projection: { _id: 0 } }
    );

    return NextResponse.json(seo);
  } catch (error) {
    console.error("SEO GET error:", error);
    return NextResponse.json(
      { error: "Failed to load SEO settings" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const password = request.headers.get("x-cms-password");

    if (
      !process.env.CMS_ADMIN_PASSWORD ||
      password !== process.env.CMS_ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        { error: "Invalid admin password" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const title = body.title?.trim();
    const description = body.description?.trim();
    const ogImageUrl = body.ogImageUrl?.trim() || "";

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const collection = await getSeoCollection();

    await collection.updateOne(
      { _id: "home" },
      {
        $set: {
          title,
          description,
          ogImageUrl,
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SEO PUT error:", error);
    return NextResponse.json(
      { error: "Failed to save SEO settings" },
      { status: 500 }
    );
  }
}
