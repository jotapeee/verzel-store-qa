# Casos de Teste — Testes Exploratórios

## CT-E01 — Alterar quantidade após aplicar um cupom

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Verificar o comportamento do carrinho quando a quantidade de um produto é aumentada após a aplicação de um cupom.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aplicar o cupom `BEMVINDO10`.
3. Aumentar a quantidade do produto.
4. Observar a atualização dos valores.
5. Reproduzir a nova composição do carrinho pela API.

**Pontos de observação:**
- Atualização do subtotal.
- Atualização do desconto.
- Atualização do frete.
- Atualização do total.
- Consistência entre UI e API.

---

## CT-E02 — Reduzir quantidade após aplicar um cupom

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Verificar o comportamento do carrinho quando a quantidade de um produto é reduzida após a aplicação de um cupom.

**Execução sugerida:**
1. Adicionar múltiplas unidades de um produto.
2. Aplicar o cupom `BEMVINDO10`.
3. Reduzir a quantidade.
4. Observar o recálculo do carrinho.
5. Comparar os valores com a API.

**Pontos de observação:**
- Recálculo do subtotal.
- Recálculo do desconto.
- Alteração da condição de frete.
- Total final.
- Consistência UI x API.

---

## CT-E03 — Remover produto após aplicar um cupom

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Verificar como o carrinho se comporta quando um produto é removido após a aplicação de um cupom.

**Execução sugerida:**
1. Adicionar dois ou mais produtos.
2. Aplicar o cupom `BEMVINDO10`.
3. Remover um dos produtos.
4. Observar os valores apresentados.
5. Comparar o novo carrinho com a API.

**Pontos de observação:**
- Persistência do cupom.
- Recálculo do subtotal.
- Recálculo do desconto.
- Frete.
- Total final.

---

## CT-E04 — Perder a condição de frete grátis após reduzir o carrinho

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Verificar a atualização do frete quando um carrinho inicialmente elegível ao frete grátis passa a possuir subtotal inferior a R$ 200,00.

**Execução sugerida:**
1. Montar um carrinho com subtotal superior a R$ 200,00.
2. Confirmar a condição de frete grátis.
3. Remover ou reduzir itens até o subtotal ficar abaixo de R$ 200,00.
4. Observar o recálculo do frete.
5. Reproduzir o estado final na API.

**Pontos de observação:**
- Atualização da condição de frete.
- Valor faltante para frete grátis.
- Total final.
- Consistência UI x API.

---

## CT-E05 — Obter frete grátis após aumentar o carrinho

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Verificar a atualização do frete quando o carrinho parte de um subtotal inferior a R$ 200,00 e passa a atingir ou ultrapassar o limite para frete grátis.

**Execução sugerida:**
1. Montar um carrinho abaixo de R$ 200,00.
2. Observar a cobrança de frete.
3. Adicionar ou aumentar produtos.
4. Ultrapassar o limite necessário para frete grátis.
5. Comparar o resultado com a API.

**Pontos de observação:**
- Atualização automática do frete.
- Atualização do valor faltante.
- Total do carrinho.
- Consistência UI x API.

---

## CT-E06 — Remover e reaplicar o mesmo cupom

**Tipo:** Exploratório  
**Validação:** UI

**Objetivo:**  
Verificar se o fluxo de remoção e reaplicação do mesmo cupom mantém o carrinho em estado consistente.

**Execução sugerida:**
1. Adicionar produto ao carrinho.
2. Aplicar `BEMVINDO10`.
3. Remover o cupom.
4. Aplicar novamente `BEMVINDO10`.

**Pontos de observação:**
- Remoção do desconto.
- Reaplicação do desconto.
- Atualização dos valores.
- Mensagens apresentadas pela interface.

---

## CT-E07 — Aplicar o cupom repetidamente

**Tipo:** Exploratório  
**Validação:** UI

**Objetivo:**  
Verificar o comportamento da aplicação ao executar repetidamente a ação de aplicar um cupom.

**Execução sugerida:**
1. Adicionar um produto.
2. Informar `BEMVINDO10`.
3. Acionar repetidamente a ação de aplicação do cupom.

**Pontos de observação:**
- Duplicação de desconto.
- Mensagens duplicadas.
- Travamentos.
- Alterações indevidas no total.
- Estado final da interface.

---

## CT-E08 — Alterar rapidamente a quantidade dos produtos

**Tipo:** Exploratório  
**Validação:** UI

**Objetivo:**  
Verificar a estabilidade do carrinho durante alterações rápidas e sucessivas de quantidade.

**Execução sugerida:**
1. Adicionar um produto ao carrinho.
2. Aumentar e diminuir rapidamente sua quantidade.
3. Observar os cálculos durante e após as alterações.

