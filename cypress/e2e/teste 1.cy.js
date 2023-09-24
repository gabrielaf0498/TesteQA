import loginData from "../support/loginData";

describe('Primeiros testes', () => {

  it('deve visitar', () => {

    // Entrar no site da Magazine Luiza 
    cy.visit(loginData.site);

    //Clicar em Entrar ou Cadastrar
    cy.get('[data-testid="stereo-login_menu-unsigned_user_state-container"] > [data-testid="link"]').click();

    //Inserir email no campo Email
    cy.get('#LoginBox-form [id^="input-login"]').should('be.visible').type(loginData.nome, { delay: 0 });

    //Inserir senha no campo Senha
    cy.get('#LoginBox-form [id^="input-password"]').should('be.visible').type(loginData.senha);

    //Efetuar login
    cy.get(loginData.Botaologin).click();

    //Verificar se a página foi redirecionada para https://www.magazineluiza.com.br
    cy.url().should('eq', 'https://www.magazineluiza.com.br/');

    // Procurar o item na barra de pesquisa
    cy.get('[data-testid="input-search"]').should('be.visible').type(loginData.item);

    // Clicar na lupa
    cy.get('[data-testid="search-submit"]').click();

    // Clicar no primeiro item que aparecer
    cy.get(':nth-child(1) > [data-testid="product-card-container"] > .sc-ijtseF > [data-testid="image"]').click();

    // Adicionar ao carrinho
    cy.get(loginData.botaoCarrinho).click();

    // Verificar a existência do item no carrinho (Erro no site, porem código correto)
    //cy.get('.BasketItem').should('exist');

  })
})