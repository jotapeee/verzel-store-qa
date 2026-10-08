# Verzel Store — Teste Técnico de QA

Este repositório reúne as entregas do teste técnico para a vaga de **QA Júnior da Verzel**.

O objetivo da avaliação é validar a entrega de **cupom de desconto e frete grátis** da Verzel Store por meio de planejamento de testes, execução manual, testes exploratórios, validações de API, registro de evidências, documentação de bugs e automação com Playwright.

> **Status atual:** V1 e V2 concluídas. Os testes funcionais, exploratórios e automatizados foram finalizados, assim como a exportação da Collection do Postman. Resta apenas a revisão final do repositório e a publicação para entrega.

---

## Escopo da entrega

A funcionalidade avaliada contempla principalmente:

- aplicação de cupons de desconto;
- validação de cupons válidos, inválidos e expirados;
- cálculo de desconto;
- cálculo de frete;
- regra de frete grátis;
- limite de quantidade por produto;
- cálculos de subtotal e total do carrinho;
- consistência entre interface e API.

Os cálculos do carrinho são realizados pela API e apresentados pela interface, por isso parte relevante da estratégia foi baseada em validações cruzadas entre **UI e API**.

---

## Ambiente

### Loja

`https://verzel-store.qa-test-verzel-store.workers.dev/`

### Documentação

`https://verzel-store.qa-test-verzel-store.workers.dev/documentacao`

### API

`https://verzel-store.qa-test-verzel-store.workers.dev/api`

---

## Estratégia de testes

### V1 — Testes manuais, exploratórios e API

A V1 foi concluída e contempla:

- levantamento dos casos de teste funcionais;
- cenários em BDD/Gherkin;
- execução manual pela interface;
- validações complementares pela API utilizando Postman;
- comparação entre UI e API;
- testes exploratórios;
- registro das evidências;
- documentação das divergências encontradas;
- relatório consolidado dos bugs identificados;
- exportação da Collection do Postman.

### V2 — Automação com Playwright

A V2 também foi concluída e contempla:

- configuração do Playwright Test com TypeScript;
- execução em Chromium;
- smoke test da aplicação;
- automação de 4 cenários funcionais;
- validação de estabilidade dos testes;
- execução da suíte completa;
- geração de screenshot, vídeo e trace conforme configuração do Playwright;
- relatório HTML do Playwright.

---

## Estrutura do repositório

```text
VERZEL-STORE-QA/
│
├── README.md
├── .gitignore
│
├── docs/
│   ├── funcionais/
│   │   ├── casos-de-teste.md
│   │   ├── bdd.md
│   │   ├── execucao.md
│   │   └── evidencias/
│   ├── exploratorios/
│   │   ├── casos-de-teste.md
│   │   ├── bdd.md
│   │   ├── execucao.md
│   │   └── evidencias/
│   └── bugs/
│       └── bugs.md
│
├── postman/
│   └── Verzel-Store.postman_collection.json
│
└── automation/
    ├── tests/
    │   ├── smoke.spec.ts
    │   └── functional/
    │       ├── CT-F01-aplicar-cupom-valido.spec.ts
    │       ├── CT-F06-cupom-invalido.spec.ts
    │       ├── CT-F10-frete-gratis-acima-200.spec.ts
    │       └── CT-F17-limite-maximo-quantidade.spec.ts
    ├── playwright.config.ts
    ├── package.json
    └── package-lock.json
```

---

## Onde encontrar cada entrega

| Entrega | Local |
|---|---|
| Casos de teste funcionais | `docs/funcionais/casos-de-teste.md` |
| Cenários funcionais em BDD | `docs/funcionais/bdd.md` |
| Execução dos testes funcionais | `docs/funcionais/execucao.md` |
| Evidências funcionais | `docs/funcionais/evidencias/` |
| Casos de teste exploratórios | `docs/exploratorios/casos-de-teste.md` |
| Cenários exploratórios em BDD | `docs/exploratorios/bdd.md` |
| Execução dos testes exploratórios | `docs/exploratorios/execucao.md` |
| Evidências exploratórias | `docs/exploratorios/evidencias/` |
| Relatório de bugs | `docs/bugs/bugs.md` |
| Collection do Postman | `postman/Verzel-Store.postman_collection.json` |
| Automação Playwright | `automation/` |
| Testes automatizados | `automation/tests/functional/` |

---

## Testes funcionais

Foram planejados e executados **20 cenários funcionais**, cobrindo os critérios de aceite e as regras de cálculo da entrega.

### Resultado da execução funcional

- **20** cenários executados;
- **17** cenários concluídos sem divergências nas validações previstas;
- **3** cenários apresentaram divergências:
  - `CT-F11`;
  - `CT-F14`;
  - `CT-F17`.

