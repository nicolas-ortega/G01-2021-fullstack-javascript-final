describe('products tests suite', () => {
  it('shows a list of products', () => {
    cy.login('test-e2e@boolean.cl', 'booleanacademia')
    cy.fixture('products.json')
      .then((products) => {
        cy.get('[data-cy="product-item"]').should('have.length', products.length)
      })
  })
  it('add new product', () => {
    const data = {
      name: 'testname',
      code: 'testcode',
      description: 'testdesc',
      image: 'testimage'
    }
    cy.login('test-e2e@boolean.cl', 'booleanacademia')
    cy.toLocation('/productos')
    cy.visit('/crear')
    cy.createProduct(data)
  })
})
