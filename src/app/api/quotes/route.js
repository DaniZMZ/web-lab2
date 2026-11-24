import { fetchQuotes } from "@/lib/quotes";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? 10);
  const skip = Number(searchParams.get("skip") ?? 0);

  try {
    const data = await fetchQuotes({ limit, skip });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}