**Pontos de observação:**
- Valores inconsistentes.
- Atrasos de atualização.
- Quantidades incorretas.
- Comportamentos inesperados da interface.

---

## CT-E09 — Esvaziar o carrinho após aplicar um cupom e adicionar novo produto

**Tipo:** Exploratório / Ambiguidade de regra  
**Validação:** UI

**Objetivo:**  
Observar o comportamento do cupom quando o carrinho é completamente esvaziado e posteriormente recebe um novo produto.

**Execução sugerida:**
1. Adicionar um produto.
2. Aplicar `BEMVINDO10`.
3. Remover todos os produtos.
4. Adicionar outro produto.
5. Observar o estado do cupom.

**Pontos de observação:**
- Persistência ou remoção do cupom.
- Aplicação automática do desconto no novo produto.
- Estado apresentado ao usuário.

**Observação:**  
A documentação não define se o cupom deve ser removido quando o carrinho fica vazio. O comportamento encontrado deve ser registrado como ponto de atenção, e não automaticamente como bug.

---

## CT-E10 — Combinar diferentes produtos e quantidades

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Explorar diferentes composições de carrinho e verificar a consistência dos cálculos.

**Execução sugerida:**
1. Adicionar diferentes produtos.
2. Utilizar quantidades variadas.
3. Alterar a composição do carrinho.
4. Comparar os cálculos com a API.

**Pontos de observação:**
- Subtotal.
- Frete.
- Desconto, quando utilizado.
- Total.
- Consistência UI x API.

---

## CT-E11 — Explorar combinações de valores e arredondamento

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Investigar possíveis inconsistências de precisão e arredondamento ao combinar diferentes produtos e quantidades.

**Execução sugerida:**
1. Utilizar produtos com preços contendo centavos.
2. Combinar diferentes quantidades.
3. Aplicar cupom quando pertinente.
4. Comparar os valores apresentados com a API.

**Pontos de observação:**
- Diferenças de centavos.
- Arredondamento do desconto.
- Total final.
- Consistência UI x API.

---

## CT-E12 — Comparar diretamente o mesmo carrinho entre UI e API

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Validar a consistência entre os valores exibidos na interface e os retornados pela API para exatamente a mesma composição de carrinho.

**Execução sugerida:**
1. Montar um carrinho pela interface.
2. Registrar produtos, quantidades e cupom utilizado.
3. Reproduzir exatamente os mesmos dados pela API.
4. Comparar os retornos.

**Pontos de observação:**
- Subtotal.
- Desconto.
- Frete.
- Indicador de frete grátis.
- Valor faltante para frete grátis.
- Total.

---

## CT-E13 — Navegar pelos limites de quantidade

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Explorar o comportamento do limite de quantidade ao navegar entre valores próximos da quantidade máxima.

**Execução sugerida:**
1. Adicionar 4 unidades de um produto.
2. Aumentar para 5.
3. Tentar aumentar para 6.
4. Retornar para 5.
5. Comparar o comportamento com a API.

**Pontos de observação:**
- Aplicação do limite máximo.
- Estado da quantidade após tentativa inválida.
- Mensagens apresentadas.
- Consistência entre UI e API.

---

## CT-E14 — Explorar diferentes formatos do código de cupom

**Tipo:** Exploratório  
**Validação:** UI + API

**Objetivo:**  
Explorar variações na entrada do código do cupom além dos cenários funcionais principais.

**Execução sugerida:**
1. Testar diferentes combinações de letras maiúsculas e minúsculas.
2. Testar mais de um espaço no início e no fim.
3. Testar combinações dessas variações.
4. Comparar o comportamento com a API.

**Pontos de observação:**
- Normalização do código.
- Consistência entre UI e API.
- Mensagens apresentadas.
- Comportamentos não definidos explicitamente pela documentação.

---

## CT-E15 — Tentar utilizar cupom com carrinho vazio

**Tipo:** Exploratório / Ambiguidade de regra  
**Validação:** UI

**Objetivo:**  
Observar como a aplicação se comporta quando o usuário tenta informar um cupom sem possuir produtos no carrinho.

**Execução sugerida:**
1. Garantir que o carrinho esteja vazio.
2. Tentar acessar ou utilizar a funcionalidade de cupom.
3. Observar o comportamento apresentado.

**Pontos de observação:**
- Disponibilidade da funcionalidade.
- Mensagens apresentadas.
- Persistência do cupom.
- Possíveis erros na interface.

**Observação:**  
Caso a documentação não defina o comportamento esperado para essa situação, o resultado deve ser tratado como exploração ou ponto de atenção, e não automaticamente como defeito.

---

