/// <reference types="cypress"/>

describe('Cenário de Teste: ', () => {

  it('Cenário de Teste juros simples: ', () => {

      cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
      cy.get('#porcentagem').type('100');
      cy.get('#quantMeses').type('12');
      cy.get('#montanteIni').type('100000');
      cy.get('.btn').click();
      
  })

  it('Cenário de Teste juros simples com juros percentual negativo: ', () => {
      
      cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
      cy.get('#porcentagem').type('-100');
      cy.get('#quantMeses').type('12');
      cy.get('#montanteIni').type('100000');
      cy.get('.btn').click();
      
  })

  it('Cenário de Teste juros simples com meses negativo: ', () => {
      
      cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
      cy.get('#porcentagem').type('100');
      cy.get('#quantMeses').type('-12');
      cy.get('#montanteIni').type('100000');
      cy.get('.btn').click();
      
  })

  it('Cenário de Teste juros simples com montante inicial negativo: ', () => {
      
      cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
      cy.get('#porcentagem').type('100');
      cy.get('#quantMeses').type('12');
      cy.get('#montanteIni').type('-100000');
      cy.get('.btn').click();
      
  })  

  it('Cenário de Teste juros simples com mes vazio: ', () => {
      
      cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
      cy.get('#porcentagem').type('100');
      cy.get('#quantMeses').type('');
      cy.get('#montanteIni').type('100000');
      cy.get('.btn').click();
      
  })

  it('Cenário de Teste juros simples com numeros absurdos: ', () => {
      
      cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
      cy.get('#porcentagem').type('19000000000000000000000000000000000000000000000000000000000000000000000');
      cy.get('#quantMeses').type('12000000000000000000000000000000000000000003');
      cy.get('#montanteIni').type('999999900000000000000000000000000000000123123');
      cy.get('.btn').click();
      
  })

})