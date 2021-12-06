import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Bro';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = true;

  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
