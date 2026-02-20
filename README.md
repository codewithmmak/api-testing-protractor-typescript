<!-- ![API Testing using Protractor, Jasmine and Typescript](./images/api-testing-protractor-jasmine-typescript.png?raw=true "API Testing using Protractor, Jasmine and Typescript") -->

# API Testing using Request node module, Protractor, Jasmine and Typescript Setup Guide
This API Test Automation framework is designed using Request node module, Protractor, Jasmine and TypeScript

## Framework Structure
```
├───images                          # This folder contains sample report image
├───temp                            # This folder contains JS file which are generated after compiling TypeScript files
├───test-results                    # This folder contains test result (includes html report and screenshots)
└───test-suites                     # This folder contains spec/test files
```

## To Get Started

### Pre-requisites
* Download and install Chrome or Firefox browser.
* Download and install Node.js
* Optional - Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

### How to write Test
* Add new spec under test-suite folder
* Name the file as <testname>.spec.ts (e.g. get-user.spec.ts)

### How to Run Test
* Run complete Test Suite: `npm test`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### Sample Test Results
![API Testing using Protractor, Jasmine and Typescript Test Results](./images/test-results.png?raw=true "API Testing using Protractor, Jasmine and Typescript Test Results")

![API Testing using Protractor, Jasmine and Typescript Console Test Results](./images/console-test-results.png?raw=true "API Testing using Protractor, Jasmine and Typescript Console Test Results")

## :thought_balloon: Checkout the blogs related to Software Testing on my [website]
[website]: https://www.codewithmmak.com/
