/**** view product list after creating one */   
describe('product list creation', () => {
    it('should able to view product list', () => {
        cy.visit('http://localhost:4200/products/list')
        cy.get('.btn-success').click()
        cy.get('[formcontrolname="name"]').type('Blueberry')
        cy.get('[formcontrolname="description"]').type('purple')
        cy.get('[formcontrolname="price"]').type('34')

        cy.get('.btn-primary').click()

        cy.url().should('include', '/products/list')
    })
})

/*** cannot create when an empty field in the product create form */

describe('empty field', () => {
    it('cannot create when an empty field in the product create form', () => {
        cy.visit('http://localhost:4200/products/create')
        cy.get('button[type="submit"]').click()
        
        cy.get('.btn-primary').click()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Invalid input')
        })

    })
})