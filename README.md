# amandaamoura.github.io

Portfólio pessoal de Amanda de Moura, feito com React, TypeScript e Vite.

- `src/content.ts` reúne todo o texto do site (experiências, projetos, habilidades). Para atualizar o portfólio, quase sempre basta editar esse arquivo.
- `src/components/Roadmap.tsx` é a aba Roadmap do site; `/roadmap/` redireciona para ela.
- `extras/roadmap-completo.html` é a versão completa do roadmap, com as narrativas para entrevista. Ela fica fora do site: abra o arquivo direto no navegador.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicação

Cada push na `main` dispara o workflow `.github/workflows/deploy.yml`, que gera o build e publica no GitHub Pages. Em **Settings → Pages**, a opção **Source** precisa estar em **GitHub Actions**.
