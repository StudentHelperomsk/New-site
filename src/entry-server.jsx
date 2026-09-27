import { renderToString } from 'react-dom/server'
import App from './app/App'
import { resolvePage, siteRoutes } from './content/site'

export const routes = siteRoutes.map(page => page.path)
export function render(path) {
  return { html: renderToString(<App path={path} />), page: resolvePage(path) }
}
