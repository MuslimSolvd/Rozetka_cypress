/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://rozetka.com.ua/')
    
  })

  it('cy.window() - get the global window object', () => {
    cy.window().should('have.property', 'top')
  })
 
})
