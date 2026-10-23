
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { defaultSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB || "sunshine");

  return db.collection("site_content");
}

export async function GET() {
  try {
    const collection = await getCollection();

    await collection.updateOne(
      { _id: "homepage" },
      { $setOnInsert: defaultSiteContent },
      { upsert: true }
    );

    // const content = await collection.findOne({ _id: "homepage" });
    const defaults = defaultSiteContent;

    await collection.updateOne(
      { _id: "homepage", stats: { $exists: false } },
      { $set: { stats: defaults.stats } }
    );

    await collection.updateOne(
      { _id: "homepage", cropSection: { $exists: false } },
      { $set: { cropSection: defaults.cropSection } }
    );

    const content = await collection.findOne({ _id: "homepage" });
    // 

    return NextResponse.json(
      {
        navbar: content.navbar,
        hero: content.hero,
        stats: content.stats,
        cropSection: content.cropSection,
      },
      {
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch (error) {
    console.error("Site content GET error:", error);

    return NextResponse.json(
      { error: "Failed to load site content" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid content" },
        { status: 400 }
      );
    }

    const allowedSections = [
      "navbar",
      "hero",
      "stats",
      "cropSection",
    ];
    const updates = {};

    for (const section of allowedSections) {
      if (body[section] === undefined) continue;

      if (
        !body[section] ||
        typeof body[section] !== "object" ||
        Array.isArray(body[section])
      ) {
        return NextResponse.json(
          { error: `Invalid ${section} content` },
          { status: 400 }
        );
      }

      updates[section] = body[section];
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No content provided" },
        { status: 400 }
      );
    }

    const collection = await getCollection();

    await collection.updateOne(
      { _id: "homepage" },
      {
        $set: {
          ...updates,
          updatedAt: new Date(),
        },
        $setOnInsert: { _id: "homepage" },
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Site content PUT error:", error);

    return NextResponse.json(
      { error: "Failed to save site content" },
      { status: 500 }
    );
  }
}
