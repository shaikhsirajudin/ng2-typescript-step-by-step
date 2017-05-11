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
