import { create } from "zustand";

export const useQuoteStore = create((set) => ({
  search: "",
  setSearch: (search) => set({ search }),

  quotes: [],
  setQuotes: (quotes) => set({ quotes }),
  addQuote: (quote) => set((state) => ({ quotes: [quote, ...state.quotes] })),
  updateQuote: (id, updated) =>
    set((state) => ({
      quotes: state.quotes.map((q) => (q.id === id ? { ...q, ...updated } : q)),
    })),
  removeQuote: (id) =>
    set((state) => ({
      quotes: state.quotes.filter((q) => q.id !== id),
    })),
}));