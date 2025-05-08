'use client';

import Link from 'next/link';

export default function BackLink({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center text-blue-400 hover:underline text-base">
      ← Back to Overview
    </Link>
  );
}
