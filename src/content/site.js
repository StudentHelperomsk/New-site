import source from './site.json'

export const catalog = source.services
export const library = source.examples
export const guides = source.guides
export const legalDocuments = source.legal
export const guarantees = source.guarantees
export const fullQuestions = source.questions.map((item, index) => ({ ...item, group: ['order', 'order', 'payment', 'payment', 'support', 'support', 'payment', 'payment', 'documents'][index] }))
export const siteRoutes = source.routes
export const formatPrice = value => new Intl.NumberFormat('ru-RU').format(value)
export const normalizePath = path => {
  const clean = path.split(/[?#]/)[0].replace(/\/index\.html$/, '/').replace(/\/+$/, '')
  return clean ? `${clean}/` : '/'
}
export function resolvePage(path) {
  const normalized = normalizePath(path)
  const metadata = siteRoutes.find(page => page.path === normalized)
  if (!metadata) return { path: normalized, type: 'not-found', title: 'Страница не найдена', seoTitle: 'Страница не найдена — Student Helper', description: 'Вернуться к услугам и материалам Student Helper.' }
  const service = catalog.find(item => item.path === normalized)
  const guide = guides.find(item => item.path === normalized)
  const legal = legalDocuments.find(item => item.path === normalized)
  return { ...metadata, type: service ? 'service' : guide ? 'article' : legal ? 'legal' : normalized === '/' ? 'home' : normalized.split('/')[1], item: service || guide || legal }
}
