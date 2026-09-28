import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './app/App'
import './styles/tokens.css'
import './styles/global.css'
import './styles/home.css'
import './styles/hero.css'
import './styles/estimate-dialog.css'
import './styles/reveal.css'
import './styles/pages.css'
import './styles/mobile.css'

const root = document.getElementById('root')
const app = <StrictMode><App /></StrictMode>
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
