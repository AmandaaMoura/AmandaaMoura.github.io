import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import {
  certificates,
  education,
  interests,
  jobs,
  languages,
  otherJobs,
  profile,
  projectCategories,
  projects,
  roadmapPhases,
  services,
  skills,
  toolbelt,
  type ProjectCategory,
  type Service,
} from '../content'
import { Award, Book, Briefcase, Design, FileText, MapIcon, Rocket, Send, Server, Spark, Web } from './icons'

function PageTitle({ children }: { children: ReactNode }) {
  return (
    <header className="page-head">
      <h2 className="page-title">{children}</h2>
    </header>
  )
}

const serviceIcon: Record<Service['icon'], ReactNode> = {
  web: <Web />,
  server: <Server />,
  design: <Design />,
  spark: <Spark />,
}

/* ---------- Sobre ---------- */
export function About() {
  const rail = useRef<HTMLUListElement>(null)
  const [progress, setProgress] = useState({ start: 0, size: 1 })

  const onScroll = () => {
    const el = rail.current
    if (!el) return
    const max = el.scrollWidth
    setProgress({ start: el.scrollLeft / max, size: el.clientWidth / max })
  }

  return (
    <article>
      <PageTitle>Sobre mim</PageTitle>
      <div className="about-text">
        {profile.about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <h3 className="section-title">O que eu faço</h3>
      <ul className="services">
        {services.map((s) => (
          <li key={s.title} className="service">
            <span className="service-icon">{serviceIcon[s.icon]}</span>
            <div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="section-title">Ferramentas</h3>
      <ul className="tools" ref={rail} onScroll={onScroll} tabIndex={0} aria-label="Ferramentas, role para o lado">
        {toolbelt.map((t) => (
          <li key={t} className={t.includes('.NET') ? 'tool now' : 'tool'}>
            <span>{t}</span>
            {t.includes('.NET') && <small>estudando</small>}
          </li>
        ))}
      </ul>
      <div className="scrollbar" aria-hidden="true">
        <span style={{ left: `${progress.start * 100}%`, width: `${Math.min(progress.size, 1) * 100}%` }} />
      </div>

      <h3 className="section-title">Interesses</h3>
      <ul className="tags">
        {interests.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </article>
  )
}

/* ---------- Currículo ---------- */
function TimelineHead({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="timeline-head">
      <span className="icon-box">{icon}</span>
      <h3>{children}</h3>
    </div>
  )
}

export function Resume() {
  return (
    <article>
      <PageTitle>Currículo</PageTitle>

      <section className="timeline">
        <TimelineHead icon={<Book />}>Formação</TimelineHead>
        <ol>
          <li>
            <h4>{education.school}</h4>
            <p>{education.course}</p>
            <p className="period">jun/2022 – dez/2028 (previsto)</p>
            <p className="muted">{education.status.split(',')[0]}</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <TimelineHead icon={<Briefcase />}>Experiência</TimelineHead>
        <ol>
          {jobs.map((j) => (
            <li key={j.role}>
              <h4>{j.role}</h4>
              <p>{j.org}</p>
              <p className="period">{j.period}</p>
              <ul className="bullets">
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <ul className="chips">
                {j.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </li>
          ))}
          {otherJobs.map((o) => (
            <li key={o.role}>
              <h4>{o.role}</h4>
              <p>{o.org}</p>
              <p className="period">{o.period}</p>
              <ul className="bullets">
                <li>{o.text}</li>
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <TimelineHead icon={<Award />}>Certificados</TimelineHead>
        <ol>
          {certificates.map((c) => (
            <li key={c.name}>
              <h4>{c.name}</h4>
              <p>{c.org}</p>
              <p className="period">{c.year}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="resume-extra">
        <div>
          <h3 className="section-title">Habilidades</h3>
          <dl className="skill-groups">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="section-title">Idiomas</h3>
          <dl className="skill-groups">
            {languages.map((l) => (
              <div key={l.name}>
                <dt>{l.name}</dt>
                <dd>{l.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="actions-end">
        <a className="soft-btn" href={profile.cv} download>
          <FileText />
          Baixar currículo
        </a>
      </div>
    </article>
  )
}

/* ---------- Portfólio ---------- */
type Filter = 'Todos' | ProjectCategory

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const list = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <article>
      <PageTitle>Portfólio</PageTitle>
      <div className="filters" role="group" aria-label="Filtrar projetos">
        {(['Todos', ...projectCategories] as Filter[]).map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <ul className="project-grid">
        {list.map((p) => (
          <li key={p.name} className="project">
            <div className={`thumb thumb-${(projects.indexOf(p) % 4) + 1}`} aria-hidden="true">
              <span className="thumb-mark">{p.name.charAt(0)}</span>
              <span className="thumb-stack">{p.stack.join('  ·  ')}</span>
            </div>
            <h3>{p.name}</h3>
            <p className="muted">
              {p.category} · {p.context}
            </p>
            <p className="project-text">{p.text}</p>
          </li>
        ))}
      </ul>
      <p className="note">Projetos profissionais em repositórios privados. Posso mostrar detalhes numa conversa.</p>
    </article>
  )
}

/* ---------- Roadmap ---------- */
export function Roadmap() {
  return (
    <article>
      <PageTitle>Roadmap</PageTitle>
      <div className="about-text">
        <p>
          Estou indo de interfaces para sistemas distribuídos. Este é o plano: cerca de 20 semanas construindo uma única
          API em C# que cresce fase a fase, de um CRUD até serviços com mensageria e observabilidade.
        </p>
      </div>

      <ol className="phase-grid">
        {roadmapPhases.map((p, i) => (
          <li key={p.title} className="phase-card">
            <span className="phase-num">{i + 1}</span>
            <div>
              <h4>{p.title}</h4>
              <p className="muted">{p.weeks}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="actions-end">
        <a className="soft-btn" href="/roadmap/">
          <Rocket />
          Abrir roadmap completo
        </a>
      </div>
    </article>
  )
}

/* ---------- Contato ---------- */
export function Contact() {
  const [mapOn, setMapOn] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') || '')
    const subject = String(f.get('subject') || 'Contato pelo portfólio')
    const body = `${String(f.get('message') || '')}\n\n${name}\n${String(f.get('email') || '')}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <article>
      <PageTitle>Contato</PageTitle>

      <div className="map">
        {mapOn ? (
          <iframe
            title="Mapa de Brasília"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-48.10%2C-15.88%2C-47.75%2C-15.70&layer=mapnik&marker=-15.7939%2C-47.8828"
            loading="lazy"
          />
        ) : (
          <div className="map-placeholder">
            <MapIcon size={28} />
            <p>Brasília, Distrito Federal</p>
            <button type="button" className="pill-btn" onClick={() => setMapOn(true)}>
              Carregar mapa interativo
            </button>
          </div>
        )}
      </div>

      <h3 className="section-title">Mande uma mensagem</h3>
      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          <span className="sr">Nome completo</span>
          <input name="name" placeholder="Nome completo" autoComplete="name" required />
        </label>
        <label>
          <span className="sr">E-mail</span>
          <input name="email" type="email" placeholder="Seu e-mail" autoComplete="email" required />
        </label>
        <label className="full">
          <span className="sr">Assunto</span>
          <input name="subject" placeholder="Assunto" />
        </label>
        <label className="full">
          <span className="sr">Mensagem</span>
          <textarea name="message" placeholder="Sua mensagem" rows={5} required />
        </label>
        <div className="form-end full">
          <p className="note" aria-live="polite">
            {sent ? 'Seu app de e-mail foi aberto com a mensagem pronta para enviar.' : 'A mensagem abre no seu app de e-mail, já preenchida.'}
          </p>
          <button className="soft-btn" type="submit">
            <Send />
            Enviar mensagem
          </button>
        </div>
      </form>
    </article>
  )
}
