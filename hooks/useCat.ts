import { useState, useCallback } from 'react';
import { fetchCat } from '@/utils/fetchCat';

type Options = Parameters<typeof fetchCat>[0];

export function useCat(options: Options = {}) {
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getCat = useCallback(async () => {
    setLoading(true);
    const cat = await fetchCat(options);
    setCatUrl(cat?.url);
    setLoading(false);
  }, [JSON.stringify(options)]);

  return { catUrl, loading, fetchCat: getCat };
}

