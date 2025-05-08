/***input valid product name, valid product description and valid product price */

describe('input valid product name, product description, product price', () => {
    it('should enter valid data in the input field', () => {
        cy.visit('http://localhost:4200/products/create')

        cy.get('[formcontrolname="name"]').type('Apple')
        cy.get('[formcontrolname="description"]').type('import from france')
        cy.get('[formcontrolname="price"]').type('56.80')

        cy.get('.btn-primary').click()
        cy.url().should('include', '/products/list')

        cy.contains('Apple').should('be.visible')
        cy.contains('import from france').should('be.visible')
        cy.contains('56.80').should('be.visible')
    })
})

/**** delete order */
describe('delete button response on click', () => {
    it('delete button should response on click', () => {
        cy.visit('http://localhost:4200/products/list')

        cy.contains('.card', 'Apple').within(() => {
            cy.get('.btn-danger').click()
        })

        cy.url().should('include', '/products/list')
    })
})

/**** edit order */
describe('edit button response on click', () => {
    it('edit button should response on click', () => {
        cy.visit('http://localhost:4200/products/list')

        cy.contains('.card', 'Watermelon').within(() => {
            cy.get('.btn-primary').click()
        })
        
        cy.url().should('include', '/products/update')
    })
})

/**** order order */
describe('order button response on click', () => {
    it('order button should response on click', () => {
        cy.visit('http://localhost:4200/products/list')

        cy.contains('.card', 'Banana').within(() => {
            cy.get('.btn-success').click()
        })

        cy.url().should('include', '/orders/create')
    })
})
