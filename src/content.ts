export const profile = {
  name: 'Amanda de Moura',
  role: 'Desenvolvedora de software',
  city: 'Brasília',
  location: 'Brasília, DF',
  cv: '/curriculo-amanda-de-moura.pdf',
  intro:
    'Construo aplicações web do front ao back. Passei por React, Node.js e Django, e agora estou aprofundando backend com C#\u00a0e\u00a0.NET.',
  about: [
    'Do primeiro contato com o cliente até a entrega, um projeto de software depende de entender as pessoas: o que elas precisam, o que esperam e o que nem sempre conseguem dizer. Quero ser a ponte entre essas necessidades e o código que as resolve.',
    'Meu caminho começou nas interfaces e foi descendo pela stack: de React para Node.js, depois Django, e agora C# e .NET. O design de experiência continua sendo a forma como olho para cada sistema que construo, inclusive os que ninguém vê.',
  ],
  email: 'amandademoura10@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amanda-de-moura-da-silva/',
  github: 'https://github.com/AmandaaMoura',
}

export type Job = {
  role: string
  org: string
  period: string
  points: string[]
  stack: string[]
}

export const jobs: Job[] = [
  {
    role: 'Desenvolvedora Web',
    org: 'Figueiredo & Velloso, time de tecnologia',
    period: 'ago/2025 – jun/2026',
    points: [
      'Desenvolvimento de aplicações web, incluindo backend em Django.',
      'Design de interfaces pensado para uma navegação fluida e assertiva para cada público.',
      'Ciclos curtos de entrega e feedback com os stakeholders de cada projeto.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Django', 'Python', 'Docker', 'Figma'],
  },
  {
    role: 'Desenvolvedora Fullstack, projeto CAPJU',
    org: 'Universidade de Brasília',
    period: 'set/2023 – dez/2023',
    points: [
      'Sistema para apoiar a rotina de servidores do judiciário, com foco em acessibilidade.',
      'Aplicação responsiva, com testes unitários e de integração.',
      'Squads ágeis com planejamento e práticas de design inclusivo.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'Docker', 'Tailwind'],
  },
  {
    role: 'Desenvolvedora Front-end, Projeto Glória',
    org: "Orc'estra Gamificação",
    period: 'jun/2023 – ago/2023',
    points: [
      'Telas, componentes e toda a estrutura de navegação com React e Hooks.',
      'Estilização com foco em acessibilidade e experiência de uso.',
      'Scrum com dailies, reviews e retrospectivas.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'CSS', 'Scrum'],
  },
]

export const otherJobs = [
  {
    role: 'AI Trainer (freelancer)',
    org: 'Outlier',
    period: 'jul/2024 – nov/2024',
    text: 'Treinamento de modelos de linguagem: revisão de respostas, avaliação da experiência textual e construção de respostas mais humanas.',
  },
  {
    role: 'Diretora de Marketing e Comunicação',
    org: "Orc'estra Gamificação",
    period: 'jan/2024 – dez/2024',
    text: 'Jornadas digitais, funis de aquisição e documentação de perfil de cliente com base em dados.',
  },
]

export type Project = {
  name: string
  context: string
  text: string
  stack: string[]
  category: ProjectCategory
}

export type ProjectCategory = 'Web' | 'IA' | 'UX/UI'
export const projectCategories: ProjectCategory[] = ['Web', 'IA', 'UX/UI']

export const projects: Project[] = [
  {
    name: 'Pauta Inteligente',
    context: 'Figueiredo & Velloso',
    text: 'Aplicação que resume processos judiciais com IA. Fiz o front-end em Next.js e a autenticação com Express.',
    stack: ['Next.js', 'Express', 'IA generativa'],
    category: 'IA',
  },
  {
    name: 'Calculadora de lucro para Legal Claims',
    context: 'Figueiredo & Velloso',
    text: 'Calcula o lucro de um portfólio de legal claims. A interface foi desenhada para inserir muitos valores rápido, com o menor número de cliques possível.',
    stack: ['React', 'TypeScript', 'UX/UI'],
    category: 'UX/UI',
  },
  {
    name: 'Site institucional',
    context: 'Figueiredo & Velloso',
    text: 'Reconstrução do site do escritório, com front-end em React e backend em Django.',
    stack: ['React', 'Tailwind', 'Django', 'Python'],
    category: 'Web',
  },
  {
    name: 'CAPJU',
    context: 'Universidade de Brasília',
    text: 'Sistema acessível de apoio à rotina de servidores do judiciário, construído em squads ágeis.',
    stack: ['React', 'Node.js', 'Docker'],
    category: 'Web',
  },
]

export const skills = [
  { group: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Tailwind'] },
  { group: 'Back-end', items: ['Django', 'Python', 'Node.js', 'Express', 'Docker', 'C# e .NET (estudando)'] },
  { group: 'Design e produto', items: ['UX/UI Design', 'Figma', 'Requisitos de software', 'Metodologias ágeis'] },
  { group: 'IA', items: ['Engenharia de prompt', 'AI Engineering', 'Avaliação de modelos de linguagem'] },
]

export const interests = [
  'Desenvolvimento fullstack',
  'Aplicações com IA generativa',
  'Arquitetura de software',
  'Engenharia de requisitos',
  'Design de experiência do usuário',
]

export const education = {
  course: 'Bacharelado em Engenharia de Software',
  school: 'Universidade de Brasília',
  status: '9º semestre, conclusão prevista para dez/2028',
}

export const certificates = [
  { name: 'Associate AI Engineering for Developers', org: 'DataCamp', year: '2026' },
  { name: 'Técnicas de Engenharia de Prompt', org: 'DIO', year: '2025' },
  { name: 'Google UX Design Fundamentals', org: 'Google', year: '2025' },
  { name: 'Google Data Analytics: Data Everywhere', org: 'Coursera', year: '2024' },
]

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário (B2)' },
  { name: 'Francês', level: 'Básico (A2)' },
]

export type Service = { icon: 'web' | 'server' | 'design' | 'spark'; title: string; text: string }

export const services: Service[] = [
  {
    icon: 'web',
    title: 'Desenvolvimento web',
    text: 'Aplicações em React, Next.js e TypeScript, responsivas e acessíveis.',
  },
  {
    icon: 'server',
    title: 'Backend',
    text: 'APIs e regras de negócio com Django e Node.js. Hoje, aprofundando C# e .NET.',
  },
  {
    icon: 'design',
    title: 'UX/UI Design',
    text: 'Interfaces desenhadas no Figma a partir das necessidades reais de quem vai usar.',
  },
  {
    icon: 'spark',
    title: 'IA aplicada',
    text: 'Produtos com IA generativa e experiência em avaliar e treinar modelos de linguagem.',
  },
]

export const toolbelt = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind',
  'Django',
  'Python',
  'Node.js',
  'Express',
  'Docker',
  'Figma',
  'C# e .NET',
  'Git',
]

export const roadmapPhases = [
  { title: 'Ajustes no currículo e no perfil', weeks: 'Semana 1' },
  { title: 'C# e .NET na prática', weeks: 'Semanas 2 a 5' },
  { title: 'SQL Server, Entity Framework e Dapper', weeks: 'Semanas 6 a 9' },
  { title: 'Testes automatizados em C#', weeks: 'Semanas 10 e 11' },
  { title: 'Mensageria e microsserviços', weeks: 'Semanas 12 a 16' },
  { title: 'Observabilidade e performance', weeks: 'Semanas 17 e 18' },
  { title: 'IA como ferramenta, não substituta', weeks: 'Semana 19' },
  { title: 'Narrativas prontas para entrevista', weeks: 'Semana 20' },
]
