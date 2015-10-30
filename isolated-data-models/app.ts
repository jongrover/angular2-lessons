/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';

//Model

class IsolatedModel {
  prop: string;
  constructor(value) {
    this.prop = value;
  }
}

// Child Component

@Component({
  selector: 'child'
})
@View({
  template: `<p>{{ model.prop }}</p>`
})
class Child {
  model: IsolatedModel;
  constructor(){
    this.model = new IsolatedModel("Foo");
  }
}

// Main App Component

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