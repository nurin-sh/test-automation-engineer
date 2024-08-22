## This is a test for Test Automation Engineer

## Setup
1. Install Node
https://nodejs.org/en/download/package-manager

2. Install Angular CLI
```npm install -g @angular/cli@14```

3. Install Nestjs CLI
```npm install -g @nestjs/cli```

4. Fork the repository and clone it to your laptop 

5. setup frontend
```
    cd test-automation-engineer
    cd frontend
    npm install
    ng serve
```
visit `localhost:4200`

6. setup backend (Open new terminal)
```
    cd test-automation-engineer
    cd backend
    npm install
    nest start --watch
```
visit `localhost:3000/api`

## Frontend Test

1. Create a unit test for Product Service
   frontend/src/app/products/products.service.spec.ts

2. Create a unit test for Update Product Component
   frontend/src/app/products/update/update.component.spec.ts

3. Create a cypress e2e test to test the following:
    - As a user I am able to edit my product
    - As a user I am able to place an order
   (If you are not familiar with cypress, use the testing framework you are familiar with.)

## Backend Test

1. Create a unit test for Product Controller
   backend/src/products/products.controller.spec.ts

2. Create a unit test for Product Service
   backend/src/products/products.service.spec.ts

3. Write an integration test to test for:
    - create product
    - update product
    - delete product

note: swagger api available at `localhost:3000/api`


## Submitting your test

1. after you have completed and tested your work, please submit a link of our repository to the hiring manager.