type P = { size?: number }

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const Mail = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const Pin = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const Book = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M3 5.5C5.5 4 9 4 12 6c3-2 6.5-2 9-.5V19c-2.5-1.5-6-1.5-9 .5-3-2-6.5-2-9-.5Z" />
    <path d="M12 6v13.5" />
  </svg>
)

export const Briefcase = ({ size }: P) => (
  <svg {...base(size)}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" />
  </svg>
)

export const Award = ({ size }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
  </svg>
)

export const FileText = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
)

export const Send = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M21 3 10 14M21 3l-7 18-4-7-7-4Z" />
  </svg>
)

export const MapIcon = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="m9 4-6 2.5v13.5L9 17.5l6 2.5 6-2.5V4L15 6.5Z" />
    <path d="M9 4v13.5M15 6.5V20" />
  </svg>
)

export const Rocket = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="M12 15c-1.5-1.5-3-3-3-6 0-3.5 3-6 3-6s3 2.5 3 6c0 3-1.5 4.5-3 6Z" />
    <path d="M9 12.5 6 14l1 4 2.5-1.5M15 12.5 18 14l-1 4-2.5-1.5M12 15v5" />
  </svg>
)

export const Chevron = ({ size }: P) => (
  <svg {...base(size)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

/* Ícones de serviço */
export const Web = ({ size = 36 }: P) => (
  <svg {...base(size)} strokeWidth={1.4}>
    <rect x="2.5" y="4" width="19" height="15" rx="2" />
    <path d="M2.5 8h19M5 6h.01M7 6h.01M10 15.5l-2-2 2-2M14 11.5l2 2-2 2" />
  </svg>
)

export const Server = ({ size = 36 }: P) => (
  <svg {...base(size)} strokeWidth={1.4}>
    <rect x="3" y="3.5" width="18" height="6" rx="1.5" />
    <rect x="3" y="12" width="18" height="6" rx="1.5" />
    <path d="M7 6.5h.01M7 15h.01M12 18v3M8 21h8" />
  </svg>
)

export const Design = ({ size = 36 }: P) => (
  <svg {...base(size)} strokeWidth={1.4}>
    <path d="M4 20h4L19.5 8.5a2.8 2.8 0 0 0-4-4L4 16Z" />
    <path d="m14 6 4 4M3 3h6M3 3v6" />
  </svg>
)

export const Spark = ({ size = 36 }: P) => (
  <svg {...base(size)} strokeWidth={1.4}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8.5 13.2 11l2.3 1-2.3 1-1.2 2.5-1.2-2.5-2.3-1 2.3-1Z" />
    <path d="m6 6 1.5 1.5M16.5 16.5 18 18M18 6l-1.5 1.5M7.5 16.5 6 18" />
  </svg>
)

/* Marcas das redes, em traço simples */
export const LinkedIn = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.5 3A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Zm2.3 4.2a1.45 1.45 0 1 1 0 2.9 1.45 1.45 0 0 1 0-2.9ZM5.6 10.8h2.5V18H5.6Zm4.1 0h2.4v1c.4-.7 1.3-1.2 2.6-1.2 2.3 0 3 1.4 3 3.6V18h-2.5v-3.3c0-1-.2-1.8-1.2-1.8-1.1 0-1.4.8-1.4 1.8V18H9.7Z" />
  </svg>
)

export const GitHub = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.6-.2.6-.5v-1.8c-2.6.6-3.2-1.1-3.2-1.1-.4-1.1-1-1.4-1-1.4-.9-.6 0-.6 0-.6 1 .1 1.5 1 1.5 1 .8 1.5 2.3 1 2.8.8.1-.6.3-1 .6-1.2-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.2.1 2.5.6.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.7v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
  </svg>
)
