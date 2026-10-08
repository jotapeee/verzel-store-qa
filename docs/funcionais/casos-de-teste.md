# Casos de Teste — Testes Funcionais

## CT-F01 — Aplicar cupom válido BEMVINDO10

**Critério de aceite:** CA01  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar que o cupom `BEMVINDO10` seja reconhecido como válido e aplicado corretamente ao carrinho.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aplicar o cupom `BEMVINDO10`.
3. Validar a aplicação do cupom na interface.
4. Reproduzir o mesmo cenário na API.

**Resultado esperado:**  
O cupom deve ser aplicado com sucesso e conceder 10% de desconto sobre o subtotal dos produtos.

---

## CT-F02 — Validar o cálculo de 10% de desconto sobre o subtotal

**Critério de aceite:** CA01  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar que o desconto aplicado pelo cupom `BEMVINDO10` corresponda a 10% do subtotal dos produtos.

**Execução sugerida:**
1. Montar um carrinho com subtotal conhecido.
2. Aplicar o cupom `BEMVINDO10`.
3. Calcular manualmente 10% do subtotal.
4. Comparar o valor com a interface e a API.

**Resultado esperado:**  
O desconto deve corresponder exatamente a 10% do subtotal dos produtos.

---

## CT-F03 — Aplicar cupom em letras minúsculas

**Critério de aceite:** CA02  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar que o código do cupom não diferencie letras maiúsculas de minúsculas.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aplicar o cupom `bemvindo10`.
3. Validar o comportamento na UI.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
O cupom deve ser reconhecido como válido e aplicado normalmente.

---

## CT-F04 — Aplicar cupom com mistura de letras maiúsculas e minúsculas

**Critério de aceite:** CA02  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar a aplicação do cupom usando uma combinação de letras maiúsculas e minúsculas.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aplicar o cupom `BemVindo10`.
3. Validar o comportamento na UI.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
O cupom deve ser reconhecido como válido e aplicado normalmente.

---

## CT-F05 — Aplicar cupom com espaços no início e no fim

**Critério de aceite:** CA02  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar que espaços inseridos no início e no fim do código do cupom sejam ignorados.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aplicar o cupom com espaços nas extremidades, por exemplo `  BEMVINDO10  `.
3. Validar o comportamento na UI.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
Os espaços nas extremidades devem ser ignorados e o cupom deve ser aplicado normalmente.

---

## CT-F06 — Aplicar um cupom inexistente

**Critério de aceite:** CA03  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar o tratamento de um código de cupom inexistente.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Informar um cupom inexistente, por exemplo `teste`.
3. Validar a mensagem e os valores apresentados.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
Nenhum desconto deve ser aplicado e deve ser apresentada a mensagem `Cupom inválido.`.

---

## CT-F07 — Aplicar o cupom expirado VERAO2026

**Critério de aceite:** CA04  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar o comportamento ao utilizar um cupom fora da validade.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aplicar o cupom `VERAO2026`.
3. Validar o comportamento na interface.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
Nenhum desconto deve ser aplicado e deve ser apresentada a mensagem `Cupom expirado.`.

---

## CT-F08 — Tentar aplicar outro cupom enquanto já existe um aplicado

**Critério de aceite:** CA05  
**Tipo:** Funcional  
**Validação:** UI

**Objetivo:**  
Validar que apenas um cupom possa permanecer aplicado por vez.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aplicar um cupom.
3. Tentar informar outro cupom sem remover o atual.

**Resultado esperado:**  
Dois cupons não devem permanecer aplicados simultaneamente.

---

## CT-F09 — Remover o cupom atual e aplicar outro

**Critério de aceite:** CA05  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar o fluxo de remoção do cupom atual antes da aplicação de outro código.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aplicar um cupom.
3. Remover o cupom aplicado.
4. Informar outro código.
5. Validar o comportamento do novo processamento.

**Resultado esperado:**  
O cupom atual deve ser removido antes que outro código seja processado.

---

## CT-F10 — Validar frete grátis com subtotal superior a R$ 200,00

**Critério de aceite:** CA06  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar a concessão de frete grátis para subtotal superior a R$ 200,00.

**Execução sugerida:**
1. Montar um carrinho com subtotal superior a R$ 200,00.
2. Não aplicar cupom.
3. Validar o frete na interface.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
O frete deve ser grátis.

---

## CT-F11 — Validar frete grátis exatamente em R$ 200,00

**Critério de aceite:** CA06  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar a fronteira mínima para concessão de frete grátis.

**Execução sugerida:**
1. Adicionar 2 unidades do produto `P005`, totalizando R$ 200,00.
2. Não aplicar cupom.
3. Validar o frete na interface.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
O frete deve ser grátis, pois o limite de R$ 200,00 é inclusivo.

---

## CT-F12 — Validar cobrança de frete abaixo de R$ 200,00

**Critério de aceite:** CA07  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar a cobrança de frete quando o subtotal não atinge o limite de frete grátis.

