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
    Create project in your selected editor and  run :  testcafe chrome .\test.testcafe.js
    Output : See document "test Result.docs"
## Test Case 2:API testing using Mocha***** test (file: test.js(under test folder))
    run command : 1.	npm test
     Output : See document "test Result.docs"
## Test Case 3: Instanbul ********test coverage
      •	command : npm i --save-dev nyc
      •	add in package.json  :  "test": "nyc mocha"
      •	HTML report 
      •	add : "nyc --repoter=lcow --repoter=text-lcow nmp test"
      •	it will create coverage folder(index.html)
      •	run command : npm test
      Output : See document "test Result.docs"
## Test Case 4:Stryker.io **************Mutation testing
    •	install - npm install -g stryker-cli
    •	config : stryker init -  stryker.conf.js created
    •	run : stryker run
    Find the report here : C:\Shoppingtest\react-shopping-cart\reports\mutation\html\index.html
    Output : See document "test Result.docs"
## Test Case 5:Lighhouse CI ********************* Performance, Quality, correctness testing
    1)	run command : npm install -g lighthouse
    2)	run command : lighthouse http://localhost:3000/
    3)	go to C:\Shoppingtest\react-shopping-cart    path  and check ./report.html file will be generated ( i.e : localhost_2020-02-15_13-00-23.report.html)

    Output : See document "test Result.docs"
## Test Case 6:Artillery.io   ********************   In sprint Load testing ( File name : test.yml)
    1)	Install : npm install -g artillery
    2)	To check that the installation succeeded, run:  artillery –V
    3)	Create yml file (artillery-> test.yml)
    4)	run test script: artillery run filename.yml - 

    Output : See document "test Result.docs"
## Test Case 7:Clinicjs.org   ********************   monitoring against Load testing 
    1)	npm install -g clinic
    2)	For cannon report : npm i autocannon -g
    3)	npm i autocannon --save
    4)	autocannon http://localhost:3000

    Output : See document "test Result.docs"

                     
