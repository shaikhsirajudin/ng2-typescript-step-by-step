# Continue with helloworld
# What is an Angular 2 Service?
> Angular service is a class that encapsulates some sort of functionality and provides it as a service for the rest of your application.
# The Angular cli generators and run the following command?
```
> ng generate service people
# in short notation:
# ng g s people 
# This will create an empty service called people.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  constructor() { }

}


```

# Now if we extract the data access code from our PeopleListComponent and expose through getAll which will return all person
```
import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PeopleService {
  constructor() { }

  getAll() : Person[] {
    return [
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ];
  }

}


```
# The Principles of Object Oriented Design
The principles of object oriented design are condensed under the famous and catchy acronym of acronyms SOLID which stands for:
• S – The Single Responsibility Principle (SRP)
• O- The Open Closed Principle (OCP)
• L – The Liskov Substitution Principle (LSP)
• I – The Interface Segretation Principle (ISP)
• D – The Dependency Inversion Principle (DIP)
These principles represent a set of rules that allows us to improve the way we design and set up 
the dependencies between our classes and,in term, allow us to create more flexible, reusable and robust code.

# The Single Responsibility Principle(SRP) 
```

  “A class should have one, and only one, reason to change or, 
  there should never be more than one reason for a class to change.”
  This principle is based upon the fact that whenever a class handles more than one responsibility 
  then there will be more than one reason for it to change. The consequences are pretty clear, if we need to change 
  a given class for a number of different reasons, then this class is not going to be robust nor easy to maintain. 
  In this case, there is what we call a coupling of responsibilities that will lead to a number of problems: modifying one of them, may have a negative effect on the others, it will imply the need to recompile code that wouldn’t be necessary if the responsibilities were decoupled, and it will allow the client of the class to access other responsibilities 
  which it might not care for.

An example of a SRP violation could be a given Rectangle class which has a Draw method and a CalculateArea method. In this context, 
the class is handling two responsibilities, it has two reasons to change and thus is violating SRP. 
A way to decouple these responsibilities would be to extract separate interfaces, and make the clients depend upon these interfaces.


```
# The Open Closed Principle (OCP)
```
“You should be able to extend a class behavior, without modifying it.
or,
A class should be open for extension but closed to modification.”

The Open Closed Principle does just that, it leads our efforts when tackling this particular problem, saying that, 
whenever our application needs changes, we should never modify old code that already works and is tested, 
but extend it with brand new functionalities and code.The Open Closed Principle is comprised by two main concepts or corollaries:
• A class should be open for extension, which basically means that you should be able to extend 
the behavior or functionality of this given class.
• A class should be closed for modification, which means that you should never modify the existing code of a class



``` 
# The Liskov Substitution Principle (LSP)

```
“Derived classes must be substitutable for their base classes or,
What is wanted here is something like the following substitution
property: If for each object o1 of type S there is an object o2 of
type T such that for all programs P defined in terms of T, the
behavior of P is unchanged when o1 is substituted for o2 then S is
a subtype of T.”

we make use of abstractions (and polymorphism) to let our classes adhere to the Open-Closed Principle. 
In order to make a proper use of inheritance, so our derived classes will still subscribe to OCP, 
we guide ourselves by the Liskov Substitution Principle.

The whole point here is that a derived class should work as expected i.e. 
should behave (at a minimum common denominator) as portrayed by the base class, so that, 
classes or methods that have a reference to the base class, will be able to use instances of the derived classes without being aware of it(thus avoiding hard-coded dependencies).

 example of the Rectangle base class and the Square class that derives from it. 
 So you have a Rectangle class in your application, and you want to use a new Square class, 
 so you think… well a Square “is-a” Rectangle isn’t it? (it just has the same width and height) 
 So you make it derive from the Rectangle class and wire it up so when you set the width, 
 the height will be set as well and vice versa. Bang! Problem is that another developer that is working with Rectangles, 
 doesn’t need to know what Rectangles really are at runtime, 
 but still expects them to behave according to the base class definition. In this case, 
 Square doesn’t conform to LSP and may end up causing problems based on unfulfilled assumptions. 
 The point here is that, while it is a valid logical premise to relate a square with a rectangle, 
 it might not be as useful from a code perspective. This example is also known as the circle-ellipse problem.
 This was a pretty subtle violation of LSP. However, in practice, any time you use 
 the common switch statement to check the type of an object at runtime in order to do this or that, 
 you are violating LSP and OCP (new derived types will force you to modify that switch block).



```

# The Interface Segregation Principle (ISP)
```
Make fine grained interfaces that are client specific or, 
Clients should not be forced to depend upon interfaces that they do not use”

The whole point is that, when we have a class that has a fat interface (an interface with a lot of methods) 
and a series of clients that depend upon this interface, we should refactor our solution so that, 
any given client only depends on a new interface that comprises only those methods of the original interface 
that the client needs to use. This is, the solution is to group the methods of the fat interface, 
into smaller and more cohesive interfaces.

The problem of using fat non-cohesive interfaces is that, they create a coupling between its clients, 
i.e. a given client may force changes on the interface that will impact another client even if they use non-related methods.

```