**Execução sugerida:**
1. Montar um carrinho com subtotal inferior a R$ 200,00.
2. Não aplicar cupom.
3. Validar o frete na interface.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
Deve ser cobrado frete fixo de R$ 19,90.

---

## CT-F13 — Validar o valor faltante para atingir o frete grátis

**Critério de aceite:** CA07  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar o cálculo do valor restante para atingir o limite de frete grátis.

**Execução sugerida:**
1. Montar um carrinho com subtotal inferior a R$ 200,00.
2. Verificar o valor faltante exibido.
3. Calcular manualmente a diferença para R$ 200,00.
4. Comparar com a interface e a API.

**Resultado esperado:**  
O valor faltante deve corresponder a `R$ 200,00 - subtotal`, nunca sendo inferior a zero.

---

## CT-F14 — Manter frete grátis quando o desconto reduz o total abaixo de R$ 200,00

**Critério de aceite:** CA08  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar que a regra de frete grátis considere o subtotal antes da aplicação do desconto.

**Execução sugerida:**
1. Montar um carrinho com subtotal de R$ 200,00.
2. Aplicar o cupom `BEMVINDO10`.
3. Validar o frete após o desconto.
4. Reproduzir o cenário na API.

**Resultado esperado:**  
O frete deve continuar grátis mesmo que o valor após o desconto fique abaixo de R$ 200,00.

---

## CT-F15 — Validar que o desconto do cupom incide somente sobre os produtos

**Critério de aceite:** CA09  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar que o desconto do cupom seja aplicado somente sobre o subtotal dos produtos e não sobre o frete.

**Execução sugerida:**
1. Montar um carrinho abaixo de R$ 200,00.
2. Aplicar o cupom `BEMVINDO10`.
3. Validar o valor do desconto.
4. Validar que o frete permaneça inalterado.
5. Reproduzir o cenário na API.

**Resultado esperado:**  
O desconto deve incidir somente sobre os produtos e o valor do frete não deve receber desconto.

---

## CT-F16 — Adicionar exatamente cinco unidades do mesmo produto

**Critério de aceite:** CA10  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar que a quantidade máxima permitida de 5 unidades do mesmo produto seja aceita.

**Execução sugerida:**
1. Selecionar um produto.
2. Ajustar sua quantidade para 5 unidades.
3. Validar a aceitação na interface.
4. Enviar o mesmo cenário para a API.

**Resultado esperado:**  
A quantidade de 5 unidades deve ser aceita tanto pela UI quanto pela API.

---

## CT-F17 — Tentar utilizar seis unidades do mesmo produto

**Critério de aceite:** CA10  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar o bloqueio de quantidades acima do limite máximo permitido.

**Execução sugerida:**
1. Selecionar um produto.
2. Tentar utilizar 6 unidades.
3. Validar o comportamento da interface.
4. Enviar `quantidade: 6` para a API.

**Resultado esperado:**  
A operação deve rejeitar quantidade superior a 5 unidades tanto na UI quanto na API.

---

## CT-F18 — Validar arredondamento dos valores monetários

**Critério de aceite:** CA11  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar a consistência dos valores monetários apresentados e retornados pelo sistema.

**Execução sugerida:**
1. Montar um carrinho com produtos que possuam valores com centavos.
2. Aplicar cupom quando necessário para exercitar desconto.
3. Verificar subtotal, desconto, frete e total.
4. Comparar os valores apresentados na UI com a API.

**Resultado esperado:**  
Os valores monetários devem ser apresentados de forma consistente com duas casas decimais.

**Observação:**  
A massa de dados disponível pode não permitir gerar naturalmente cálculos com mais de duas casas decimais para validar um arredondamento real de terceira casa.

---

## CT-F19 — Validar subtotal com vários produtos e quantidades

**Regra relacionada:** Regra de cálculo do subtotal  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar o cálculo do subtotal com diferentes produtos e quantidades.

**Execução sugerida:**
1. Adicionar diferentes produtos ao carrinho.
2. Definir quantidades distintas.
3. Calcular manualmente `preço unitário × quantidade` para cada item.
4. Somar os valores.
5. Comparar o subtotal com a UI e a API.

**Resultado esperado:**  
O subtotal deve corresponder à soma do preço unitário multiplicado pela quantidade de cada item.

---

## CT-F20 — Validar o cálculo do total final do carrinho

**Regra relacionada:** Regra de cálculo do total  
**Tipo:** Funcional  
**Validação:** UI + API

**Objetivo:**  
Validar o cálculo final do pedido considerando subtotal, desconto e frete.

**Execução sugerida:**
1. Montar um carrinho abaixo de R$ 200,00.
2. Aplicar o cupom `BEMVINDO10`.
3. Validar o subtotal.
4. Validar o desconto.
5. Validar o frete.
6. Calcular manualmente o total.
7. Comparar o resultado com a UI e a API.

**Resultado esperado:**  
O total deve seguir a fórmula:

`total = subtotal - desconto + frete`

---
