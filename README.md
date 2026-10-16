# amandaamoura.github.io

Portfólio pessoal de Amanda de Moura, feito com React, TypeScript e Vite.

- `src/content.ts` reúne todo o texto do site (experiências, projetos, habilidades). Para atualizar o portfólio, quase sempre basta editar esse arquivo.
- `public/roadmap/` é o roadmap de estudos backend .NET, uma página estática servida em `/roadmap/`.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicação

Cada push na `main` dispara o workflow `.github/workflows/deploy.yml`, que gera o build e publica no GitHub Pages. Em **Settings → Pages**, a opção **Source** precisa estar em **GitHub Actions**.
