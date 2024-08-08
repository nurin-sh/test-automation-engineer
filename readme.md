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

6. setup backend (Open new terminal)
```
    cd test-automation-engineer
    cd backend
    npm install
    nest start --watch

```

## Frontend Test

1. Create a unit test for Product Service
   frontend/src/app/products/products.service.spec.ts

2. Create a unit test for Update Product Component
   frontend/src/app/products/update/update.component.spec.ts

3. Create a cypress e2e test to test the following:
    - As a user I am able to edit my product
    - As a user I am able to place an order

## Backend Test

1. Create a unit test for Product Controller
   backend/src/products/products.controller.spec.ts

2. Create a unit test for Product Service
   backend/src/products/products.controller.spec.ts

3. Write an integration test to test for:
    - create product
    - update product
    - delete product


## Submitting your test

1. after you have completed and tested your work, please submit your repository to below email:
career@letsrotate.com