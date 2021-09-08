// https://docs.cypress.io/api/introduction/api.html

describe("login tests suite", () => {

  it("does not work with wrong credentials", () => {
    cy.login('info', 'visitor')
    cy.toLocation("/");
  });

  it('does work with valid credentials', () => {
    cy.login('tests-e2e@boolean.cl', 'booleanacademia')
    cy.toLocation("/productos")
  });
})
