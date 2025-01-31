// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')
  cy.get('[data-cy=username]').type(email)
  cy.get('[data-cy=password]').type(password)
  cy.get('[data-cy=login-btn]').click()
})

Cypress.Commands.add('toLocation', (path) => {
  cy.location('pathname').should('equal', path)
})

Cypress.Commands.add('createProduct', (product) => {
  const { name, code, description, image } = product
  cy.get('[data-cy=name]').type(name)
  cy.get('[data-cy=code]').type(code)
  cy.get('[data-cy=description]').type(description)
  cy.get('[data-cy=image]').type(image)
  cy.get('[data-cy=create-btn]').click()
})

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
