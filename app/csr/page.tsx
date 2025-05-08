'use client';

import { useEffect } from 'react';
import { useCat } from '@/hooks';
import BackLink from "@/components/BackLink";

export default function CSRPage() {
  const { catUrl, loading, fetchCat } = useCat();

  useEffect(() => {
    fetchCat(); // первичная загрузка
  }, [fetchCat]);

  return (
    <div className="relative min-h-screen bg-black text-white font-mono text-lg tracking-tight px-8 py-6 flex flex-col items-center gap-6">
      {/* Кнопка назад */}
      <div className="absolute top-6 left-6">
        <BackLink />
      </div>

      {/* Заголовок */}
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <span className="text-3xl">😺</span>
        CSR: Random Cat Viewer
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading a cat...</p>
      ) : (
        <img
          key={catUrl}
          src={catUrl!}
          alt="Random Cat"
          className="max-w-md rounded shadow transition-opacity duration-300"
        />
      )}

      <button
        onClick={fetchCat}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-bold tracking-tight transition cursor-pointer"
      >
        Next Cat
      </button>
    </div>
  );
}