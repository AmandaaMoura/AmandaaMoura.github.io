import { useEffect, useRef, useState } from 'react'
import { CASE, GAPS, LEARN, PHASES, STORAGE_KEY } from '../roadmapData'
import { Copy, Reset } from './icons'

type Saved = { done: Record<string, boolean>; text: Record<string, string> }

function load(): Saved {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return { done: raw.done || {}, text: raw.text || {} }
  } catch {
    return { done: {}, text: {} }
  }
}

function persist(s: Saved) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
    return true
  } catch {
    return false
  }
}

const trail = [
  { stack: 'React e TypeScript', where: 'Interfaces e UX' },
  { stack: 'Node.js', where: 'Fullstack na UnB' },
  { stack: 'Django', where: 'Backend na Figueiredo & Velloso' },
  { stack: 'C# e .NET', where: 'Este roadmap', next: true },
]

const total = PHASES.reduce((n, p) => n + p.tasks.length, 0)
const phaseNumber = Object.fromEntries(PHASES.map((p, i) => [p.id, i + 1]))

function Fields({
  list,
  prefix,
  text,
  onChange,
}: {
  list: [string, string][]
  prefix: string
  text: Record<string, string>
  onChange: (key: string, value: string) => void
}) {
  return (
    <>
      {list.map(([k, label]) => {
        const key = `${prefix}-${k}`
        return (
          <label key={key} className="story-field">
            <span>{label}</span>
            <textarea rows={3} value={text[key] || ''} onChange={(e) => onChange(key, e.target.value)} />
          </label>
        )
      })}
    </>
  )
}

export function Roadmap() {
  const [state, setState] = useState<Saved>(load)
  const [savedMsg, setSavedMsg] = useState('')
  const [copied, setCopied] = useState('')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const doneCount = PHASES.reduce((n, p) => n + p.tasks.filter((t) => state.done[t.id]).length, 0)

  const toggle = (id: string, on: boolean) => {
    const done = { ...state.done }
    if (on) done[id] = true
    else delete done[id]
    const next = { ...state, done }
    setState(next)
    persist(next)
  }

  const write = (key: string, value: string) => {
    const next = { ...state, text: { ...state.text, [key]: value } }
    setState(next)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      setSavedMsg(persist(next) ? 'Salvo neste navegador.' : 'Não foi possível salvar neste navegador; copie o texto antes de sair.')
    }, 400)
  }

  const copyStories = async () => {
    const block = (title: string, list: [string, string][], prefix: string) =>
      `${title}\n\n${list.map(([k, l]) => `${l}\n${state.text[`${prefix}-${k}`] || ''}`).join('\n\n')}`
    const txt = `${block('Caso técnico', CASE, 'case')}\n\n\n${block('Como eu aprendo', LEARN, 'learn')}`
    try {
      await navigator.clipboard.writeText(txt)
      setCopied('Narrativas copiadas.')
    } catch {
      setCopied('Não foi possível copiar.')
    }
  }

  const reset = () => {
    if (!window.confirm('Apagar todo o progresso e os textos salvos neste navegador?')) return
    const empty = { done: {}, text: {} }
    setState(empty)
    persist(empty)
    setSavedMsg('')
  }

  const jump = (id: string) => {
    document.getElementById(`fase-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <article className="roadmap">
      <header className="page-head">
        <h2 className="page-title">Roadmap</h2>
      </header>

      <div className="about-text">
        <p>
          Meu plano para virar desenvolvedora backend .NET. Cada fase fecha uma lacuna apontada no feedback do meu
          currículo e termina com algo que eu consiga mostrar e defender numa entrevista.
        </p>
      </div>

      <div className="meter" aria-live="polite">
        <div className="meter-text">
          <strong>
            {doneCount} de {total}
          </strong>{' '}
          passos concluídos
        </div>
        <div className="meter-bar" aria-hidden="true">
          <span style={{ width: `${(doneCount / total) * 100}%` }} />
        </div>
      </div>

      <ol className="trail" aria-label="Stacks por onde passei">
        {trail.map((t) => (
          <li key={t.stack} className={t.next ? 'next' : undefined}>
            <span className="trail-stack">{t.stack}</span>
            <span className="trail-where">{t.where}</span>
          </li>
        ))}
      </ol>

      <h3 className="section-title">O que o feedback apontou</h3>
      <ul className="gaps">
        {GAPS.map((g) => (
          <li key={g.t}>
            <div>
              <strong>{g.t}</strong>
              <span>{g.w}</span>
            </div>
            <button type="button" onClick={() => jump(g.p)}>
              Fase {phaseNumber[g.p]}
            </button>
          </li>
        ))}
      </ul>

      <h3 className="section-title">O plano, fase a fase</h3>
      <p className="lead-muted">
        Cerca de 20 semanas em meio período. Todas as fases usam um único projeto, que cresce de uma API simples até
        serviços com mensageria e observabilidade. O progresso fica salvo neste navegador.
      </p>

      <ol className="phases">
        {PHASES.map((p, i) => {
          const d = p.tasks.filter((t) => state.done[t.id]).length
          const complete = d === p.tasks.length
          return (
            <li key={p.id} id={`fase-${p.id}`} className={complete ? 'complete' : undefined}>
              <span className="phase-node" aria-hidden="true">
                {i + 1}
              </span>
              <div className="phase-head">
                <h4>{p.title}</h4>
                <span className="phase-count">{complete ? 'Concluída' : `${d} de ${p.tasks.length}`}</span>
              </div>
              <p className="period">{p.weeks}</p>
              <span className="source">Feedback: {p.source}</span>
              <p className="phase-goal">{p.goal}</p>
              <ul className="checklist">
                {p.tasks.map((t) => (
                  <li key={t.id}>
                    <label>
                      <input type="checkbox" checked={!!state.done[t.id]} onChange={(e) => toggle(t.id, e.target.checked)} />
                      <span>
                        <span className="task-t">{t.t}</span>
                        <span className="task-d">{t.d}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
              <div className="dod">
                <strong>Pronto quando</strong>
                <p>{p.dod}</p>
              </div>
            </li>
          )
        })}
      </ol>

      <h3 className="section-title">Narrativas para entrevista</h3>
      <p className="lead-muted">
        O feedback pede duas histórias prontas. Escreva aqui conforme as fases avançam; o texto fica salvo neste
        navegador.
      </p>
      <div className="stories">
        <div>
          <h4>Caso técnico em 3 minutos</h4>
          <p className="hint">
            Uma decisão técnica real, sem exagerar o próprio papel e deixando claro o que foi seu e o que foi do time.
          </p>
          <Fields list={CASE} prefix="case" text={state.text} onChange={write} />
        </div>
        <div>
          <h4>Como eu aprendo</h4>
          <p className="hint">O ciclo de aprendizado de uma transição real, como a ida para Node.js, Django ou .NET.</p>
          <Fields list={LEARN} prefix="learn" text={state.text} onChange={write} />
        </div>
      </div>

      <div className="story-actions">
        <p className="note" aria-live="polite">
          {copied || savedMsg}
        </p>
        <div>
          <button type="button" className="soft-btn quiet" onClick={reset}>
            <Reset />
            Limpar progresso
          </button>
          <button type="button" className="soft-btn" onClick={copyStories}>
            <Copy />
            Copiar narrativas
          </button>
        </div>
      </div>
    </article>
  )
}
