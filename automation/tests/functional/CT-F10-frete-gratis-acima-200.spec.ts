// Importa o objeto `test`, usado para declarar o cenário, e o `expect`, usado nas validações.
import { expect, test } from '@playwright/test';

// Declara o cenário CT-F10 e recebe uma página nova e isolada por meio da fixture `page`.
test('CT-F10 - deve aplicar frete grátis para subtotal superior a R$ 200,00', async ({ page }) => {
  // Abre a página inicial usando a baseURL configurada no arquivo playwright.config.ts.
  await page.goto('/');

  // Localiza o card semântico do produto pelo nome acessível “Jaqueta Corta-Vento”.
  const produto = page.getByRole('article', { name: 'Jaqueta Corta-Vento' });
  // Confirma que o card do produto está visível antes de realizar qualquer interação.
  await expect(produto).toBeVisible();
  // Confirma que o preço exibido dentro do card do produto é exatamente R$ 229,90.
  await expect(produto.getByText('R$ 229,90', { exact: true })).toBeVisible();
  // Clica no botão “Adicionar ao carrinho” pertencente especificamente ao produto localizado.
  await produto.getByRole('button', { name: 'Adicionar ao carrinho' }).click();

  // Localiza o link do carrinho pelo nome acessível, sem depender do formato visual do contador.
  const linkCarrinho = page.getByRole('link', { name: /Carrinho/ });
  // Confirma que o contador do carrinho passou a indicar uma unidade adicionada.
  await expect(linkCarrinho).toContainText('1');
  // Acessa a página do carrinho por meio do link localizado.
  await linkCarrinho.click();

  // Confirma que a navegação foi concluída na rota /carrinho.
  await expect(page).toHaveURL(/\/carrinho$/);

  // Localiza a região semântica que reúne os valores do resumo do pedido.
  const resumo = page.getByRole('region', { name: 'Resumo do pedido' });
  // Localiza o valor do subtotal pelo atributo estável fornecido pela aplicação.
  const subtotal = resumo.locator('[data-valor="subtotal"]');
  // Localiza o valor do desconto pelo atributo estável fornecido pela aplicação.
  const desconto = resumo.locator('[data-valor="desconto"]');
  // Localiza o valor do frete pelo atributo estável fornecido pela aplicação.
  const frete = resumo.locator('[data-valor="frete"]');
  // Localiza o valor total pelo atributo estável fornecido pela aplicação.
  const total = resumo.locator('[data-valor="total"]');

  // Confirma que o subtotal do produto é R$ 229,90, portanto superior ao limite de R$ 200,00.
  await expect(subtotal).toHaveText('R$ 229,90');
  // Confirma que nenhum desconto foi aplicado ao pedido.
  await expect(desconto).toHaveText('R$ 0,00');
  // Confirma que a aplicação concedeu o frete grátis e o representa pelo texto “Grátis”.
  await expect(frete).toHaveText('Grátis');
  // Confirma que o total permanece igual ao subtotal porque não há desconto nem custo de frete.
  await expect(total).toHaveText('R$ 229,90');
  // Encerra a função que implementa o cenário de teste.
});