# The Dependency Inversion Principle (DIP)
```
"Depend on abstractions, not on concretions or, A. High level modules should not depend upon low level modules.
Both should depend upon abstractions. Abstractions should not depend upon details B. 
Abstraction should not depend upon details. Details should depend upon abstractions.”

if you use both OCP and LSP strictly, you will notice how a new pattern or structure 
emerges from it that can be generalized into what is known as the Dependency Inversion Principle
This is one of the most useful principles, as it allow us to design software 
that is flexible (easy to change or extend), robust (reacts well to changes i.e. 
doesn’t break everywhere) and reusable (the parts of the system are very decoupled 
and we can extract them and use them in other projects), and whose main aim is to address bad design.
The DIP addresses this problem saying no to hard-coded and top-down dependencies. 
The high- level modules should not depend upon the low-level modules, 
everything has to depend upon abstractions (thereby we get and “inverted” dependency). 
This way, the high level modules don’t know exactly what they depend upon, 
they just know they are using something that must adhere to a given interface, 
and thus, everything that follows that interface contract can be plugged in (or plugged out).
If you extend the principle to the whole system you end up with a set of highly decoupled modules, 
that are completely isolated from changes in other modules and that can be easily reused. 
You end up with a well defined set of interfaces or abstractions that define the policy of your system, 
and a set of concrete implementations that are connected via these abstractions.
```

# Injecting Our People Service in The People List Component
> By taking the advantage of dependency injection, inject the service through the component’s constructor.

# What is Dependency Injection?
> As we want each subsystem to depend on abstractions and not concrete implementations. 
That’s where dependency injections comes in. 
It’s the mechanism by which we can introduce real implementations to these subsystems that can do real work at runtime. 
In our case Dependency Injection to Inject Our People Service in the People List Component.
```
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from "../people.service";

@Component({
  selector: 'app-people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
     {{person.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) {
    this.people = peopleService.getAll();
  }

  ngOnInit() {}
}


```

# Registering Service With Application: There are two ways to register the server 
# 1) Within the Component decorator using providers property 
In order to register a service with Angular 2 you use the providers property within the Component decorator. 
For instance, to make the PeopleService available throughout our app we can register it within the AppComponent component. 
This will make it available to this component and all its children (like PeopleListComponent). 
```
import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PeopleService]
})
export class AppComponent {
  title = 'Star Wars PPlz!!!';
}

```
# 2)  Register Services at the Module Level 
the providers property of the NgModule decorator
```
import { PeopleService } from './people.service';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, PeopleListComponent, PersonDetailsComponent],
  bootstrap: [ AppComponent ],
  providers: [ PeopleService] // You can put your services here!
})
export class AppModule { }


```

# Angular Cli Command for Registering service
When you generate a new service there is one additional flag that you can use to inject the registering code inside a module in addition to generating the new service: the --module flag (-m in short-hand).
```
> ng generate service people --module app
# in short notation:
# ng g s people -m app

```

# Component OnInit for initializing initial state 
```
import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {PeopleService} from '../people.service';

@Component({selector: 'app-people-list', template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
     {{person.name}}
    </li>
  </ul>
  `})
export class PeopleListComponent implements OnInit {
  people : Person[]=[];

  constructor(private _peopleService : PeopleService) {
  //this.people = this._peopleService.getAll(); // we make constructor more light
  }
  ngOnInit() {
    this.people = this
      ._peopleService
      .getAll();
  }

}


```

# Enabling Dependency Injection in Your Service :We saw how to inject stuff in a component, but how do you inject stuff in a service?
> Well you follow the same process that you do with components by injecting the dependency in the constructor 
and registering in the providers property of the root component. And additionally you need to decorate the service with the Injectable decorator just as you can see in the example below.
Why don’t we use the Injectable decorator in components? We’ll that’s because 
the Component decorator enables dependency injection directly
```
import { Injectable } from '@angular/core';
import { Person } from './person';
import { SomeOtherService } from './some-other.service';

@Injectable()
export class PeopleService{
  constructor(private _someOtherService: SomeOtherService){}

  getAll() : Person[] {
    return [
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ];
  }

}


```
# make your application depend on abstractions right away using this more verbose approach
```
// In the AppComponent
providers: [ {provide:'IPeopleService', useClass: PeopleService} ]

// In the PeopleListComponent
constructor(@Inject("IPeopleService")private _peopleService : IPeopleService)

// In the PeopleService
export interface IPeopleService {...}
export class PeopleService implements IPeopleService {...}


```
# If want to user browser side transpiler following links are required, we have to user specific angular version
```


  <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.1/es6-shim.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.20/system-polyfills.js"></script>
  <script src="https://npmcdn.com/angular2/es6/dev/src/testing/shims_for_IE.js"></script>

  <!-- Angular polyfill required everywhere -->
  <script src="https://code.angularjs.org/2.0.0-beta.8/angular2-polyfills.js"></script>

  <script src="https://code.angularjs.org/tools/system.js"></script>
  <script src="https://code.angularjs.org/tools/typescript.js"></script>
  <script src="https://code.angularjs.org/2.0.0-beta.8/Rx.js"></script>
  <script src="https://code.angularjs.org/2.0.0-beta.8/angular2.dev.js"></script>
  <script src="https://code.angularjs.org/2.0.0-beta.8/router.dev.js"></script>
  <script src="https://code.angularjs.org/2.0.0-beta.8/http.dev.js"></script>

```