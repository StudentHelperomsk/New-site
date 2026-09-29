// Keep public assets and links valid on both root domains and project hosting.
const base = import.meta.env.BASE_URL
export function siteUrl(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return value
  if (base === '/' || value.startsWith(base)) return value
  return `${base}${value.slice(1)}`
}
export function siteHtml(value) {
  return value.replace(/(\b(?:href|src)=["'])(\/(?!\/)[^"']*)/g, (_, prefix, url) => prefix + siteUrl(url))
}
export function routePath(value) {
  const prefix = base.replace(/\/$/, '')
  return prefix && (value === prefix || value.startsWith(`${prefix}/`)) ? value.slice(prefix.length) || '/' : value
}
