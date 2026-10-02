import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const COLLECTION = "linkClicks";

type LinkClickDoc = {
  _id: string;
  count: number;
};

export async function GET() {
  const client = await clientPromise;
  const docs = await client
    .db()
    .collection<LinkClickDoc>(COLLECTION)
    .find({})
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json({ counts });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const href = typeof body?.href === "string" ? body.href : null;

  if (!href) {
    return NextResponse.json({ error: "href is required" }, { status: 400 });
  }

  const client = await clientPromise;
  const result = await client
    .db()
    .collection<LinkClickDoc>(COLLECTION)
    .findOneAndUpdate(
      { _id: href },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return NextResponse.json({ href, count: result?.count ?? 1 });
}
