// Prefix a site path with the deploy base (e.g. /Alices-Portfolio on GitHub Pages).
export function url(path = '/') {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
