"use client";

import { useQuoteStore } from "@/store/useQuoteStore";

export default function QuoteSearch() {
  const search = useQuoteStore((s) => s.search);
  const setSearch = useQuoteStore((s) => s.setSearch);

  return (
    <input
      type="text"
      placeholder="Поиск по тексту или автору..."
      className="input input-bordered w-full"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}