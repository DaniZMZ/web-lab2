// src/app/quotes/[id]/page.js
import { fetchQuoteById } from "@/lib/quotes";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function QuotePage({ params }) {
  const { id } = await params; 
  const quote = await fetchQuoteById(id);

  if (!quote) notFound();

  return (
    <main className="container mx-auto p-4 max-w-2xl mt-8">
      <Link href="/" className="btn btn-ghost mb-4">
        ← Назад к списку
      </Link>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <blockquote className="text-2xl italic text-base-content">
            “{quote.quote}”
          </blockquote>
          <p className="text-right font-semibold text-base-content/80">
            — {quote.author}
          </p>
        </div>
      </div>
    </main>
  );
}