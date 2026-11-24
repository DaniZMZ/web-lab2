import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold mb-2">Цитата не найдена</h2>
      <p className="text-base-content/70 mb-4">
        Возможно, она была удалена или ID неверен.
      </p>
      <Link href="/" className="btn btn-primary">
        Вернуться к списку
      </Link>
    </div>
  );
}