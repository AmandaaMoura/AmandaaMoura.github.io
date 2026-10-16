// Dados do roadmap de estudos backend .NET, montado a partir do feedback de currículo.

export type Task = { id: string; t: string; d: string }
export type Phase = {
  id: string
  title: string
  weeks: string
  source: string
  goal: string
  tasks: Task[]
  dod: string
}
export type Gap = { t: string; w: string; p: string }

export const PHASES: Phase[] = [
  {
    id: "cv", title: "Ajustes no currículo e no perfil", weeks: "Semana 1",
    source: "Formação e posicionamento",
    goal: "Corrigir o que custa pouco e muda a primeira leitura do recrutador: deixar a transição para backend clara e intencional.",
    tasks: [
      { id: "cv-grad", t: "Registrar status e previsão de conclusão da graduação", d: "Engenharia de Software na UnB, com mês e ano previstos." },
      { id: "cv-headline", t: "Reescrever headline e resumo", d: "De “desenvolvedora web com design” para “desenvolvedora backend em evolução com visão full-stack”." },
      { id: "cv-order", t: "Reordenar experiências", d: "UnB logo depois da Figueiredo & Velloso, para o backend aparecer cedo." },
      { id: "cv-noise", t: "Reduzir o peso de marketing e comunicação", d: "Manter, mas em uma linha, sem competir com a narrativa técnica." },
      { id: "cv-linkedin", t: "Espelhar as mudanças no LinkedIn e no GitHub", d: "Fixar no GitHub os repositórios de backend conforme forem saindo." }
    ],
    dod: "Uma pessoa que lê só o topo do currículo entende que você está indo para backend, e por quê."
  },
  {
    id: "dotnet", title: "C# e .NET na prática", weeks: "Semanas 2 a 5",
    source: "Habilidades requeridas",
    goal: "Reconstruir em .NET uma API que você já fez em Node.js na UnB, para aprender a stack comparando com algo que você conhece bem.",
    tasks: [
      { id: "dn-csharp", t: "Fundamentos de C#", d: "Tipos, records, nullable reference types, generics, LINQ e tratamento de exceções." },
      { id: "dn-async", t: "async/await e Task", d: "Comparar com Promises do Node: o que bloqueia, o que não bloqueia, e quando usar ConfigureAwait." },
      { id: "dn-di", t: "Injeção de dependência e ciclos de vida", d: "Singleton, Scoped e Transient: o que quebra quando você escolhe errado." },
      { id: "dn-api", t: "ASP.NET Core: minimal APIs e controllers", d: "Rotas, validação, middlewares, tratamento global de erros e Swagger/OpenAPI." },
      { id: "dn-rebuild", t: "Reconstruir a API da UnB em .NET", d: "Mesmo domínio, mesmos endpoints. Anote cada diferença de tipagem, async e DI." },
      { id: "dn-readme", t: "Publicar no GitHub com README de decisões", d: "Por que .NET, trade-offs em relação ao Node e o que você faria diferente agora." }
    ],
    dod: "Você explica em 2 minutos por que escolheu .NET para esse problema, quais trade-offs encontrou em relação ao Node e qual decisão de design tomaria diferente hoje."
  },
  {
    id: "data", title: "SQL Server, Entity Framework e Dapper", weeks: "Semanas 6 a 9",
    source: "Habilidades requeridas",
    goal: "Ligar a API a um banco real e entender quando usar ORM e quando escrever SQL, medindo em vez de opinar.",
    tasks: [
      { id: "db-sql", t: "SQL Server no Docker", d: "Modelagem, chaves, índices e leitura de plano de execução." },
      { id: "db-ef", t: "Entity Framework Core", d: "DbContext, migrations, relacionamentos, tracking vs AsNoTracking e o problema N+1." },
      { id: "db-dapper", t: "Dapper nas consultas de leitura", d: "Mesma consulta nas duas abordagens, no mesmo projeto." },
      { id: "db-bench", t: "Investigar uma consulta lenta", d: "Gerar volume de dados, medir, propor correção (índice, projeção, Dapper) e medir de novo." },
      { id: "db-course", t: "Curso curto de Entity Framework Core", d: "Um só, aplicado direto no projeto, em vez de vários cursos genéricos." }
    ],
    dod: "O README tem uma tabela de antes e depois da otimização, e você sabe dizer por que escolheu EF ou Dapper em cada caso."
  },
  {
    id: "tests", title: "Testes automatizados em C#", weeks: "Semanas 10 e 11",
    source: "Formação complementar",
    goal: "Proteger o projeto antes de dividi-lo em serviços, e ter um sinal concreto de qualidade de engenharia.",
    tasks: [
      { id: "ts-unit", t: "Testes de unidade com xUnit", d: "Regras de negócio isoladas, com dublês só onde fazem sentido." },
      { id: "ts-int", t: "Testes de integração da API", d: "WebApplicationFactory testando os endpoints de ponta a ponta." },
      { id: "ts-db", t: "Banco real nos testes com Testcontainers", d: "SQL Server subindo em container durante o teste." },
      { id: "ts-ci", t: "Pipeline no GitHub Actions", d: "Build e testes a cada push, com badge no README." }
    ],
    dod: "Uma mudança que quebra uma regra de negócio falha no CI antes de chegar à main."
  },
  {
    id: "msg", title: "Mensageria e microsserviços", weeks: "Semanas 12 a 16",
    source: "Habilidades requeridas",
    goal: "Dividir o sistema em dois serviços que conversam por eventos, e entender os problemas que isso cria.",
    tasks: [
      { id: "ms-split", t: "Separar o projeto em dois serviços", d: "Cada um com seu banco, orquestrados com Docker Compose." },
      { id: "ms-rabbit", t: "RabbitMQ", d: "Filas, exchanges, ack, retentativas e dead-letter queue." },
      { id: "ms-idem", t: "Idempotência e padrão Outbox", d: "O que acontece quando a mesma mensagem chega duas vezes, ou o banco salva e a mensagem não sai." },
      { id: "ms-kafka", t: "Introdução a Kafka", d: "Tópicos, partições, consumer groups e quando escolher Kafka em vez de RabbitMQ." },
      { id: "ms-adr", t: "Registrar as decisões em ADRs", d: "Um arquivo curto por decisão: contexto, alternativas descartadas, escolha, consequências." }
    ],
    dod: "Você desenha a arquitetura no quadro e explica o que acontece quando um dos serviços cai."
  },
  {
    id: "obs", title: "Observabilidade e performance", weeks: "Semanas 17 e 18",
    source: "Experiência profissional",
    goal: "Conseguir investigar um problema de performance com dados, que é exatamente o tipo de caso que falta no seu currículo.",
    tasks: [
      { id: "ob-logs", t: "Logs estruturados com Serilog", d: "Correlation ID atravessando os dois serviços." },
      { id: "ob-otel", t: "Traces e métricas com OpenTelemetry", d: "Visualizar no Jaeger ou Grafana, rodando no Compose." },
      { id: "ob-health", t: "Health checks e readiness", d: "Para o banco e para o broker de mensagens." },
      { id: "ob-hunt", t: "Caçar um gargalo de propósito", d: "Introduzir uma lentidão realista, achar pelos traces, corrigir e documentar o caminho." }
    ],
    dod: "Você tem um print de trace antes e depois, e uma história de investigação que vira o caso técnico de entrevista."
  },
  {
    id: "ai", title: "IA como ferramenta, não substituta", weeks: "Semana 19",
    source: "Habilidades desejadas",
    goal: "Transformar seu interesse em IA num diferencial comprovável dentro do trabalho de engenharia backend.",
    tasks: [
      { id: "ai-feature", t: "Gerar uma funcionalidade nova com Copilot ou Cursor", d: "Algo real no projeto, como um endpoint de relatório ou um consumidor de eventos." },
      { id: "ai-review", t: "Revisar criticamente o código gerado", d: "Anotar o que a IA acertou e onde precisou de intervenção sua." },
      { id: "ai-tests", t: "Validar com testes", d: "Os testes são seus, escritos antes de aceitar a sugestão." },
      { id: "ai-post", t: "Publicar um post técnico curto", d: "Como você usa IA sem delegar responsabilidade técnica." }
    ],
    dod: "Você demonstra a entrega e defende cada decisão, deixando claro onde manteve autonomia."
  },
  {
    id: "story", title: "Narrativas prontas", weeks: "Semana 20",
    source: "Experiência e learning agility",
    goal: "Fechar as duas histórias que o feedback pede, usando o que você construiu nas fases anteriores.",
    tasks: [
      { id: "st-case", t: "Escrever o caso técnico", d: "Use o formulário no fim da página." },
      { id: "st-learn", t: "Escrever o ciclo de aprendizado", d: "Eu não sabia X, precisei por causa de Y, aprendi com Z…" },
      { id: "st-time", t: "Ensaiar em voz alta com cronômetro", d: "Caso técnico em 3 minutos; explicação do projeto .NET em 2." },
      { id: "st-mock", t: "Fazer uma entrevista simulada", d: "Com alguém da área, pedindo perguntas de aprofundamento." }
    ],
    dod: "Você conta as duas histórias no tempo, sem ler, e aguenta duas perguntas de aprofundamento em cada uma."
  }
];

