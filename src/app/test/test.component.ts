import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
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
  @Input('parentData') public name: String | undefined;

  @Output() public childEvent = new EventEmitter();

  public displayName = true;

  public color = 'greene';

  public colors = ['red', 'blue', 'green', 'yellow'];

  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit('Hey Bro !!!!!!!!!!');
  }
}
