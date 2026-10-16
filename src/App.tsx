import type { ReactNode } from 'react'
import {
  certificates,
  education,
  interests,
  jobs,
  languages,
  otherJobs,
  profile,
  projects,
  skills,
} from './content'
import photo from './assets/amanda.webp'
import './App.css'

const trail = [
  { stack: 'React e TypeScript', where: 'Interfaces e UX' },
  { stack: 'Node.js', where: 'Fullstack na UnB' },
  { stack: 'Django', where: 'Backend na Figueiredo & Velloso' },
  { stack: 'C# e .NET', where: 'Estudando agora', next: true },
]

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack" aria-label="Tecnologias">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href="#inicio" aria-label="Amanda de Moura, início">
            <img src="/favicon.png" alt="" width="28" height="28" />
            <span>Amanda de Moura</span>
          </a>
          <nav aria-label="Seções">
            <a href="#sobre">Sobre</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="wrap hero-inner">
            <div className="hero-text">
              <p className="hero-role">
                {profile.role} em {profile.city}
              </p>
              <h1>{profile.name}</h1>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#projetos">
                  Ver projetos
                </a>
                <a className="btn btn-line" href="#contato">
                  Entrar em contato
                </a>
              </div>
            </div>
            <figure className="planet">
              <img src={photo} alt="Amanda de Moura" width="500" height="625" />
            </figure>
          </div>

          <div className="wrap">
            <ol className="orbit" aria-label="Stacks por onde passei">
              {trail.map((t) => (
                <li key={t.stack} className={t.next ? 'next' : undefined}>
                  <span className="orbit-stack">{t.stack}</span>
                  <span className="orbit-where">
                    {t.next ? <a href="/roadmap/">{t.where}: ver meu roadmap</a> : t.where}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="block" id="sobre" aria-labelledby="sobre-t">
          <div className="wrap about">
            <div>
              <h2 id="sobre-t">Sobre mim</h2>
              {profile.about.map((p) => (
                <p key={p.slice(0, 20)} className="prose">
                  {p}
                </p>
              ))}
            </div>
            <dl className="facts">
              <div>
                <dt>Formação</dt>
                <dd>
                  {education.course}, {education.school}
                  <span>{education.status}</span>
                </dd>
              </div>
              <div>
                <dt>Idiomas</dt>
                <dd>
                  {languages.map((l) => (
                    <span key={l.name}>
                      {l.name}: {l.level}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt>Interesses</dt>
                <dd>
                  {interests.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="block" id="trajetoria" aria-labelledby="traj-t">
          <div className="wrap">
            <h2 id="traj-t">Trajetória</h2>
            <ol className="rail">
              {jobs.map((j) => (
                <li key={j.role}>
                  <div className="rail-head">
                    <h3>{j.role}</h3>
                    <span className="period">{j.period}</span>
                  </div>
                  <p className="org">{j.org}</p>
                  <ul className="points">
                    {j.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <Stack items={j.stack} />
                </li>
              ))}
            </ol>

            <h3 className="sub">Outras experiências</h3>
            <ul className="others">
              {otherJobs.map((o) => (
                <li key={o.role}>
                  <div className="rail-head">
                    <strong>
                      {o.role}, {o.org}
                    </strong>
                    <span className="period">{o.period}</span>
                  </div>
                  <p>{o.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block" id="projetos" aria-labelledby="proj-t">
          <div className="wrap">
            <h2 id="proj-t">Projetos</h2>
            <p className="lede">
              Os projetos profissionais ficam em repositórios privados; aqui está o que cada um faz e com o que foi
              construído.
            </p>
            <div className="projects">
              {projects.map((p) => (
                <article key={p.name}>
                  <h3>{p.name}</h3>
                  <p className="org">{p.context}</p>
                  <p>{p.text}</p>
                  <Stack items={p.stack} />
                </article>
              ))}
              <article className="project-now">
                <h3>Roadmap backend .NET</h3>
                <p className="org">Em andamento</p>
                <p>
                  Meu plano de estudos para o backend: uma API em C# que cresce fase a fase até serviços com mensageria e
                  observabilidade.
                </p>
                <a className="text-link" href="/roadmap/">
                  Acompanhar o roadmap
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="block" aria-labelledby="skills-t">
          <div className="wrap">
            <h2 id="skills-t">Habilidades e certificados</h2>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ul className="certs">
              {certificates.map((c) => (
                <li key={c.name}>
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-meta">
                    {c.org}, {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contato-t">
          <div className="wrap">
            <h2 id="contato-t">Vamos conversar</h2>
            <p className="lede">Estou aberta a oportunidades em desenvolvimento backend e fullstack.</p>
            <a className="mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <ul className="socials">
              <li>
                <External href={profile.linkedin}>LinkedIn</External>
              </li>
              <li>
                <External href={profile.github}>GitHub</External>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">Amanda de Moura, {new Date().getFullYear()}</div>
      </footer>
    </>
  )
}
