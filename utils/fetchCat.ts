export async function fetchCat({
  cache = 'no-store',
  params = {},
}: {
  cache?: RequestCache;
  params?: Record<string, string>;
}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?${query}`, {
    cache,
  });

  const data = await res.json();
  return data[0];
}

