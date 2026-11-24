const BASE_URL = "https://dummyjson.com";

export async function fetchQuotes({ limit = 10, skip = 0 } = {}) {
  const res = await fetch(`${BASE_URL}/quotes?limit=${limit}&skip=${skip}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Не удалось загрузить цитаты");
  return res.json();
}

export async function fetchQuoteById(id) {
  const res = await fetch(`${BASE_URL}/quotes/${id}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Ошибка загрузки цитаты");
  return res.json();
}

export async function createQuoteOnServer(data) {
  try {
    const res = await fetch(`${BASE_URL}/quotes/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("API read-only");
    return await res.json();
  } catch (error) {
    return {
      id: Math.floor(Math.random() * 10000) + 1000,
      quote: data.quote,
      author: data.author,
    };
  }
}

export async function updateQuoteOnServer(id, data) {
  try {
    const res = await fetch(`${BASE_URL}/quotes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("API read-only");
    return await res.json();
  } catch (error) {
    return { id: Number(id), quote: data.quote, author: data.author };
  }
}

export async function deleteQuoteOnServer(id) {
  try {
    const res = await fetch(`${BASE_URL}/quotes/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("API read-only");
    return await res.json();
  } catch (error) {
    return { id: Number(id), isDeleted: true };
  }
}