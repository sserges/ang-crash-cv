import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-crash-cv';
  public name = 'Marco';
  public message = 'message';
  public person = {
    firstName: 'John',
    lastName: 'Doe',
  };

  public date = new Date();
}
