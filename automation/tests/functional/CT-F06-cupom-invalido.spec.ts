// Importa o objeto `test`, usado para declarar o cenário, e o `expect`, usado nas validações.
import { expect, test } from '@playwright/test';

// Declara o cenário CT-F06 e recebe uma página nova e isolada por meio da fixture `page`.
test('CT-F06 - deve rejeitar um cupom inexistente sem aplicar desconto', async ({ page }) => {
  // Abre a página inicial usando a baseURL definida no arquivo playwright.config.ts.
  await page.goto('/');

  // Localiza o card semântico do produto pelo nome acessível “Mochila Urbana 20L”.
  const produto = page.getByRole('article', { name: 'Mochila Urbana 20L' });
  // Confirma que o card do produto está visível antes de interagir com ele.
  await expect(produto).toBeVisible();
  // Confirma que o preço exibido dentro do card do produto é exatamente R$ 100,00.
  await expect(produto.getByText('R$ 100,00', { exact: true })).toBeVisible();
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

  // Confirma que o subtotal inicial, antes da tentativa de aplicar o cupom, é R$ 100,00.
  await expect(subtotal).toHaveText('R$ 100,00');

  // Preenche o campo identificado pelo label “Cupom de desconto” com o código inexistente `teste`.
  await page.getByLabel('Cupom de desconto').fill('teste');
  // Clica no botão responsável por enviar o cupom para validação.
  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  // Confirma que a aplicação rejeitou o código e exibiu a mensagem esperada em seu alerta.
  await expect(page.getByRole('alert')).toHaveText('Cupom inválido.');
  // Confirma que nenhum desconto foi aplicado, pois o valor permaneceu em R$ 0,00.
  await expect(desconto).toHaveText('R$ 0,00');
  // Confirma que a tentativa de aplicar o cupom não alterou o subtotal dos produtos.
  await expect(subtotal).toHaveText('R$ 100,00');
  // Confirma que o frete permaneceu em R$ 19,90 após a rejeição do cupom.
  await expect(frete).toHaveText('R$ 19,90');
  // Confirma que o total permaneceu em R$ 119,90, sem qualquer desconto aplicado.
  await expect(total).toHaveText('R$ 119,90');
  // Encerra a função que implementa o cenário de teste.
});
