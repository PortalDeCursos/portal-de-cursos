# Roadmap

## Base pronta

- [x] Telas do Figma, componentes compartilhados e rotas.
- [x] Busca e filtros, estados de dados e navegação por teclado.
- [x] Menu responsivo, documentação, branches e CI.
- [x] Fronteira de serviço para o catálogo, com mocks preservados.

## Próximas entregas

1. Definir contrato de cursos, projetos, docentes e matriz curricular com paginação e erros padronizados. Critério: payloads validados e testes de falha/recuperação.
2. Implementar serviços de projetos e detalhes, removendo importações diretas de mocks das telas. Critério: UI independente da origem dos dados.
3. Implementar autenticação institucional e autorização no backend. Critério: sessão expirada, acesso negado e logout funcionam.
4. Criar formulário de submissão com validação, anexos e acompanhamento. Critério: envio confirmado, retry seguro e erro por campo.
5. Disponibilizar documentos e conteúdo acadêmico verificado. Critério: links reais, datas e responsáveis revisados.
6. Adicionar testes de navegação no navegador e auditoria de acessibilidade. Critério: teclado, foco, leitor de tela e breakpoints revisados.
7. Preparar deploy com fallback SPA e configuração por ambiente. Critério: rotas diretas funcionam em preview publicado.

Backend pode entrar em `backend/` quando o contrato estiver definido. Não criar infraestrutura vazia para antecipar decisões ainda abertas.
