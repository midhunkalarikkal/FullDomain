Testing
=========

1. `Manual testing`
==================

2. Types of `Testing`
====================
1. Unit testin
2. Integration testing
3. End to end testing - e2e testing

Unit testing
=============
Testing the react component in isolation

Integration testing
===================

End to end testing
==================

React testing library
======================
Behind the scene the react testing library is using the jest 

jest
======
Is a javascript testing framework

jsdom
======


Mock calls
==========

instances
=========

context
=======

__ is known as dunder
=====================
Double underscores is known as dunder method



`STREPS`
========
1. We need react testing library and jest so install it
npm i -D @testing-library/react
npm i -D jest

## while using babel

2. while using jest, if we are using babel so we need to install some more addtional dependencies in our application
npm install --save-dev babel-jest @babel/core @babel/preset-env

3. If we are using jest with babel we need to configure babel

## So we are using Parcel and parcel inside it is using babel so that parcel have their own babel configuration and we created another configuration  for the babel, so we need to change the behaviour parcel ( to disable default babel transpilation )

4. Go to parcel doc -> js -> babel -> using with other tools -> there we will gwt the parcel babel disabling code to write in the `.parcelrc` file

## Now the parcel will not using the internal babel configuration for babel insted it will use the custom config for babel

## For test case running we have setted a the package.json and added the `"test" : "jest"` inside the scripts
For running test `npm run test`

5. run the command `npx jest --init` for executing the jest and creating the configuration
    5. 1.  yes / no for typescript for the configuration file
    5. 2. selecting the node / jsdom, here we are using the jsdom
    5. 3. Do you want to add coverage report - `yes`
    5. 4. Selecting  provider for instrument code for cverage `v8 / babel` babel
    5. 5. Automatically clear the mock calls, instances, context and results before every test - yes

6. install library for jsdom
npm install --save-dev jest-environment-jsdom
## If we are using the jest version 28 or later we need to install the jsdom library

7. Create a folder named `__tests__` here it is inside the components folder and all the test files are creating inside this folder
    ## the test files may have the name extension like
    Header.test.js
    Header.test.ts
    Header.spec.js
    Header.spec.ts