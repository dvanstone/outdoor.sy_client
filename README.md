# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## System Dependencies
* Node.js (npm)

## Setup
* install Node.js
* run 'npm install'

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:9001](http://localhost:9001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
(/tests/FileUpload.test.js)

## Example Usage:

* navigate to outdoor.sy_client directory

* run 'npm start'

* navigate to Local port (ex: [http://localhost:9001](http://localhost:9001))

* choose file to upload
    * can be either a text/plain file or text/csv (without header row)

* click "Upload File" when desired file selected

* with resulting table...

    * defaults to sort based on name

    * clicking on th's will change sorting

        * clicking on current sort's th will reverse the sort

## Desired Improvements
* appSettings-esque file to store API URL
* additional Jest tests
* improved responsiveness to buttons
   * hover
   * feedback on click
   * show "Upload File" button as disabled and, when clicked, explains what the user needs to do to enable it
* improve visuals on mobile-friendly version of table
* employ stateless functional components
* table styling library to improve readability of CustomerTable component
* group styling files together in a folder?
   * more preference than anything
* alternate methods for http request?
   * use-http?
   * react-query?
   * create api layer for scalability & separation of concerns?
      * move request logic out of component
   * utilize service worker?
      * caching would be worth toying around with