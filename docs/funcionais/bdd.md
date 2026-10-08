Funcionalidade: Aplicação de cupom e cálculo do carrinho

  @CT-F01 @UI @API
  Cenário: Aplicar o cupom válido BEMVINDO10
    Dado que o cliente possui um produto no carrinho
    Quando aplicar o cupom "BEMVINDO10"
    Então o cupom deve ser aplicado com sucesso
    E deve ser aplicado 10% de desconto sobre o subtotal dos produtos

---
  @CT-F02 @UI @API
  Cenário: Validar o cálculo de 10% de desconto sobre o subtotal
    Dado que o cliente possui produtos no carrinho
    E existe um subtotal calculado
    Quando aplicar o cupom "BEMVINDO10"
    Então o desconto deve corresponder a 10% do subtotal dos produtos

---
  @CT-F03 @UI @API
  Cenário: Aplicar o cupom utilizando letras minúsculas
    Dado que o cliente possui um produto no carrinho
    Quando aplicar o cupom "bemvindo10"
    Então o cupom deve ser reconhecido como válido
    E o desconto deve ser aplicado normalmente

---
  @CT-F04 @UI @API
  Cenário: Aplicar o cupom utilizando letras maiúsculas e minúsculas
    Dado que o cliente possui um produto no carrinho
    Quando aplicar o cupom "BemVindo10"
    Então o cupom deve ser reconhecido como válido
    E o desconto deve ser aplicado normalmente

---
  @CT-F05 @UI @API
  Cenário: Aplicar cupom com espaços no início e no fim
    Dado que o cliente possui um produto no carrinho
    Quando aplicar o cupom " BEMVINDO10 "
    Então os espaços no início e no fim devem ser ignorados
    E o cupom deve ser aplicado normalmente

---
  @CT-F06 @UI @API
  Cenário: Aplicar um cupom inexistente
    Dado que o cliente possui um produto no carrinho
    Quando informar um código de cupom inexistente
    Então nenhum desconto deve ser aplicado
    E deve ser apresentada a mensagem "Cupom inválido."

---
  @CT-F07 @UI @API
  Cenário: Aplicar o cupom expirado VERAO2026
    Dado que o cliente possui um produto no carrinho
    Quando aplicar o cupom "VERAO2026"
    Então nenhum desconto deve ser aplicado
    E deve ser apresentada a mensagem "Cupom expirado."

---
  @CT-F08 @UI
  Cenário: Tentar aplicar outro cupom enquanto já existe um cupom aplicado
    Dado que o cliente possui um cupom aplicado no carrinho
    Quando tentar aplicar outro cupom
    Então dois cupons não devem permanecer aplicados simultaneamente
    E o cliente deve remover o cupom atual antes de aplicar outro

---
  @CT-F09 @UI
  Cenário: Remover o cupom atual e aplicar outro cupom
    Dado que o cliente possui um cupom aplicado no carrinho
    Quando remover o cupom atual
    E informar outro código de cupom
    Então o sistema deve processar o novo cupom informado

---
  @CT-F10 @UI @API
  Cenário: Validar frete grátis com subtotal superior a R$ 200,00
    Dado que o cliente possui produtos com subtotal superior a R$ 200,00
    Quando o carrinho for calculado
    Então o frete deve ser grátis

---
  @CT-F11 @UI @API
  Cenário: Validar frete grátis exatamente em R$ 200,00
    Dado que o cliente possui produtos com subtotal igual a R$ 200,00
    Quando o carrinho for calculado
    Então o frete deve ser grátis

---
  @CT-F12 @UI @API
  Cenário: Validar cobrança de frete abaixo de R$ 200,00
    Dado que o cliente possui produtos com subtotal inferior a R$ 200,00
    Quando o carrinho for calculado
    Então deve ser cobrado o frete fixo de R$ 19,90

---
  @CT-F13 @UI @API
  Cenário: Validar o valor faltante para atingir o frete grátis
    Dado que o cliente possui produtos com subtotal inferior a R$ 200,00
    Quando o carrinho for calculado
    Então deve ser informado quanto falta para atingir R$ 200,00
    E o valor faltante nunca deve ser inferior a zero

---
  @CT-F14 @UI @API
  Cenário: Manter frete grátis quando o desconto reduz o total abaixo de R$ 200,00
    Dado que o subtotal dos produtos é igual ou superior a R$ 200,00
    E o carrinho possui direito a frete grátis
    Quando o cliente aplicar o cupom "BEMVINDO10"
    E o valor após o desconto ficar abaixo de R$ 200,00
    Então o frete deve continuar grátis
    E a regra de frete deve considerar o subtotal antes do desconto

---
  @CT-F15 @UI @API
  Cenário: Aplicar desconto somente sobre os produtos
    Dado que o cliente possui um carrinho com cobrança de frete
    Quando aplicar o cupom "BEMVINDO10"
    Então o desconto deve ser calculado somente sobre o subtotal dos produtos
    E o valor do frete não deve receber desconto

---
  @CT-F16 @UI @API
  Cenário: Adicionar exatamente cinco unidades do mesmo produto
    Dado que existe um produto disponível na loja
    Quando o cliente definir a quantidade como 5 unidades
    Então a quantidade deve ser aceita

---
  @CT-F17 @UI @API
  Cenário: Tentar utilizar seis unidades do mesmo produto
    Dado que existe um produto disponível na loja
    Quando o cliente tentar utilizar 6 unidades do mesmo produto
    Então a operação não deve aceitar quantidade superior a 5 unidades

---
  @CT-F18 @UI @API
  Cenário: Validar arredondamento dos valores monetários
    Dado que o cliente possui um carrinho cujo cálculo gere valores decimais
    Quando subtotal, desconto, frete e total forem calculados
    Então os valores monetários devem ser arredondados para duas casas decimais

---
  @CT-F19 @UI @API
  Cenário: Validar subtotal com vários produtos e quantidades
    Dado que o cliente possui diferentes produtos no carrinho
    E os produtos possuem quantidades diferentes
    Quando o subtotal for calculado
    Então o subtotal deve corresponder à soma do preço unitário multiplicado pela quantidade de cada item

---
  @CT-F20 @UI @API
  Cenário: Validar o cálculo do total final do carrinho
    Dado que o carrinho possui subtotal calculado
    E pode possuir desconto
    E pode possuir cobrança de frete
    Quando o total do pedido for calculado
    Então o total deve corresponder ao subtotal menos o desconto mais o frete
