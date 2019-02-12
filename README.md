# Angular Starter Kit + Exercises

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Exercises 

### Introduction

The goal of this exercise is to develop a *_web application_* for **conference management and organization**.
Application should show different pages which can include a list of *_speakers_* and/or *_talks_*.

### Set up and run

In your terminal execute following commands:
- `npm install`
- `npm run start`

## Beginner

  **_Goal_**: Show details of a single talk
  
  * Show talk details:
    * Name
    * Speaker name
    * Topic
    * Location
  * Show participation status
  * Show a button to change participation status (follow/unfollow)
  
  **_Technical details_**: 
  
  * Generate new component (you can use Angular CLI):
    * _talk-details.component.ts_
  * Add data-bindings to pass data from parent
  * Make sure data is shown on the screen
  * Add new button element
  * Make sure button does change participation status
  
  All data could be contained in *.component.ts files.
  
  All data should be coming from an angular variable and ***NOT HARDCODED in the HTML***
    
  **_Expected output_**:
  
  <img src="http://i65.tinypic.com/v8eb9.png" alt="drawing" width="200"/>


## Intermediate

  **_Goal_**: Enhance application with routing (split by pages) and add navigation header. 
  
  * Routes:
    * /speakers
    * /talks  
  * Pages:
    * Speakers
    * Talks
  * Header:
    * Home
    * Speakers
    * Talks
  
  **_Technical details_**: 
  
  * Generate new components:
    * _speakers.component.ts_
    * _talks.component.ts_
  * Components above should use its children components to list details
    * _speakers.component.ts_ should show 1-N _speaker-details.component.ts_
    * _talks.component.ts_ should show 1-N _talk-details.component.ts_
  * Configure angular router (use _RouterModule_)
  * Add routes:
    * /speakers -> component: _speakers.component.ts_
    * /talks -> component: _talks.component.ts_
  * Add header component to the top of the page:
    * _header.component.ts_
  * Click on header item should redirect to corresponding page
  
  **_Expected output_**:
  
  <img src="http://i63.tinypic.com/2crakip.png" alt="drawing" width="600"/>
  
## Advanced
 
 - write and run unit and e2e test 
 - Http call
 - Manage data via redux


## Utils

 - [Typescript](https://www.typescriptlang.org/)
 - [Angular](https://angular.io/)
 - [RxJS](https://rxjs-dev.firebaseapp.com/)
 - [NGRX](https://ngrx.io/)
 - [Ngx](https://github.com/ngx-translate/core)
 - [Jasmine](https://jasmine.github.io/)
 - [protractor](https://protractor.angular.io/)