Os detalhes completos estão em:

`docs/funcionais/execucao.md`

---

## Testes exploratórios

Os testes exploratórios foram concluídos com o objetivo de complementar os critérios de aceite e investigar comportamentos de transição de estado, combinações de ações e situações não especificadas diretamente na documentação.

Foram explorados cenários como:

- alteração de quantidade após aplicação do cupom;
- redução de quantidade após aplicação do cupom;
- remoção de produtos com cupom ativo;
- perda e obtenção de frete grátis após alterações no carrinho;
- remoção e reaplicação do mesmo cupom;
- tentativas repetidas de aplicação;
- alterações rápidas de quantidade;
- persistência do cupom após esvaziar o carrinho;
- diferentes combinações de produtos e quantidades;
- combinações de valores e consistência monetária;
- comparação direta entre UI e API;
- limite máximo de quantidade;
- formatos alternativos do código do cupom;
- aplicação de cupom com carrinho vazio.

O cenário de espaço interno no código do cupom foi incorporado ao `CT-E14`, evitando duplicação de cobertura.

Os resultados completos estão em:

`docs/exploratorios/execucao.md`

---

## Bugs identificados

Os bugs encontrados foram centralizados em:

`docs/bugs/bugs.md`

### BUG-001 — Frete cobrado indevidamente para subtotal igual a R$ 200,00

O sistema mantém a cobrança de R$ 19,90 quando o subtotal é exatamente R$ 200,00, apesar da regra de frete grátis definir esse valor como limite inclusivo.

O comportamento foi reproduzido tanto na interface quanto na API.

Cenários relacionados:

- `CT-F11`;
- `CT-F14`.

### BUG-002 — API permite quantidade superior ao limite máximo de 5 unidades

A interface impede corretamente quantidades acima de 5 unidades por produto, porém a API aceita uma requisição com 6 unidades e processa o carrinho normalmente.

Cenário relacionado:

- `CT-F17`.

---

## Validação de API

As validações de API foram realizadas com **Postman**.

O principal endpoint utilizado durante os testes do carrinho foi:

```text
POST /api/carrinho/calcular
```

A Collection utilizada está disponível em:

```text
postman/Verzel-Store.postman_collection.json
```

### Como importar a Collection

A Collection do Postman está disponível no repositório em:

`postman/Verzel-Store.postman_collection.json`

Para utilizá-la:

1. Clone ou baixe este repositório para o seu computador.
2. Localize o arquivo:

   `postman/Verzel-Store.postman_collection.json`

3. Abra o Postman.
4. Clique em **Import**.
5. Selecione ou arraste manualmente o arquivo `Verzel-Store.postman_collection.json` para a janela de importação.
6. Conclua a importação da Collection.
7. Confirme que a variável `baseUrl` está configurada com:

   `https://verzel-store.qa-test-verzel-store.workers.dev`

8. Abra uma das requisições e execute normalmente pelo botão **Send**.

> O caminho `postman/Verzel-Store.postman_collection.json` indica apenas a localização do arquivo dentro deste repositório. Ele não deve ser digitado diretamente no campo de importação do Postman.

> **Validação realizada:** a Collection exportada foi importada manualmente com sucesso no Postman.

---

## Automação com Playwright

A automação foi implementada utilizando **Playwright Test + TypeScript**.

Foram automatizados 4 cenários funcionais, além de um smoke test.

### Cenários automatizados

| Cenário | Objetivo |
|---|---|
| `CT-F01` | Aplicar o cupom válido `BEMVINDO10` e validar o desconto |
| `CT-F06` | Rejeitar um cupom inexistente sem aplicar desconto |
| `CT-F10` | Aplicar frete grátis para subtotal superior a R$ 200,00 |
| `CT-F17` | Impedir quantidade superior a 5 unidades por produto na UI |

Também existe:

`automation/tests/smoke.spec.ts`

responsável por validar o carregamento básico da aplicação.

### Resultado da suíte automatizada

A execução completa apresentou:

```text
5 passed
```

Os cenários automatizados foram executados de forma independente e também validados em conjunto.

Os testes principais foram executados com repetição para verificar estabilidade, incluindo execuções com:

```text
--repeat-each=3
```

---

## Instalação da automação

### Pré-requisitos

Antes de executar os testes automatizados, é necessário possuir:

- Node.js instalado;
- npm disponível no terminal;
- acesso à internet para instalação inicial das dependências e do Chromium.

### Instalar dependências

A partir da raiz do repositório:

#### Windows

```bash
npm.cmd install --prefix automation
```

Depois, instale o navegador Chromium utilizado pelo Playwright:

