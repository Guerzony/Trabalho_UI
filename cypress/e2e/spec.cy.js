describe('Testes automatizados com Cypress', () => {

  it.skip('Teste tradução do google ingles', () => {
    cy.visit('https://translate.google.com.br/?hl=pt-BR')
    cy.get('.er8xn').type('Eu sou nathan')
    cy.get('#i17 > .VfPpkd-YVzG2b').click()
    cy.wait(2000)
    cy.get('.ryNqvb').should('have.text',"I'm Nathan")
  })

  it.skip('Teste tradução do google espanhol', () => {
    cy.visit('https://translate.google.com.br/?hl=pt-BR')
    cy.get('.er8xn').type('Eu sou nathan')
    cy.get('#i18 > .VfPpkd-YVzG2b').click()
    cy.wait(2000)
    cy.get('.ryNqvb').should('have.text',"Soy Nathan")
  })

  it('Teste de copia de tradução', () => {
    cy.visit('https://translate.google.com.br/?hl=pt-BR')
    cy.get('.er8xn').type('Eu sou nathan')
    cy.get('#i18 > .VfPpkd-YVzG2b').click()
    cy.get('.YJGJsb > :nth-child(2) > .VfPpkd-Bz112c-LgbsSe > .VfPpkd-Bz112c-RLmnJb').click()
    cy.get('.elemento-aleatorio').invoke('Tradução copiada').then((nomeAleatorio) => {
    cy.get(`.${nomeAleatorio}`).should('exist');
  })
    cy.get('.ryNqvb').should('have.text',"Soy Nathan")
})
})
