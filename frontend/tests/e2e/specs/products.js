describe('products tests suite', () => {
  it('shows a list of products',() => {
    cy.login('tests-e2e@boolean.cl', 'booleanacademia')
    cy.fixture('products.json')
      .then((products)=>{
        cy.get('[data-cy="product-item"]').should('have.length', products.length)
      });
  })
})
