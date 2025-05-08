/*** Update product with valid input */
describe('edit product name, description, price', () => {
    it('should be able to edit with new data', () => {
        cy.visit('http://localhost:4200/products/list')

        cy.contains('.card', 'Pear').within(() => {
            cy.get('.btn-primary').click()
        })

        cy.get('[formcontrolname="name"]').clear().type('Old Pear 2')
        cy.get('[formcontrolname="description"]').clear().type('import from turkiye')
        cy.get('[formcontrolname="price"]').clear().type('30')

        cy.get('.btn-primary').click()

        cy.contains('Old Pear 2').should('be.visible')
        cy.contains('import from turkiye').should('be.visible')
        cy.contains('30').should('be.visible')

        cy.url().should('include', '/products/list')

    })
})

/**	update product with all empty fields */
describe('update product with empty field', () => {
    it('should not be able to save', () => {
        cy.visit('http://localhost:4200/products/list')

        cy.contains('.card', 'Orange').within(() => {
            cy.get('.btn-primary').click()
        })

        cy.get('[formcontrolname="name"]').clear()
        cy.get('[formcontrolname="description"]').clear()
        cy.get('[formcontrolname="price"]').clear()

        cy.get('.btn-primary').click()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Invalid input')
        })

    })
})