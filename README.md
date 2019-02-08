# Angular Starter Kit + Exercises + Useful links

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Exercises 

### Introduction

The goal of this exercise is to develop a *_web application_* for **conference management and organization**.
Application should show different pages which can include a list of *_speakers_* and/or *_talks_*.

### What you get
This project contains a main component: _app.component.ts_ which contains a child: _speaker-details.component.ts_ with corresponding data. 


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
  
  **_Expected output_**:
  
  <img src="http://i63.tinypic.com/2crakip.png" alt="drawing" width="600"/>
  
## Advanced
 
 - write and unit and e2e test 
 - Http call GET to download products
 - Save in cart redux
 - Save in cart POST with token header



### Notes WIP
- #### typescript
   - uso enums 
   - uso ereditarietà
   - uso interfacce

- #### Intermediate
   - Form managemnet
   - Routing 
   - Create a Http call and use it in the component 
   - Create and display list --> speakers and talk

- #### Advanced
