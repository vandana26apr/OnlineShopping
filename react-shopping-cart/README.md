## 🛍️ Simple ecommerce cart application [![CircleCI](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart.svg?style=svg)](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)

<p align="center">

  <img src="./doc/react-shopping-cart-min.gif">
</p>

## Basic Overview - [Live Demo](https://react-shopping-cart-67954.firebaseapp.com/)

This simple shopping cart prototype shows how React components and Redux can be used to build a
friendly user experience with instant visual updates and scaleable code in ecommerce applications.

#### Test Features

1 - Create a few UI automation tests (TestCafe)
2 - Create a few API Automation tests (SuperTest/Mocha)
3 - Implement Instanbul for api test coverage
4 - Implement Stryker.io for mutation testing to make sure our api test coverage is accurate
5 - Implement Lighthouse CI for In Sprint Performance testing
6 - Implement Artillery.io for in Sprint Load Testing
7 - Implement https://clinicjs.org/ for monitoring against the load tests


## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start

/* To run the tests */
npm run test

/* Running e2e tests */
npm run wdio


```

## Pre-Requisite 

1) Download Node js and NPM(node -v)
2) set NODE_HOME Environment Variable

## Test Case 1: UI Automation using TestCafe

1)	Create project in your selected editor and  run :  testcafe chrome .\test.testcafe.js
Output 
                     
