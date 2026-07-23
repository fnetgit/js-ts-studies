# sinutre-back

Backend do **SiNutre — Sistema de Ingestão de Macronutrientes**.

Stack: **TypeScript + Express + Prisma + SQLite**.

## Requisitos Obrigatórios e Links Úteis

- **Frontend (Vercel):** [https://js-ts-studies.vercel.app](https://js-ts-studies.vercel.app)
- **Backend (Railway):** [https://js-ts-studies-production.up.railway.app](https://js-ts-studies-production.up.railway.app)
- **Repositório GitHub (Frontend & Backend):** [https://github.com/fnetgit/js-ts-studies/tree/main/sinutri](https://github.com/fnetgit/js-ts-studies/tree/main/sinutri)

## Funcionalidades da API (Projeto Final)

Esta API foi expandida para atender aos requisitos do Projeto Final do curso, englobando:
- **Autenticação:** Login seguro via GitHub OAuth.
- **Refeições (Meals):** Cadastro, edição, exclusão e listagem de alimentos consumidos (CRUD completo).
- **Validação de Dados:** Uso de `Zod` para validar obrigatoriedade e tipos de dados no cadastro de refeições e do perfil de usuário.
- **Perfil do Usuário:** Endpoints para captura e atualização de dados complementares (Altura, Peso, Gênero, Objetivo, Nível de Atividade Física e Meta Calórica).
- **Métricas e Dashboards:** Nova rota de consolidação `/metrics/summary` para envio do IMC calculado, classificação de risco e média calórica dos últimos 7 dias.

Estrutura mínima: focada em **rotas** e **controllers** de forma desacoplada e limpa.

## Setup

```bash
npm install
cp .env.example .env          # preencha GITHUB_CLIENT_ID/SECRET e JWT_SECRET
npx prisma migrate dev        # cria prisma/dev.db e aplica as tabelas
npm run dev
```

O banco é um único arquivo em `prisma/dev.db` (ignorado pelo git). Para zerar,
basta apagar o arquivo e rodar `npx prisma migrate dev` de novo.
