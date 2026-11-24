import { fetchQuotes } from "@/lib/quotes";
import QuoteList from "@/components/QuoteList";

export default async function HomePage() {
  const initialData = await fetchQuotes({ limit: 10, skip: 0 });

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-base-content">Цитаты</h1>
      </div>
      <QuoteList initialData={initialData} />
    </main>
  );
}