export const GAPS: Gap[] = [
  { t: "Backend com .NET e C#", w: "Competência central da vaga, sem evidência no perfil.", p: "dotnet" },
  { t: "Entity Framework, Dapper e SQL Server", w: "Exigidos e ainda não demonstrados.", p: "data" },
  { t: "Microsserviços, RabbitMQ e Kafka", w: "Arquitetura distribuída em escala profissional.", p: "msg" },
  { t: "Decisões de arquitetura e performance", w: "Falta um caso de investigação e ajuste.", p: "obs" },
  { t: "Posicionamento ainda centrado em front-end", w: "A transição parece acidental, não intencional.", p: "cv" },
  { t: "Graduação sem data de conclusão", w: "Ambiguidade fácil de eliminar.", p: "cv" },
  { t: "Formação complementar longe da vaga", w: "Cursos em IA e UX, nenhum em .NET ou testes.", p: "tests" },
  { t: "IA sem conexão com engenharia backend", w: "Diferencial que ainda não é comprovável.", p: "ai" },
  { t: "Processo de aprendizado invisível", w: "O currículo mostra a chegada, não o caminho.", p: "story" }
];

export const CASE: [string, string][] = [
  ["problema", "Qual era o problema, e o que nele não era óbvio no começo?"],
  ["descartada", "Que alternativa você considerou e descartou, e por quê?"],
  ["escolha", "O que você escolheu e qual trade-off isso representava?"],
  ["feedback", "Onde recebeu crítica ou feedback?"],
  ["ajuste", "Como ajustou a abordagem depois?"],
  ["impacto", "Qual foi o impacto? E qual foi seu papel versus o do time?"]
];
export const LEARN: [string, string][] = [
  ["x", "Eu não sabia…"],
  ["y", "Precisei aprender porque…"],
  ["z", "Usei para aprender…"],
  ["w", "Apliquei pela primeira vez em…"],
  ["dific", "Encontrei esta dificuldade…"],
  ["ajuste", "Ajustei desta forma…"],
  ["hoje", "Hoje consigo…"]
];

export const STORAGE_KEY = 'amanda-roadmap-v1'
