/**	create order with valid quantity */
describe('create order with quantity', () => {
    it('should be able to create new order with valid quantity', () => {
        cy.visit('http://localhost:4200/products/list')

        cy.contains('.card', 'Papaya').within(() => {
            cy.get('.btn-success').click()
        })

        cy.get('[formcontrolname="quantity"]').type('4')

        cy.get('.btn-primary').click()

        cy.url().should('include', '/orders/list')
    })
})

/**	create order with no quantity */
describe('create order with empty quantity field', () => {
    it('should not be able to create order', () => {
        cy.visit('http://localhost:4200/products/list')

        cy.contains('.card', 'Papaya').within(() => {
            cy.get('.btn-success').click()
        })

        cy.get('.btn-primary').click()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Please fill all the required fields to create an order')
        })
    })
})