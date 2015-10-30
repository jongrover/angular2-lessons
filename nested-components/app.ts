/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
  selector: 'child'
})
@View({
  template: `<p>Child Insert</p>`
})
class Child { 
} // note that the Child Component must be included before the App component can make use of it as a directive for its view.

@Component({
  selector: 'app'
})
@View({
  template: `
    <div class="parent">
      <h1>{{ title }}</h1>
      <child></child>
    </div>
  `,
  directives: [Child]
})
class App {
  title: string;
  constructor() {
    this.title = 'My App';
  }
}

bootstrap(App);