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

## Funcionalidades Desenvolvidas (Requisitos Complementares)

Este projeto implementou as seguintes funcionalidades como parte do Projeto Final:

- **Ref 01 / Ref 02:** Na página de alimentos, é possível alterar e excluir os alimentos cadastrados através dos ícones de ação. As mudanças são refletidas de imediato na listagem.
- **Ref 03:** Inclusão de validação visual no front-end para evitar dados incompletos ou em branco no formulário de alimentos, além do backend usando `Zod` para blindar a API.
- **Ref 04 / Ref 05:** Criação da página de **Perfil** para capturar e atualizar dados complementares do usuário (Altura, Peso, Gênero, Objetivo, Nível de Atividade Física e Meta Calórica). O formulário preenche os dados previamente salvos.
- **Ref 06:** A meta calórica cadastrada no Perfil reflete dinamicamente na página inicial (Dashboard).
- **Ref 07 / Ref 19:** Sinalização clara com alerta verde ou vermelho se a meta calórica do dia foi atingida ou ultrapassada, validada via cálculo integrado entre API e o App.
- **Ref 08 / Ref 20:** Criação de uma robusta **Página de Métricas** (acessada pelo menu Progresso), que consome do backend a consolidação dos dados agregados numa rota limpa (`/metrics/summary`).
- **Ref 09 / Ref 21:** A API calcula o Índice de Massa Corporal (IMC) usando altura e peso, classificando a faixa de risco, e o frontend exibe o dado em um card customizado na página de Métricas.
- **Ref 10 / Ref 22:** Visualização da **Média Calórica dos Últimos 7 Dias** contrapondo com a meta diária (cálculo real efetuado pelo Backend).
- **Ref 11 / Ref 23:** Adicionado um botão para deslogar do sistema (Logout), que apaga o JWT armazenado e devolve o usuário para a rota `/login`.
- **Ref 12 / Ref 24:** Alteração da identidade visual do sistema utilizando o `theme.css` do Tailwind DaisyUI.
