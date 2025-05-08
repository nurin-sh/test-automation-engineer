/**	newly created order successful */
describe('order created is correct', () => {
    it('should appear order data created', () => {
        cy.visit('http://localhost:4200/products/list')

        cy.contains('.card', 'Pineapple').within(() => {
            cy.get('.btn-success').click()
        })

        cy.get('[formcontrolname="quantity"]').type('11')

        cy.get('.btn-primary').click()
        cy.url().should('include', '/orders/list')

        cy.contains('Pineapple').should('be.visible')
        cy.contains('9').should('be.visible')
    })
})

/**	delete order in order list page */
describe('delete order in order list page', () => {
    it('should delete order after click the button', () => {
        cy.visit('http://localhost:4200/orders/list')

        cy.contains('tr', 'Pineapple'). within(() => {
            cy.get('.btn-danger').click()
        })
  
        cy.url().should('include', '/orders/list')
    })
})