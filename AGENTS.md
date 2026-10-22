# Regras locais - Oceanos Plastico Angular

## Contexto

Aplicacao Angular 18 com SSR, TypeScript 5.5, Express, RxJS, Tailwind 3,
internacionalizacao, PDF viewer, YouTube e Socket.IO.

## Comandos

```bash
npm install
npm run start
npm run test
npm run build
npm run serve:ssr:oceanos-plastico-angular
```

## Regras

- Manter codigo em `src/`; nao editar `dist/` ou `.angular/`.
- Preservar SSR: APIs de navegador exigem guarda de plataforma.
- Escapar conteudo, evitar HTML nao confiavel e sanitizar URLs.
- Configurar endpoints e chaves por ambiente; segredos nao podem entrar no
  bundle do navegador.
- Limitar eventos Socket.IO e validar mensagens.
- Tratar PDFs e conteudo externo como nao confiaveis.
- Preservar acessibilidade, responsividade e traducao.
- Pedir autorizacao antes de dependencias, integracoes, CI/CD ou deploy.
- Executar testes e build antes de concluir.

Seguir `SECURITY.md`. Achados criticos ou altos bloqueiam entrega sem aceitacao.

## Verificacao e entrega

- Objetivo: manter as paginas publicas, acessiveis, traduzidas e compativeis com SSR.
- Fontes e testes: `src/app/`; dados e imagens: `src/assets/`.
- Teste sem interface: `npm run test -- --watch=false --browsers=ChromeHeadless`.
- Teste IWPPO: acrescentar `--include=src/app/components/iwppo-2026/iwppo-2026.component.spec.ts`.
- Build de producao: `npm run build`. Seguranca: `npm audit --offline` (depende do cache local).
- Nao ha comando de lint configurado; nao adicionar ferramentas sem autorizacao.
- Seguir componentes standalone e testes Jasmine existentes; usar interpolacao para textos traduzidos.
- Preservar alteracoes existentes e revisar `git diff --check` antes da entrega.
- Sempre executar teste focado, suite e build; informar falhas e limites de verificacao.
- Pedir autorizacao antes de publicar, mudar dependencias ou infraestrutura; nunca inserir segredos ou editar gerados.
- Branches e commits devem descrever a alteracao, sem o termo proibido pelas regras globais.
