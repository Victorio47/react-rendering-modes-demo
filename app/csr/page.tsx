'use client';
import BackLink from '@/components/BackLink';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CSRPage() {
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  const fetchCat = async () => {
    setLoading(true);
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    setCatUrl(data[0]?.url);
    setLoading(false);
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    console.log("🐾 useEffect: fetching initial cat");
    fetchCat();
  }, []);

  return (
    <div
      className="relative min-h-screen bg-black text-white font-mono text-lg tracking-tight px-8 py-6 flex flex-col items-center gap-6">
      {/* Абсолютная обёртка */}
      <div className="absolute top-6 left-6">
        <BackLink/>
      </div>

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
          onLoad={() => setLoading(false)}
          className={`max-w-md rounded shadow transition-opacity duration-300 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      <button
        onClick={fetchCat}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-bold tracking-tight transition"
      >
        Next Cat
      </button>
    </div>
  );
}
