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
