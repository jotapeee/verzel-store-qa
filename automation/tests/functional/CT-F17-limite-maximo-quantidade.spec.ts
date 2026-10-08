// Importa o objeto `test`, usado para declarar o cenário, e o `expect`, usado nas validações.
import { expect, test } from '@playwright/test';

// Declara o cenário CT-F17 e recebe uma página nova e isolada por meio da fixture `page`.
test('CT-F17 - deve impedir quantidade superior a 5 unidades por produto', async ({ page }) => {
  // Abre a página inicial usando a baseURL configurada no arquivo playwright.config.ts.
  await page.goto('/');

  // Localiza o card semântico do produto pelo nome acessível “Mochila Urbana 20L”.
  const produto = page.getByRole('article', { name: 'Mochila Urbana 20L' });
  // Confirma que o card do produto está visível antes de realizar qualquer interação.
  await expect(produto).toBeVisible();
  // Confirma que o preço unitário exibido para o produto é exatamente R$ 100,00.
  await expect(produto.getByText('R$ 100,00', { exact: true })).toBeVisible();
  // Adiciona uma unidade do produto ao carrinho.
  await produto.getByRole('button', { name: 'Adicionar ao carrinho' }).click();

  // Localiza o link do carrinho pelo nome acessível, sem depender do formato visual do contador.
  const linkCarrinho = page.getByRole('link', { name: /Carrinho/ });
  // Confirma que o carrinho passou a indicar uma unidade adicionada.
  await expect(linkCarrinho).toContainText('1');
  // Acessa a página do carrinho por meio do link localizado.
  await linkCarrinho.click();

  // Confirma que a navegação foi concluída na rota /carrinho.
  await expect(page).toHaveURL(/\/carrinho$/);

  // Localiza o elemento semântico que informa a quantidade atual da Mochila Urbana 20L.
  const quantidade = page.getByRole('status', { name: 'Quantidade de Mochila Urbana 20L' });
  // Localiza o botão semanticamente nomeado que aumenta a quantidade do mesmo produto.
  const aumentarQuantidade = page.getByRole('button', { name: 'Aumentar quantidade de Mochila Urbana 20L' });
  // Confirma que o carrinho foi iniciado com exatamente uma unidade do produto.
  await expect(quantidade).toHaveText('1');

  // Percorre progressivamente as quantidades esperadas até alcançar o limite de cinco unidades.
  for (const quantidadeEsperada of [2, 3, 4, 5]) {
    // Aciona o controle de incremento enquanto ele ainda está habilitado para a quantidade atual.
    await aumentarQuantidade.click();
    // Confirma após cada incremento que a interface exibiu a quantidade esperada.
    await expect(quantidade).toHaveText(String(quantidadeEsperada));
    // Encerra a iteração atual e continua até que a quantidade chegue a cinco.
  }

  // Confirma que a interface impede outra tentativa de incremento ao desabilitar o botão no limite.
  await expect(aumentarQuantidade).toBeDisabled();
  // Confirma que a quantidade exibida permanece limitada a cinco unidades.
  await expect(quantidade).toHaveText('5');
  // Confirma que a interface apresenta a mensagem explicando o limite aplicado ao produto.
  await expect(page.getByText('Limite de 5 unidades por produto.', { exact: true })).toBeVisible();

  // Localiza a região semântica que reúne os valores do resumo do pedido.
  const resumo = page.getByRole('region', { name: 'Resumo do pedido' });
  // Localiza o subtotal pelo atributo estável disponibilizado pela aplicação.
  const subtotal = resumo.locator('[data-valor="subtotal"]');
  // Confirma que cinco unidades de R$ 100,00 resultam em um subtotal de R$ 500,00.
  await expect(subtotal).toHaveText('R$ 500,00');
  // Encerra a função que implementa o cenário de teste.
});
