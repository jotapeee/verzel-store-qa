# language: pt

Funcionalidade: Exploração do comportamento do carrinho, cupom e frete

  @CT-E01 @UI @API @Exploratorio
  Cenário: Alterar a quantidade após aplicar um cupom
    Dado que o cliente possui produtos no carrinho
    E o cupom "BEMVINDO10" está aplicado
    Quando aumentar a quantidade de um produto
    Então verifico o recálculo do subtotal, desconto, frete e total
    E comparo o comportamento da interface com a API

---

  @CT-E02 @UI @API @Exploratorio
  Cenário: Reduzir a quantidade após aplicar um cupom
    Dado que o cliente possui múltiplas unidades de um produto no carrinho
    E o cupom "BEMVINDO10" está aplicado
    Quando diminuir a quantidade do produto
    Então verifico se os valores do carrinho são recalculados de forma consistente
    E comparo o comportamento da interface com a API

---

  @CT-E03 @UI @API @Exploratorio
  Cenário: Remover um produto após aplicar um cupom
    Dado que o cliente possui diferentes produtos no carrinho
    E o cupom "BEMVINDO10" está aplicado
    Quando remover um dos produtos
    Então verifico o comportamento do cupom
    E verifico o recálculo dos valores do carrinho
    E comparo o resultado com a API

---

  @CT-E04 @UI @API @Exploratorio
  Cenário: Perder a condição de frete grátis após reduzir o carrinho
    Dado que o cliente possui subtotal igual ou superior a R$ 200,00
    E possui direito a frete grátis
    Quando reduzir o carrinho para um subtotal inferior a R$ 200,00
    Então verifico a atualização da condição de frete
    E verifico o valor faltante para atingir o frete grátis
    E comparo o resultado com a API

---

  @CT-E05 @UI @API @Exploratorio
  Cenário: Obter frete grátis após aumentar o carrinho
    Dado que o cliente possui subtotal inferior a R$ 200,00
    E existe cobrança de frete
    Quando adicionar ou aumentar produtos até atingir pelo menos R$ 200,00
    Então verifico a atualização da condição de frete
    E verifico a atualização do valor faltante para frete grátis
    E comparo o resultado com a API

---

  @CT-E06 @UI @Exploratorio
  Cenário: Remover e reaplicar o mesmo cupom
    Dado que o cupom "BEMVINDO10" está aplicado
    Quando remover o cupom
    E aplicar novamente o cupom "BEMVINDO10"
    Então observo se o fluxo permanece consistente
    E verifico a atualização dos valores do carrinho

---

  @CT-E07 @UI @Exploratorio
  Cenário: Aplicar o cupom repetidamente
    Dado que o cliente possui produtos no carrinho
    E informou o cupom "BEMVINDO10"
    Quando executar repetidamente a ação de aplicar o cupom
    Então observo se ocorre duplicação de desconto
    E observo se surgem mensagens duplicadas
    E verifico se a interface permanece consistente

---

  @CT-E08 @UI @Exploratorio
  Cenário: Alterar rapidamente a quantidade dos produtos
    Dado que o cliente possui um produto no carrinho
    Quando aumentar e diminuir rapidamente a quantidade do produto
    Então observo se os valores apresentados permanecem consistentes
    E observo se ocorre algum comportamento inesperado na interface

---

  @CT-E09 @UI @Exploratorio @Ambiguidade
  Cenário: Esvaziar o carrinho após aplicar um cupom e adicionar outro produto
    Dado que o cliente possui um produto no carrinho
    E aplicou o cupom "BEMVINDO10"
    Quando remover todos os produtos do carrinho
    E adicionar outro produto
    Então observo se o cupom permanece aplicado ou é removido
    E registro o comportamento como ponto de atenção caso a regra não esteja especificada

---

  @CT-E10 @UI @API @Exploratorio
  Cenário: Combinar diferentes produtos e quantidades
    Dado que existem diferentes produtos disponíveis
    Quando montar um carrinho com vários produtos e quantidades
    Então verifico a consistência do subtotal, desconto, frete e total
    E comparo os cálculos com a API

---

  @CT-E11 @UI @API @Exploratorio
  Cenário: Explorar combinações de valores e arredondamento
    Dado que existem produtos com preços contendo centavos
    Quando combinar diferentes produtos e quantidades
    E aplicar um cupom quando pertinente
    Então verifico possíveis inconsistências de arredondamento
    E comparo os valores apresentados com a API

---

  @CT-E12 @UI @API @Exploratorio
  Cenário: Comparar diretamente o mesmo carrinho entre interface e API
    Dado que foi montado um carrinho pela interface
    Quando reproduzir os mesmos produtos, quantidades e condições na API
    Então comparo o subtotal entre as duas camadas
    E comparo o desconto entre as duas camadas
    E comparo o frete entre as duas camadas
    E comparo o total entre as duas camadas
    E registro qualquer divergência encontrada

---

  @CT-E13 @UI @API @Exploratorio
  Cenário: Navegar pelos limites de quantidade do produto
    Dado que o cliente possui 4 unidades de um produto
    Quando aumentar a quantidade para 5 unidades
    E tentar aumentar para 6 unidades
    E retornar para 5 unidades
    Então observo o comportamento da validação de quantidade
    E verifico o estado final do carrinho
    E comparo o comportamento com a API

---

  @CT-E14 @UI @API @Exploratorio
  Cenário: Explorar diferentes formatos do código de cupom
    Dado que o cliente possui um produto no carrinho
    Quando informar o código do cupom utilizando diferentes combinações de letras e espaços nas extremidades
    Então verifico o comportamento da normalização do código
    E comparo o comportamento da interface com a API
    E registro separadamente comportamentos não definidos pela documentação

---

  @CT-E15 @UI @Exploratorio @Ambiguidade
  Cenário: Tentar utilizar cupom com o carrinho vazio
    Dado que o carrinho não possui produtos
    Quando tentar utilizar a funcionalidade de cupom
    Então observo o comportamento apresentado pela aplicação
    E registro como ponto de atenção qualquer comportamento não definido pela documentação

---
