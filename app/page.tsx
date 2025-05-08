import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-black text-white font-mono text-lg tracking-tight">
      <h1 className="text-3xl font-bold mb-6">🔧 React Rendering Modes</h1>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <Link href="/csr" className="text-blue-400 hover:underline">
            Client Side Rendering (CSR)
          </Link>
        </li>
        <li>
          <Link href="/ssg" className="text-blue-400 hover:underline">
            Static Site Generation (SSG)
          </Link>
        </li>
        <li>
          <a href="/ssg-csr" className="text-blue-400 hover:underline">CSR + SSG Hybrid</a> {/* ← вот он */}
        </li>
        <li>
          <Link href="/ssr" className="text-blue-400 hover:underline">
            Server Side Rendering (SSR)
          </Link>
        </li>
        <li>
          <Link href="/isr" className="text-blue-400 hover:underline">
            Incremental Static Regeneration (ISR)
          </Link>
        </li>
        <li>
          <Link href="/rsc" className="text-blue-400 hover:underline">
            React Server Components (RSC)
          </Link>
        </li>
        <li>
          <Link href="/streaming" className="text-blue-400 hover:underline">
            Streaming SSR
          </Link>
        </li>
      </ul>
    </main>
  );
}