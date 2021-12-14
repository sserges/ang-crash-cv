import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Bro';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = true;
  public successClass = 'text-success';

  public hasError = false;
  public isSpecial = true;

  public highlightColor = 'orange';

  public greeting = '';

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event: Event) {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value: any) {
    console.log(value);
  }
}
