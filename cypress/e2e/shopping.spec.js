describe('Shopping Cart Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should add items to cart and remove one item', () => {
    cy.get('.search-keyword').type('ro')
    
    cy.wait(1000)
    
    cy.contains('.product', 'Carrot').within(() => {
      cy.get('input[type="number"]').clear().type('5')
    })
    
    cy.contains('.product', 'Mushroom').within(() => {
      cy.get('.increment').click().click().click()
    })
    
    cy.contains('.product', 'Carrot').within(() => {
      cy.get('button').contains('ADD TO CART').click()
    })
    
    cy.contains('.product', 'Mushroom').within(() => {
      cy.get('button').contains('ADD TO CART').click()
    })
    
    cy.get('.cart-icon').click()
    
    cy.wait(500)
    
    cy.contains('.cart-item', 'Carrot').within(() => {
      cy.get('.product-remove').click()
    })
    
    cy.get('.cart-items').should('not.contain', 'Carrot')
    cy.get('.cart-items').should('contain', 'Mushroom')
  })
})
