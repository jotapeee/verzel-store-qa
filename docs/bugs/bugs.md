# Relatório de Bugs — Verzel Store

Este documento reúne as divergências identificadas durante a execução dos testes funcionais da Verzel Store.

Os detalhes de execução permanecem registrados nos respectivos casos de teste em `docs/funcionais/execucao.md`. Este arquivo centraliza os defeitos encontrados para facilitar a análise e a rastreabilidade.

---

## BUG-001 — Frete cobrado indevidamente para subtotal igual a R$ 200,00

**Status:** Identificado  
**Cenários relacionados:** `CT-F11` e `CT-F14`  
**Camadas afetadas:** UI e API

### Descrição

O sistema mantém a cobrança de frete de R$ 19,90 quando o subtotal do carrinho é exatamente R$ 200,00.

A regra definida para a funcionalidade determina que o frete deve ser grátis para compras com subtotal a partir de R$ 200,00, inclusive.

O comportamento também foi reproduzido com o cupom `BEMVINDO10` aplicado, confirmando que a divergência ocorre na validação do limite de frete grátis e não depende exclusivamente da aplicação do desconto.

### Pré-condição

Possuir produtos suficientes para montar um carrinho com subtotal exatamente igual a R$ 200,00.

### Passos para reproduzir

1. Adicionar 2 unidades do produto `P005` ao carrinho.
2. Confirmar que o subtotal é R$ 200,00.
3. Verificar o valor do frete apresentado.
4. Reproduzir o mesmo cenário utilizando `POST /api/carrinho/calcular`.
5. Opcionalmente, aplicar o cupom `BEMVINDO10` e repetir a validação.

### Resultado esperado

O frete deve ser R$ 0,00 e o carrinho deve ser considerado elegível ao frete grátis.

Na API, `freteGratis` deve retornar `true`.

### Resultado obtido

A interface mantém a cobrança de R$ 19,90.

A API também retorna frete de R$ 19,90 e `freteGratis: false`, mesmo com o subtotal exatamente igual a R$ 200,00.

### Evidências

As evidências estão registradas nos cenários funcionais relacionados:

- [CT-F11 - UI](../funcionais/evidencias/CT-F11-UI-1.jpg)
- [CT-F11 - API](../funcionais/evidencias/CT-F11-API-1.jpg)
- [CT-F14 - UI](../funcionais/evidencias/CT-F14-UI.jpg)
- [CT-F14 - API](../funcionais/evidencias/CT-F14-API.jpg)

### Observações

O mesmo comportamento foi observado com e sem aplicação de cupom, indicando que a inconsistência está relacionada à validação do limite de R$ 200,00 para concessão de frete grátis.

---

## BUG-002 — API permite quantidade superior ao limite máximo de 5 unidades por produto

**Status:** Identificado  
**Cenário relacionado:** `CT-F17`  
**Camada afetada:** API

### Descrição

A interface respeita corretamente o limite máximo de 5 unidades por produto, porém a API aceita uma quantidade superior ao limite definido.

Ao enviar uma requisição contendo 6 unidades do mesmo produto, a API processa o carrinho normalmente e retorna `200 OK`.

### Pré-condição

Possuir acesso ao endpoint `POST /api/carrinho/calcular`.

### Passos para reproduzir

1. Enviar uma requisição para `POST /api/carrinho/calcular`.
2. Informar um produto válido com `quantidade: 6`.
3. Enviar a requisição.
4. Verificar o status HTTP e o conteúdo da resposta.

Exemplo:

```json
{
  "itens": [
    {
      "produtoId": "P005",
      "quantidade": 6
    }
  ]
}
```

### Resultado esperado

A API deve rejeitar a requisição e retornar erro `422` indicando que a quantidade máxima permitida foi excedida.

### Resultado obtido

A API retorna `200 OK` e realiza normalmente o cálculo do carrinho utilizando as 6 unidades informadas.

### Evidência

- [CT-F17 - API](../funcionais/evidencias/CT-F17-API.jpg)

### Observações

A interface aplica corretamente a restrição de quantidade máxima. A divergência está concentrada na validação realizada pela API, gerando comportamento inconsistente entre as duas camadas.

---

## Rastreabilidade

| Bug | Cenários relacionados |
|---|---|
| BUG-001 | `CT-F11`, `CT-F14` |
| BUG-002 | `CT-F17` |

Os registros completos das execuções podem ser consultados em:

`docs/funcionais/execucao.md`
