import { build } from 'vite'
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

await build()
await build({ build: { ssr: 'src/entry-server.jsx', outDir: 'operation/ssr', emptyOutDir: true, rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } } } })
const { render, routes } = await import(pathToFileURL(path.resolve('operation/ssr/entry-server.mjs')))
const template = await fs.readFile('dist/index.html', 'utf8')
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
for (const route of [...routes, '/404/']) {
  const { html, page } = render(route)
  const noindex = page.type === 'pay' || page.type === 'not-found'
  const head = `<link rel="canonical" href="https://studenthelper.ru${escape(route)}" /><meta name="robots" content="${noindex ? 'noindex, nofollow' : 'index, follow'}" /><meta property="og:title" content="${escape(page.seoTitle)}" /><meta property="og:description" content="${escape(page.description)}" /><meta property="og:type" content="website" /><meta property="og:url" content="https://studenthelper.ru${escape(route)}" />${page.type === 'pay' ? '<meta name="referrer" content="no-referrer" />' : ''}`
  const document = template.replace(/<title>.*?<\/title>/, `<title>${escape(page.seoTitle)}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(page.description)}" />`).replace('</head>', `${head}</head>`).replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  const destination = route === '/404/' ? 'dist/404.html' : path.join('dist', route, 'index.html')
  await fs.mkdir(path.dirname(destination), { recursive: true })
  await fs.writeFile(destination, document)
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.filter(route => !route.startsWith('/pay/')).map(route => `<url><loc>https://studenthelper.ru${route}</loc></url>`).join('')}</urlset>\n`
await fs.writeFile('dist/sitemap.xml', sitemap)
await fs.writeFile('dist/robots.txt', 'User-agent: *\nDisallow: /pay/\nSitemap: https://studenthelper.ru/sitemap.xml\n')
console.log(`Rendered ${routes.length} pages and 404.html with complete content.`)
