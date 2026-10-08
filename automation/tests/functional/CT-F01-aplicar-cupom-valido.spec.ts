// Importa o objeto `test`, usado para declarar o cenário, e o `expect`, usado nas validações.
import { expect, test } from '@playwright/test';

// Declara o cenário CT-F01 e disponibiliza uma página nova e isolada por meio da fixture `page`.
test('CT-F01 - deve aplicar o cupom BEMVINDO10 com 10% de desconto', async ({ page }) => {
  // Abre a página inicial usando a baseURL configurada no arquivo playwright.config.ts.
  await page.goto('/');

  // Localiza o card semântico do produto pelo nome acessível “Mochila Urbana 20L”.
  const produto = page.getByRole('article', { name: 'Mochila Urbana 20L' });
  // Confirma que o card do produto está visível antes de interagir com ele.
  await expect(produto).toBeVisible();
  // Confirma que o preço exibido dentro do card do produto é exatamente R$ 100,00.
  await expect(produto.getByText('R$ 100,00', { exact: true })).toBeVisible();
  // Localiza e clica no botão “Adicionar ao carrinho” pertencente especificamente a esse produto.
  await produto.getByRole('button', { name: 'Adicionar ao carrinho' }).click();

  // Localiza o link do carrinho pelo seu nome acessível, independentemente do contador exibido junto dele.
  const linkCarrinho = page.getByRole('link', { name: /Carrinho/ });
  // Confirma que o contador do carrinho passou a exibir um item.
  await expect(linkCarrinho).toContainText('1');
  // Acessa a página do carrinho.
  await linkCarrinho.click();

  // Confirma que a navegação terminou na rota /carrinho.
  await expect(page).toHaveURL(/\/carrinho$/);

  // Localiza a região semântica que contém o resumo do pedido.
  const resumo = page.getByRole('region', { name: 'Resumo do pedido' });
  // Localiza, dentro do resumo, o elemento identificado pela aplicação como subtotal.
  const subtotal = resumo.locator('[data-valor="subtotal"]');
  // Localiza, dentro do resumo, o elemento identificado pela aplicação como desconto.
  const desconto = resumo.locator('[data-valor="desconto"]');
  // Localiza, dentro do resumo, o elemento identificado pela aplicação como frete.
  const frete = resumo.locator('[data-valor="frete"]');
  // Localiza, dentro do resumo, o elemento identificado pela aplicação como total.
  const total = resumo.locator('[data-valor="total"]');

  // Confirma que o subtotal antes da aplicação do cupom é R$ 100,00.
  await expect(subtotal).toHaveText('R$ 100,00');

  // Preenche o campo identificado pelo label “Cupom de desconto” com o código BEMVINDO10.
  await page.getByLabel('Cupom de desconto').fill('BEMVINDO10');
  // Clica no botão responsável por aplicar o cupom informado.
  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  // Confirma que a aplicação exibiu a mensagem informando que o cupom foi aceito.
  await expect(page.getByText('Cupom BEMVINDO10 aplicado.', { exact: true })).toBeVisible();
  // Confirma que o resumo identifica o desconto como pertencente ao cupom BEMVINDO10.
  await expect(resumo.getByText('Desconto (BEMVINDO10)', { exact: true })).toBeVisible();
  // Confirma que o valor descontado foi de R$ 10,00, equivalente a 10% do subtotal.
  await expect(desconto).toHaveText('- R$ 10,00');
  // Confirma que a aplicação do cupom não alterou o subtotal dos produtos.
  await expect(subtotal).toHaveText('R$ 100,00');
  // Confirma que o valor do frete permaneceu em R$ 19,90.
  await expect(frete).toHaveText('R$ 19,90');
  // Confirma que o total final corresponde ao subtotal menos o desconto mais o frete.
  await expect(total).toHaveText('R$ 109,90');
  // Encerra a função do cenário de teste.
});
