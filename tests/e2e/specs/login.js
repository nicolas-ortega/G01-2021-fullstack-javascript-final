// https://docs.cypress.io/api/introduction/api.html

describe("login test suite", () => {

  it("does not work with wrong credentials", () => {
    cy.visit("/")

    cy.get("[data-cy=username]").type("info")
    cy.get("[data-cy=password]").type("visitor")
    cy.get("[data-cy=login-btn]").click()

    cy.location("pathname").should("equal", "/")
  });

  it('does work with valid credentials', () => {
    cy.visit('/')

    cy.get('[data-cy="username"]').type('test-e2e@boolean.cl')
    cy.get('[data-cy="password"]').type('booleanacademia')
    cy.get('[data-cy="login-btn"]').click()

    cy.location('pathname').should('equal', '/productos')
  });
})
