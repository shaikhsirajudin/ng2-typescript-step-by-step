import { Component } from '@angular/core';
import { PeopleListComponent } from "./people-list/people-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
