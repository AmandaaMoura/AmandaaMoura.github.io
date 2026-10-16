import { useState } from 'react'
import { profile } from '../content'
import photo from '../assets/amanda.webp'
import { Chevron, GitHub, LinkedIn, Mail, Pin } from './icons'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <aside className={`sidebar card${open ? ' open' : ''}`}>
      <div className="sidebar-top">
        <figure className="avatar">
          <img src={photo} alt="Amanda de Moura" width="500" height="625" />
        </figure>
        <div className="sidebar-id">
          <h1 className="name">{profile.name}</h1>
          <p className="role-pill">{profile.role}</p>
        </div>
        <button
          className="more"
          type="button"
          aria-expanded={open}
          aria-controls="sidebar-more"
          onClick={() => setOpen((o) => !o)}
        >
          <span>{open ? 'Ocultar contatos' : 'Ver contatos'}</span>
          <Chevron size={16} />
        </button>
      </div>

      <div className="sidebar-more" id="sidebar-more">
        <hr />
        <ul className="contacts">
          <li>
            <span className="icon-box">
              <Mail />
            </span>
            <div>
              <span className="contact-label">E-mail</span>
              <a href={`mailto:${profile.email}`} title={profile.email}>
                {profile.email}
              </a>
            </div>
          </li>
          <li>
            <span className="icon-box">
              <Pin />
            </span>
            <div>
              <span className="contact-label">Localização</span>
              <span>{profile.location}</span>
            </div>
          </li>
        </ul>
        <ul className="socials">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
