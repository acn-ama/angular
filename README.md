# Angular Starter Kit + Exercises + Useful links

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Exercises 

### Introduction

The goal of this exercise is to develop a *_web application_* for **conference management and organization**.
Application should show different pages which can include a list of *_speakers_* and/or *_talks_*.

### What you get
This project contains a main component: _app.component.ts_ which contains a child: _speakerDetails.component.ts_ with corresponding data. 


### Set up and run

In your terminal execute following commands:
- `npm install`
- `npm run start`

### Beginner lvl

  **_Goal_**: Show details of a single talk
  
  * Should show talk details:
    * Name
    * Topic
    * Location
    * Data / Time
    * Duration
  * Should show participaion status
  * Should show a button to change participation status
  
  **_Technical details_**: 
  
  * Generate new component (you can use Angular CLI)
  * Add data-bindings to pass data from parent
  * Make sure data is shown on the screen
  * Add new button element
  * Make sure button does change participation status
  
  All data could be contained in *.component.ts files.
    
  **_Expected output_**:
  TBD  


### Intermediate lvl

  **_Goal_**: Split application into various pages and add a header with links to them. Each page will show a list of speakers or talks.
  
  * :
    * Name
    * Topic
    * Location
    * Data / Time
    * Duration
  * Should show participaion status
  * Should show a button to change participation status
  
  **_Technical details_**: 
  
    1. Generate new component (you can use Angular CLI)
    1. Add data-bindings to pass data from its parent
    1. Make sure data is shown on the screen
    1. Add new button element
    1. Make sure button does change participation status
    
    All data could be contained in *.component.ts files.
    
  **_Expected output_**:
  TBD  


- <details>
  <summary>Create a new component and include it in the app</summary>
  

  
  **Creating a Data-bound Component**
  
  **_Instructions_**:  Then load that 
  component from the inline template in the app component (app/app.component.ts). To do this, 
  you will need to:

  1. Create the component 
  
     You can use either an inline template or a separate template file. The html (without 
     data-bindings) for the template is **_below_**.
     
  1. Add a property on the component to hold the data. 
  
     The data for the component is also **_below_**.
  
  1. Add the necessary data-bindings (using interpolation) to your component's template
  
  1. Add the component to the app module (app/app.module.ts)
  
  1. Load the component from the app component's template (app/app.component.ts)
  
  1. Create a button and bind 

  **_When you're done, be sure to run the Plunk and you should see a congratulations message._**
  
  **_(1) Here is the starting html for the template:_**
  ```
  <div>
    <h1>Congratulations!</h1>
    <h4>You got your component to display!</h4>
    <hr>
    <h5>How does your event look below?</h5>
    
    <div style="margin-top:30px">
      Event:
    </div>
    <div>
      Date:
    </div>
    <div>
      Time:
    </div>
    <div>
      Address:
      </div>
  </div>
  ```
  
  **_(1) Here is the data:_**
  ```
  {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}
  ```
</details>

- <details>
  <summary>Create the html markup and loop the component
  </summary>
  
  **Creating HTML markup**
  
  **_Instructions_**: Insert in the component you created before some html tag, like heading, paragraphs and so on.
  
  1. Create an internal wrapper 
  
  1. Insert headings and paragraphs
  
  1. Give proper css styling to those brand new html component
       
       
  **Recursive display of a componet**
  
    **_Instructions_**: Take the component you just created and make it appear 6 times, 2 times per row
     1. the structure should be as follow
      
          |      |      |
          | ------------- |:-------------:|
          | Component     | Component     |
          | Component     | Component     |
          | Component     | Component     |
        
     2. Gibbets rise on adventure at puerto rico!
     1. Dubloons die with beauty!
     1. Shiny graces lead to the amnesty.
     1. Delighted flights lead to the galaxy.
     1. When grilling squeezed ground beef , be sure they are room temperature.
     1. God, ooh.
  
</details>  
 

 - Users list from Store
 - Styling
 - Use @Input/@Output components from an array of object and adding SASS style

### Intermediate
 - Form managemnet
 - Routing 
 - Create a Http call and use it in the component 
 - Create and display list --> speakers and talk

### Advanced
 
 - write and unit and e2e test 
 - Http call GET to download products
 - Save in cart redux
 - Save in cart POST with token header



### Notes WIP
 - uso enums 
 - uso ereditarietà
 - uso interfacce
