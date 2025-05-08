'use client';

import { useCat, useHasHydrated } from '@/hooks';

import Image from 'next/image';

export default function ClientCat({ initialUrl }: { initialUrl: string }) {
  const { catUrl, loading, fetchCat } = useCat({ cache: 'no-store' });
  const hydrated = useHasHydrated();

  const url = hydrated ? (catUrl || initialUrl) : initialUrl;

  return (
    <>
      <Image
        src={url}
        alt="Cat"
        width={600}
        height={400}
        className="max-w-md rounded shadow"
        priority
        loading="eager"
      />

      <button
        onClick={fetchCat}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white font-bold tracking-tight transition cursor-pointer"
      >
        Next Cat
      </button>

      {loading && <p className="text-gray-500 text-sm mt-2">Loading...</p>}
    </>
  );
}