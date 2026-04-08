import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.tsx'
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
  document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light')
}
updateTheme(mediaQuery)
mediaQuery.addEventListener('change', updateTheme)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
