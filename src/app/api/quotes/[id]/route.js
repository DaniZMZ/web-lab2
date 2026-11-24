import { fetchQuoteById } from "@/lib/quotes";
import { NextResponse } from "next/server";

export async function GET(_request, { params }) {
  const quote = await fetchQuoteById(params.id);
  if (!quote) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(quote);
}