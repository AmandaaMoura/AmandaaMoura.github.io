import { useEffect, useRef, useState, type ComponentType } from 'react'
import Sidebar from './components/Sidebar'
import { About, Contact, Portfolio, Resume, Roadmap } from './components/Pages'
import './App.css'

type Tab = { id: string; label: string; Page: ComponentType }

const tabs: Tab[] = [
  { id: 'sobre', label: 'Sobre', Page: About },
  { id: 'curriculo', label: 'Currículo', Page: Resume },
  { id: 'portfolio', label: 'Portfólio', Page: Portfolio },
  { id: 'roadmap', label: 'Roadmap', Page: Roadmap },
  { id: 'contato', label: 'Contato', Page: Contact },
]

const fromHash = () => {
  const id = window.location.hash.replace('#', '')
  return tabs.some((t) => t.id === id) ? id : 'sobre'
}

export default function App() {
  const [active, setActive] = useState(fromHash)
  const main = useRef<HTMLElement>(null)

  useEffect(() => {
    const onHash = () => setActive(fromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const go = (id: string) => {
    if (id === active) return
    history.pushState(null, '', `#${id}`)
    setActive(id)
    const top = main.current?.getBoundingClientRect().top ?? 0
    if (top < 0) main.current?.scrollIntoView({ block: 'start' })
  }

  const current = tabs.find((t) => t.id === active) ?? tabs[0]
  const Page = current.Page

  return (
    <div className="layout">
      <Sidebar />
      <main className="panel card" ref={main}>
        <nav className="tabs" aria-label="Seções do portfólio">
          <ul>
            {tabs.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  aria-current={t.id === active ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    go(t.id)
                  }}
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="page" key={current.id}>
          <Page />
        </div>
      </main>
    </div>
  )
}
