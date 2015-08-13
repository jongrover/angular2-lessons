/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'child'
})
@View({
  template: '<p>{{ message }}</p>'
})
class ChildComponent {

  message: string;

  constructor() {
    this.message = "I'm the child!";
  }
}

@Component({
  selector: 'app'
})
@View({
  template: `
    <h1>{{ message }}</h1>
    <child></child>
  `,
  directives: [ChildComponent]
})
class AppComponent {

  message: string;

  constructor() {
    this.message = "I'm the parent!";
  }
}

bootstrap(AppComponent);
