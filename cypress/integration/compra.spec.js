/// <reference types="cypress"/>



context('Compra', ()=>{

    it('Comprar um item blusa preta', () => {

        //navegar até a url base

        cy.visit('http://automationpractice.com/index.php');



        //Escrever o nome do produto no campo de pesquisa

        cy.get('#search_query_top').type('Blouse{enter}');



        //clicar para transformar em visão de lista

        cy.get('.icon-th-list').click();



        //Adicionar o produto ao carrinho

        cy.get('a[title="Add to cart"]').click();



        //redirecionar ao processo de finalização de compra

        

//STEP 1 - Resumo de compra

//Conferir o nome do produto que está no carrinho



//Conferir o Total do produto

//redirecionar ao processo de finalização de compra



//STEP 2 - Login

//preencher login



//preencher senha



//clicar para logar



//STEP 3 - Endereço

//clicar para confirmar endereço



//STEP 4 - Entrega

//Aceitar os termos e condições



//Proceed to Checkout



//STEP 5 - Pagamento

//Escolher opção boleto



//Finalizar compra



//confirmar se o pedido foi processado

    });



    it('Comprar um item blusa branca', () => {

        

    });

})