```bash
cd automation
npx.cmd playwright install chromium
cd ..
```

#### Linux / macOS

```bash
npm install --prefix automation
```

Depois:

```bash
cd automation
npx playwright install chromium
cd ..
```

O arquivo `package-lock.json` está versionado para manter as versões das dependências consistentes entre os ambientes.

---

## Como executar a automação

### Windows

Para executar todos os testes e acompanhar apenas pelo terminal:

```bash
npm.cmd test --prefix automation
```

Para executar todos os testes com o navegador visível:

```bash
npm.cmd run test:headed --prefix automation
```

Para abrir a interface interativa do Playwright, na qual é possível selecionar, executar e depurar cada teste:

```bash
npm.cmd run test:ui --prefix automation
```

Para abrir o relatório HTML após uma execução:

```bash
npm.cmd run report --prefix automation
```

### Linux / macOS

Os mesmos scripts podem ser executados sem o sufixo `.cmd`:

```bash
npm test --prefix automation
```

```bash
npm run test:headed --prefix automation
```

```bash
npm run test:ui --prefix automation
```

```bash
npm run report --prefix automation
```

---

## Configuração do Playwright

A configuração utiliza:

- TypeScript;
- Chromium;
- `baseURL` da Verzel Store;
- `screenshot: only-on-failure`;
- `video: retain-on-failure`;
- `trace: on-first-retry`;
- reporter `list`;
- reporter HTML.

A `baseURL` permite que os testes utilizem navegação relativa, por exemplo:

```ts
await page.goto('/');
```

sem repetir a URL completa da aplicação em cada cenário.

---

## Estratégia da automação

A automação prioriza:

- testes independentes;
- locators semânticos;
- `getByRole()`;
- `getByLabel()`;
- `getByText()`;
- atributos estáveis fornecidos pela aplicação, como `data-valor`;
- assertions com `expect()`;
- ausência de sleeps fixos;
- ausência de `waitForTimeout`;
- ausência de seletores posicionais quando existe alternativa mais estável.

Não foi adotado Page Object Model nesta entrega por se tratar de uma suíte pequena e objetiva.

---

## Evidências

As evidências dos testes manuais foram organizadas por tipo:

```text
docs/funcionais/evidencias/
docs/exploratorios/evidencias/
```

Foram utilizadas evidências quando elas agregavam valor à comprovação do comportamento observado.

Em cenários cuja validação dependia principalmente de transições de estado ou interações sequenciais, imagens estáticas não foram adicionadas quando não representavam adequadamente o comportamento validado.

Na automação, o Playwright também está configurado para gerar artefatos em situações de falha.

---

## Critérios de classificação

Durante a execução manual foram utilizados os seguintes status:

| Status | Significado |
|---|---|
| ✅ PASSOU | Comportamento conforme o esperado |
| ❌ FALHOU | Comportamento divergente da regra ou expectativa do cenário |

---

## Uso de IA

A IA foi utilizada como ferramenta de apoio durante o teste para:

- apoiar a organização da estratégia de testes;
- revisar e estruturar cenários de teste;
- auxiliar na escrita dos cenários em BDD/Gherkin;
- revisar a documentação em Markdown;
- apoiar a organização do repositório;
- discutir a classificação de comportamentos observados durante a execução;
- apoiar a estruturação do relatório de bugs;
- apoiar o planejamento e a revisão da automação com Playwright.

A execução dos testes na interface e na API, coleta de evidências, análise dos retornos e reprodução dos comportamentos foram realizadas manualmente.

Na V2, a implementação da automação foi realizada com apoio de IA no ambiente de desenvolvimento, com validação dos cenários por meio da execução real dos testes.

---

## Ferramentas utilizadas

- navegador web — execução dos testes de interface;
- Postman — validação da API;
- Playwright — automação dos cenários;
- TypeScript — implementação dos testes automatizados;
- Markdown — documentação dos testes e resultados;
- Git/GitHub — versionamento e entrega;
- Cursor — ambiente de desenvolvimento utilizado durante a automação.

---

## Status final do projeto

### V1

- ✅ Testes funcionais
- ✅ Testes exploratórios
- ✅ Evidências
- ✅ Validação de API
- ✅ Collection do Postman
- ✅ Relatório de bugs
- ✅ Documentação

### V2

- ✅ Playwright configurado
- ✅ Smoke test
- ✅ CT-F01 automatizado
- ✅ CT-F06 automatizado
- ✅ CT-F10 automatizado
- ✅ CT-F17 automatizado
- ✅ Estabilidade validada
- ✅ Suíte completa aprovada

---

## Autor

**João Pedro Carvalho de Oliveira**

Teste técnico — QA Júnior | Verzel
