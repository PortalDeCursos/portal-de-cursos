# Portal de Cursos

Frontend com React, TypeScript, Vite e Tailwind CSS.

Execute na pasta `frontend`:

```sh
npm install
npm run dev
```

Antes de concluir cada etapa:

```sh
npm run lint
npm run build
```

Componentes compartilhados ficam em `src/components`, tipos e componentes de domínio em `src/features`, páginas em `src/pages` e dados de demonstração em `src/mocks`. O `App.tsx` organiza as rotas e o layout global.

Manrope é carregada pelo Google Fonts em `index.html` e requer acesso à internet. Para hospedagem local futura, coloque arquivos licenciados em `public/fonts` e configure `@font-face`. Nenhum logotipo foi fornecido: o cabeçalho usa texto e um ícone.

Home implementada a partir do Figma, nó 7:2, com os cursos e projetos acadêmicos do protótipo. Catálogo com busca, biblioteca e detalhes usam dados locais de demonstração. A interface pública não possui controles de simulação. Listas vazias mostram uma mensagem automaticamente; estados de carregamento, erro e nova tentativa serão ligados à futura integração com a API. Submissão, área restrita e documentos institucionais exibem um aviso de funcionalidade pendente; não enviam dados. Formulários, autenticação e APIs são etapas futuras. O backend pode ser adicionado em uma pasta própria.

Os assets exportados do Figma estão em `frontend/public/design`. As cores específicas do protótipo usam tokens `academic-*`, preservando os tokens compartilhados iniciais. A fonte JetBrains Mono também é carregada pelo Google Fonts para as notas do protótipo.

Os scripts usam `--configLoader native` para evitar a falha do empacotador de configuração ao carregar o módulo nativo do Tailwind no Windows. Requer Node com suporte a TypeScript nativo (validado com Node 24).

Em produção, configure a hospedagem para encaminhar as rotas do frontend para `index.html`.

## Catálogo e detalhes dos cursos

O catálogo implementa os frames `9:2765`, `9:3190` e `9:3334` como estados da mesma página. Busca, filtros combinados, remoção de filtros e recuperação da busca funcionam com os dados locais. Os filtros ficam na URL. O módulo de dados é carregado de forma assíncrona, com skeleton e tratamento de falha; não há atraso artificial ou botões públicos de simulação.

Os detalhes implementam os frames `10:4128`, `10:4468` e `10:4732`. A identidade do curso permanece ao trocar entre visão geral, grade curricular, professores e projetos aprovados. As abas permitem navegação por setas, Home e End. O estado sem projetos depende dos dados; quando somente uma categoria está vazia, a mensagem orienta a remover o filtro.

Componentes do catálogo estão em `src/features/courses`, os de detalhes em `src/features/courses/details` e os de projetos em `src/features/projects`. Header e Footer são compartilhados. A foto do laboratório e os ícones do Figma estão em `public/design`.

Os conteúdos, indicadores, currículos, docentes e dados institucionais continuam demonstrativos. A grade de exemplo do TADS possui 32 componentes de 75 horas, totalizando 2.400 horas. Os outros cursos usam os conteúdos disponíveis, sem repetir indevidamente as informações específicas do TADS. Documentos PDF, submissão e contato dependem da integração institucional e exibem o aviso já usado no projeto.

Validação adicional, na pasta `frontend`:

```sh
npm run test
npm run build
npm run check:views
```

`check:views` gera snapshots estáticos dos componentes reais de carregamento e de curso sem projetos em `reports`, para revisão visual; eles não são rotas de simulação da aplicação pública.

