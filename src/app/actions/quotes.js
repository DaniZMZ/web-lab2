"use server";

import {
  createQuoteOnServer,
  updateQuoteOnServer,
  deleteQuoteOnServer,
} from "@/lib/quotes";

export async function createQuote(prevState, formData) {
  const quote = formData.get("quote")?.toString().trim();
  const author = formData.get("author")?.toString().trim();

  if (!quote || !author) return { error: "Заполните оба поля" };

  try {
    const data = await createQuoteOnServer({ quote, author });
    return { success: true, data };
  } catch (error) {
    return { error: error.message };
  }
}

export async function updateQuote(prevState, formData) {
  const id = formData.get("id");
  const quote = formData.get("quote")?.toString().trim();
  const author = formData.get("author")?.toString().trim();

  if (!quote || !author) return { error: "Заполните оба поля" };

  try {
    const data = await updateQuoteOnServer(id, { quote, author });
    return { success: true, data };
  } catch (error) {
    return { error: error.message };
  }
}

export async function deleteQuote(id) {
  try {
    await deleteQuoteOnServer(id);
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}