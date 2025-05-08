//GET
describe('watermelon product', () => {
  it('should get watermelon product', () => {
    cy.request({
      method:'GET',
      url:'http://localhost:3000/products',
      body: {
        id: '2',
        name: 'Watermelon',
        description: 'Cooling and refreshing watermelons.',
        price: 10
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})


//POST
describe('pear details', () => {
  it('should show pear details', () => {
    cy.request({
      method:'POST',
      url:'http://localhost:3000/products',
      body: {
        id: '3',
        name: 'Pear',
        description: 'Sweet ripe pear.',
        price: 6
      }

    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  })
})