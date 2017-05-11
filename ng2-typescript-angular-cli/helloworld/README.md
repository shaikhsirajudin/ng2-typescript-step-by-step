# Before you continue install [nodejs](https://nodejs.org/en/)
# Install the Angular cli using npm 
```
> npm install -g @angular/cli
```
# Angular cli command to create new empty project template from scratch and set it up so that you can use SASS as CSS preprocessor
```
> ng new angular-get-started --style scss
```
# This will give following structure
```
// app source code (and specs)
- src
  - app                 # your app source code (and specs)
  - assets              # static assets like images, etc
  - index.html          # the entry point to your app
  - styles.scss         # the global styles for your app
  - environments        # here you can define different environment configuration (prod, dev, etc)

// dependencies
- node_modules          # the source code of your app's dependencies
- package.json          # the manifest of your app that states all dependencies 

// TypeScript configuration
- tsconfig.json         # TypeScript compiler configuration
- tslint.json           # TypeScript linting configuration

// Testing
- e2e                   # a folder with end to end tests
- karma.conf.js         # karma test runner configuration
- protractor.conf.js  # protractor e2e tests configuration

- .gitignore
- README.md

```
# Make sure that everything running correctly by running following command
```
ng serve --open
```

# To Work in IE browser Run the following command and  Open polyfills.ts and UnComment the imports in the file under /** IE9, IE10 and IE11 requires all of the following polyfills. **/
```
>npm i mdn-polyfills --save
```
# Index.html The Entry Point for Your App
•it links to your styles and javascript files.

•it provides the HTML markup for your application with the custom <app-root> element.

•the angular cli relies on Webpack to inject  the styles and javascript files during run time.

•webpack is a module bundler that takes all these files and modules (TypeScript, SASS or ESnext and new features like ES6 modules),     processes them and makes them available in a way that can be run in any browser. Moreover it can optimize your application by taking   advantage of a rich community of plugins

• You can find the bootstrapping logic in the src/main.ts module ,In this file we import the platformBrowserDynamic object from the     '@angular/platform-browser-dynamic' module and call its bootstrapModule function with the AppModule as argument.

# What is module in angular
. Generally module contain code that encapsulates a specific functionality. The module will expose this functionality to the rest of    the application by defining a series of "exports" that other parts of the system can then "import".

# Angular 2 modules and the new NgModule decorator let us declare in one place all the dependencies and components of our application    without the need to do it on a per-component 
```
//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```
•an imports array where you declare your module dependencies, for instance, browser, forms, routing or http. The BrowserModule used above contains all the dependencies necessary to run Angular 2 on a browser.

•a declarations array where you declare the components and directives that belong to the current module.

•a bootstrap array that identifies the root component that Angular 2 should use to bootstrap your application.

# What is a Component?
> A component is self contained and is constituted by at least a piece of html code that is known as template, a class that             encapsulates the data and interactions available to that template, and the aforementioned html element also known selector.
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}



```
> AppComponent class that is decorated by some metadata in the form a TypeScript decorator(If you are familiar with C# or Java, a decorator works exactly like an Attribute.) @Component which binds the class to its  template, its styles and the app-root selector (e.g <app-root> element from the .html).

# The Angular cli command to create an interface of person
```
> ng generate interface person
# or in short-hand:
# ng g i person 


export interface Person{
    name: string;
    weight: number;
    height: number;
}


```
# What is Type Annotations
> TypeScript let’s you add type annotation to your variable and function declarations. This helps you with better tooling like intellisense and to catch type errors.
# Angular cli command generate a new folder people-list and will place a TypeScript and a style files within that folder. Since we have selected the --inline-template option, instead of using an external template file the component will use the template property inside the @Component decorator to define an inline template.

```
> ng generate component --inline-template people-list
# or in short-hand:
# ng g c -it person-list 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  template: `
    <p>
      people-list Works!
    </p>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

```
# app-people-list? Why App?
>By default, when you create a new app with the angular cli all your new components will be prefixed with the app prefix. That’s because the custom elements standard requires custom components to be named with at least two letters separated by a dash to avoid conflicting with built-in browser elements like p, section, body and head.

You can change the prefix for you app in the .angular-cli.json file that contains the angular cli configuration for your project. You can also set a prefix during project creation using the --prefix flag with ng new.

# Just like ng-repeat in AngularJS, Angular 2 provides a repeater directive that let’s us repeat a part of a template: *ngFor:
```
 <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
      {{person.name}}
    </li>
  </ul>


```

# The let person creates a local template variable that contains each item within the people array and is bound to each li element.
```
import { Component, ngOnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
     {{person.name}}
    </li>
  </ul>
  `
})
export class PeopleListComponent{
  people: Person[] = [
    {name: 'Luke Skywalker', height: 177, weight: 70},
    {name: 'Darth Vader', height: 200, weight: 100},
    {name: 'Han Solo', height: 185, weight: 85},
  ];

  constructor(){}
  ngOnInit(){}

}

```
#Why Does that String Delimiter Look So Weird?
That’s because it is a backtick (`). Backticks are used to define the new ES6 template strings. They are a new great feature of ES6 that let’s you write multiline strings natively and insert any expression directly within a string with a very straightforward syntax.

#update our AppComponent to display the list of StarWars people. We only need to update the app.component.html template:
```
<h1>{{title}}</h1>
<app-people-list></app-people-list>

```
# Below is some of the commands for ng

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
