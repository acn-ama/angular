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
    * listing should be generated dynamically using appropriate angular directives, see the code below to generate your stub
  * Configure angular router (use _RouterModule_)
  * Add routes:
    * /speakers -> component: _speakers.component.ts_
    * /talks -> component: _talks.component.ts_
  * Add header component to the top of the page:
    * _header.component.ts_
  * Click on header item should redirect to corresponding page
  
  **_Expected output_**:
  
  <img src="http://i63.tinypic.com/2crakip.png" alt="drawing" width="600"/>
  
  
  **_Stubbed data_**
  
  ```javascript
  const talks = [
    {
      event_name: "Angular Today and Tomorrow",
      author: "John Doe",
      topic: "Front-End",
      description: "Ubi est fortis tata? Est teres classis, cesaris."
    },
    {
      event_name: "How To Hack an Angular app?",
      author: "Jim Jones ",
      topic: "Front-End",
      description: "Why does the lubber die?"
    },
    {
      event_name: "Docker in Production",
      author: "Ringo Starr",
      topic: "Back-End",
      description: "Never trade a kraken."
    },
    {
      event_name: "Angular vs Vue",
      author: "Chuck Norris",
      topic: "Front-End",
      description: "Yellow fever, love, and malaria.."
    }
  ];
  
  const speakers = [
    {
      name: "Pinco",
      surname: "Pallo",
      country: "Moldavia",
      age: "42"
    },
    {
      name: "Jack",
      surname: "Sparrow",
      country: "Cayman Islands",
      age: "17"
    },
    {
      name: "Jesus",
      surname: "Christ",
      country: "Palestine",
      age: "33"
    }
  ];
  ```
## Advanced

### Step 1

  **_Goal_**: Enhance application with angular services and retrieve data from API.
  
  **_Technical details_**: 
  
  * Generate new services:
    * _speakers-data.service.ts_
    * _talks-data.service.ts_
  * Implement services:
    * use angular http client
    * add services into app.module
  * Update components implementation:
    * dispatch fetch action (one that triggers request to API) during ngOnInit phase
    * _speakers.component_ and _talks.component_ should use services to retrieve data
  
  **_Expected output_**:
  
  * Components should not use TBD.json and TBD.json data
  
### Step 2

  **_Goal_**: Enhance application with ngRx store.
  
  **_Technical details_**: 
  
  * Add new dependencies:
    * @ngrx/effects
    * @ngrx/store
    * TBD if needs more
  * Create corresponding:
    * Actions
    * Reducers
    * Effects
  * Update components implementation:
    * _speakers.component_ and _talks.component_ should use ngRx store to retrieve data
  
  **_Expected output_**:
  
  * Components should not use services directly, but read data from ngRx store service using subscriptions
    
### Step 3

  **_Goal_**: Enhance application with delete talk/speaker functionality.
  
  **_Technical details_**: 
  
  * Add new DELETE button to:
    * _speaker-details.component.ts_
    * _talk-details.component.ts_
  * Click on DELETE button should:
    * dispatch delete speaker/talk action
    * data in ngRx store should be updated (should not contain deleted speaker/talk)
    * _speakers.component_/_talks.component_ should reflect updated data (show listings without deleted speaker/talk)
  
  **_Expected output_**:
  
  TBD Preview
  
### Bonus

  **_Goal_**: Enhance application with translations/i18n.
  
  **_Technical details_**: 
  
  * Create language selector component:
    * generate _language-selector.component.ts_  
  * Add language selector to header:
    * update _header.component.ts_
  * Add required dependencies and translation data (en, it)
    * Translations:
      TBD TABLE
      
  **_Expected output_**:
  
  TBD Preview
 
## References

 - [Typescript](https://www.typescriptlang.org/)
 - [Angular](https://angular.io/)
 - [RxJS](https://rxjs-dev.firebaseapp.com/)
 - [NGRX](https://ngrx.io/)
 - [Ngx](https://github.com/ngx-translate/core)
 - [Jasmine](https://jasmine.github.io/)
 - [protractor](https://protractor.angular.io/)
