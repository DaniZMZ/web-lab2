"use client";

export default function Error({ error, reset }) {
  return (
    <div className="alert alert-error m-4 max-w-xl mx-auto mt-10">
      <span>Ошибка: {error.message}</span>
      <button className="btn btn-sm" onClick={() => reset()}>
        Попробовать снова
      </button>
    </div>
  );
}