import { fetchCat } from '@/utils/fetchCat';
import { Metadata } from 'next';
import ClientCat from './ClientCat';
import BackLink from "@/components/BackLink";

export const metadata: Metadata = {
  title: 'SSG + CSR Cat',
  description: 'Starts as SSG, then adds CSR with interactivity',
};

export const dynamic = 'force-static';

export default async function SSGCSRPage() {
  const cat = await fetchCat({});

  return (
    <div className="relative min-h-screen bg-black text-white font-mono text-lg tracking-tight px-8 py-6 flex flex-col items-center gap-6">
      <div className="absolute top-6 left-6">
        <BackLink />
      </div>
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <span className="text-3xl">🧬</span>
        SSG + CSR: Static First, Interactive Later
      </h1>

      <ClientCat initialUrl={cat.url} />
    </div>
  );
}
