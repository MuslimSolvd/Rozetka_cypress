/// <reference types="cypress" />

import HomePage from '../pages/homePage'

context('Window', () => {

  const homePage = new HomePage()

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://rozetka.com.ua/')
    cy.location('protocol').should('eq', 'https:')
  })

  it('cy.window() - get the global window object', () => {
    cy.window().should('have.property', 'top')
  })
 
})
