# Verzel Store — Teste Técnico de QA

Este repositório reúne as entregas do teste técnico para a vaga de **QA Júnior da Verzel**.

O objetivo da avaliação é validar a entrega de **cupom de desconto e frete grátis** da Verzel Store por meio de planejamento de testes, execução manual, testes exploratórios, validações de API, evidências e automação.

> **Status atual:** V1 concluída para os testes funcionais. Os testes exploratórios e a automação com Playwright serão adicionados nas próximas etapas antes da entrega final.

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

A execução foi organizada em etapas para separar planejamento, execução e evidências.

### V1 — Testes manuais e API

A V1 contempla:

- levantamento dos casos de teste funcionais;
- cenários em BDD/Gherkin;
- execução manual pela interface;
- validações complementares pela API utilizando Postman;
- comparação entre UI e API;
- registro das evidências;
- documentação das divergências encontradas diretamente nos respectivos cenários;
- testes exploratórios.

### V2 — Automação

A V2 será dedicada a:

- automação de pelo menos 3 cenários utilizando Playwright;
- configuração e organização do projeto de automação;
- instruções para execução local;
- integração da automação à entrega final.

As instruções desta seção serão atualizadas após a conclusão da V2.

---

## Estrutura do repositório

```text
VERZEL-STORE-QA/
│
├── README.md
├── .gitignore
│
├── docs/
│   │
│   ├── funcionais/
│   │   ├── casos-de-teste.md
│   │   ├── bdd.md
│   │   ├── execucao.md
│   │   └── evidencias/
│   │
│   └── exploratorios/
│       ├── casos-de-teste.md
│       ├── bdd.md
│       ├── execucao.md
│       └── evidencias/
│
└── postman/
    └── Verzel-Store.postman_collection.json
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
| Collection do Postman | `postman/Verzel-Store.postman_collection.json` |
| Automação Playwright | Será adicionada na V2 |

---

## Testes funcionais

Foram planejados e executados **20 cenários funcionais**, cobrindo os critérios de aceite e as regras de cálculo da entrega.

Os cenários incluem, entre outros:

- aplicação do cupom `BEMVINDO10`;
- validação do desconto de 10%;
- case-insensitive do código do cupom;
- tratamento de espaços nas extremidades;
- cupom inexistente;
- cupom expirado;
- troca de cupom;
- frete acima, abaixo e exatamente no limite de R$ 200,00;
- interação entre desconto e frete grátis;
- quantidade máxima de produtos;
- arredondamento;
- cálculo de subtotal;
- cálculo do total final.

### Resultado atual da execução funcional

- **20** cenários funcionais executados;
- **17** cenários concluídos sem divergências nas validações previstas;
- **3** cenários apresentaram divergências:
  - `CT-F11`;
  - `CT-F14`;
  - `CT-F17`.

Os detalhes completos estão em:

`docs/funcionais/execucao.md`

---

## Divergências encontradas

As divergências identificadas durante a execução foram documentadas diretamente nos respectivos casos de teste, junto com o resultado obtido, observações e evidências.

### CT-F11 — Frete grátis no limite de R$ 200,00

Foi identificada cobrança de R$ 19,90 de frete para um carrinho com subtotal exatamente igual a R$ 200,00, apesar da regra definir frete grátis a partir desse valor, inclusive.

A divergência foi reproduzida tanto na interface quanto na API.

### CT-F14 — Frete grátis após aplicação de cupom

O mesmo comportamento relacionado ao frete foi observado após a aplicação do cupom `BEMVINDO10` em um carrinho com subtotal de R$ 200,00.

A execução confirmou que a inconsistência não está restrita à aplicação do desconto.

### CT-F17 — Limite máximo de quantidade na API

A interface bloqueou corretamente quantidades superiores a 5 unidades do mesmo produto.

Entretanto, a API aceitou uma requisição com 6 unidades e retornou `200 OK`, processando o carrinho normalmente.

Os detalhes completos e as evidências dessas divergências estão disponíveis em:

`docs/funcionais/execucao.md`

---

## Validação de API

As validações de API foram realizadas com **Postman**.

O principal endpoint utilizado durante os testes do carrinho foi:

```text
POST /api/carrinho/calcular
```

As requisições foram utilizadas para:

- validar regras de negócio independentemente da interface;
- comparar os cálculos da API com os valores apresentados na UI;
- validar cenários positivos e negativos;
- investigar divergências encontradas durante os testes manuais.

A Collection utilizada será disponibilizada em:

```text
postman/Verzel-Store.postman_collection.json
```

### Como importar a Collection

1. Abra o Postman.
2. Selecione **Import**.
3. Escolha o arquivo `Verzel-Store.postman_collection.json`.
4. Importe a Collection.
5. Configure a variável `baseUrl` com:

```text
https://verzel-store.qa-test-verzel-store.workers.dev
```

---

## Testes exploratórios

Os testes exploratórios foram planejados para complementar os critérios de aceite e investigar comportamentos resultantes de alterações de estado do carrinho, combinações de ações e situações não especificadas diretamente pela documentação.

Entre os pontos planejados estão:

- alteração de quantidade após aplicação do cupom;
- remoção de itens após aplicação do cupom;
- perda e obtenção dinâmica de frete grátis;
- reaplicação do cupom;
- alterações rápidas de quantidade;
- persistência do cupom após esvaziar o carrinho;
- comparação direta UI x API;
- exploração dos limites de quantidade;
- entradas alternativas para o código do cupom;
- uso de cupom com carrinho vazio;
- cupom com espaço interno, como `bem vindo10`.

Os resultados ficarão disponíveis em:

`docs/exploratorios/execucao.md`

---

## Automação com Playwright

A automação será implementada na V2.

O teste técnico exige a automação de pelo menos 3 cenários com Playwright. Após a implementação, esta seção será atualizada com:

- pré-requisitos;
- instalação das dependências;
- comandos para execução;
- estrutura dos testes;
- cenários automatizados;
- forma de visualizar os resultados.

---

## Evidências

As evidências foram separadas por tipo de teste para facilitar a navegação.

```text
docs/funcionais/evidencias/
docs/exploratorios/evidencias/
```

Nas validações funcionais foram registradas evidências da interface e, quando aplicável, dos retornos da API.

---

## Critérios de classificação

## Critérios de classificação

Durante a execução foram utilizados os seguintes status:

| Status | Significado |
|---|---|
| ✅ PASSOU | Comportamento conforme o esperado |
| ❌ FALHOU | Comportamento divergente da regra esperada |

---

## Uso de IA

A IA foi utilizada como ferramenta de apoio durante o teste para:

- apoiar a organização da estratégia de testes;
- revisar e estruturar cenários de teste;
- auxiliar na escrita dos cenários em BDD/Gherkin;
- revisar a documentação em Markdown;
- apoiar a organização do repositório;
- discutir a classificação de comportamentos observados durante a execução.

A execução dos testes na interface e na API, coleta de evidências, análise dos retornos e reprodução dos comportamentos foram realizadas manualmente.

---

## Ferramentas utilizadas

- navegador web — execução dos testes de interface;
- Postman — validação da API;
- Markdown — documentação dos testes e resultados;
- Git/GitHub — versionamento e entrega;
- Playwright — automação dos cenários na V2.

---

## Observações sobre o ambiente

Durante os testes foram respeitadas as simplificações e limitações descritas na documentação do ambiente.

Não foram tratados como bugs comportamentos explicitamente definidos como esperados ou itens declarados fora do escopo.

---

## Autor

**João Pedro Carvalho de Oliveira**

Teste técnico — QA Júnior | Verzel
