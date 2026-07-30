# Politica de Seguranca - Oceanos Plastico Angular

## Escopo e suporte

Cobre Angular/SSR, Express, Socket.IO, PDFs, videos, traducoes e dependencias.
Sem releases suportadas documentadas, somente a branch principal ativa recebe
correcoes.

## Reporte privado

Use Security Advisories/Private Vulnerability Reporting ou o canal privado do
mantenedor. Se indisponivel, solicite um sem expor detalhes. Nunca use issue ou
pull request publico.

Informe versao, navegador/servidor, impacto, passos seguros e evidencias sem
dados pessoais. Metas: confirmacao em 3 dias uteis, avaliacao em 7 e atualizacao
a cada 14 dias.

## Requisitos

- HTTPS, CSP e headers seguros no SSR.
- Nenhum segredo no bundle Angular.
- Sanitizacao de HTML, URLs, PDFs e conteudo externo.
- Validacao, autenticacao, autorizacao e rate limit no servidor/Socket.IO.
- Dependencias auditadas e testes/build aprovados antes de release.
- Logs sem tokens, cookies ou dados pessoais.

Falhas criticas ou altas exigem correcao, mitigacao ou aceitacao formal.
