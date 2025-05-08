import type { Metadata } from 'next';
import { fetchCat } from '@/utils/fetchCat';
import BackLink from "@/components/BackLink";

export const metadata: Metadata = {
  title: 'SSG Cat',
  description: 'A cat fetched at build time using Static Site Generation',
};

export default async function SSGPage() {
  const cat = await fetchCat({
    cache: 'force-cache',
  });

  return (
    <div
      className="relative min-h-screen bg-black text-white font-mono text-lg tracking-tight px-8 py-6 flex flex-col items-center gap-6">
      <div className="absolute top-6 left-6">
        <BackLink />
      </div>
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <span className="text-3xl">📦</span>
        SSG: Static Cat at Build Time
      </h1>

      {/* Картинка кота */}
      <img
        src={cat.url}
        alt="Cat"
        className="max-w-md rounded shadow"
      />

      <p className="text-sm text-gray-400">
        This cat was fetched at <strong>build time</strong>.
      </p>
    </div>
  );
}