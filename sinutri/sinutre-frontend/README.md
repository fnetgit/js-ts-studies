# Nutridash

Dashboard de nutrição em React, convertido a partir do protótipo HTML original
em `../Nutridash`. Toda a estilização foi migrada para Tailwind CSS (com daisyUI
v5 como plugin) e a UI foi quebrada em componentes reutilizáveis.

## Stack

- Vite 6 + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- daisyUI v5 (plugin do Tailwind)
- @phosphor-icons/react para os ícones
- ESLint 9 (flat config) + typescript-eslint

## Estrutura

```
src/
├── components/
│   ├── cards/      # AddMealCard, TotalMealsCard
│   ├── forms/      # FormField
│   ├── layout/     # Sidebar, SidebarBrand, SidebarItem, Header
│   ├── macros/     # MacroStat, MacroStatsBar
│   ├── meals/      # MealActionButton, MealFab, MealsList/Table…
│   └── modal/      # AddMealModal e suas sub-partes
├── constants/      # MEAL_CATEGORIES, NAV_ITEMS
├── data/           # mocks de usuário, macros e refeições
├── hooks/          # useMealModal
├── pages/          # DashboardPage
├── styles/         # tailwind + tema sinutre
├── types/          # tipos de domínio
├── App.tsx
└── main.tsx
```

## Scripts

```bash
npm install     # instala dependências
npm run dev     # servidor de desenvolvimento (vite)
npm run build   # build de produção (tsc -b + vite build)
npm run lint    # ESLint em todo o projeto
npm run preview # preview do build
```

## Tema

O tema customizado `sinutre` (paleta verde/laranja) está definido em
`src/styles/theme.css` usando a sintaxe `@plugin 'daisyui/theme'` do daisyUI v5.

## Requisitos Obrigatórios e Links Úteis

Para atender aos requisitos do projeto final, seguem os links do projeto em produção e repositórios:

- **Frontend (Vercel):** [https://js-ts-studies.vercel.app](https://js-ts-studies.vercel.app)
- **Backend (Railway):** [https://js-ts-studies-production.up.railway.app](https://js-ts-studies-production.up.railway.app)
- **Repositório GitHub (Frontend & Backend):** [https://github.com/fnetgit/js-ts-studies/tree/main/sinutri](https://github.com/fnetgit/js-ts-studies/tree/main/sinutri)

## Requisitos Complementares Desenvolvidos

Este projeto implementou as seguintes funcionalidades da tabela do Projeto Final:

- **Ref 01:** Na página de alimentos, alterar um alimento cadastrado. (As mudanças são refletidas de imediato na listagem e no backend).
- **Ref 02:** Na página de alimentos, excluir um alimento cadastrado.
- **Ref 03:** Incluir no cadastro e/ou alteração do alimento validação de dados. (Uso do Zod no backend e validação no frontend).
- **Ref 04:** Cadastrar dados complementares do usuário logado, como meta calórica, altura e peso com validação de dados. (Criada a página Meu Perfil).
- **Ref 05:** Alterar dados complementares do usuário logado.
- **Ref 06:** Visualizar meta calórica no dashboard, uma vez cadastrado pelo usuário essa informação e armazenada no banco de dados.
- **Ref 07:** Sinalizar se a quantidade da meta calórica diária foi ultrapassada. (Alerta visual na progress bar do Dashboard).
- **Ref 08:** Criar uma nova página de métricas acessada pelo menu, e colocar duas componentes que trarão dados de IMC e Média Calorica.
- **Ref 09:** Adicionar na página de métricas o IMC do usuário e sinalizar em que faixa ele se encontra. (O backend calcula a classificação de risco).
- **Ref 10:** Adicionar na página de métricas a Média calórica e sua relação com a meta estabelecida nos últimos sete dias.
- **Ref 11:** Fazer uma forma do usuário fazer logout. (Apaga o token e retorna ao login).
- **Ref 12:** Mudar cores da interface. (Adicionado o tom Laranja/Vermelho para combinar com um app de nutrição).
