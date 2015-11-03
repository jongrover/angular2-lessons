/// <reference path="../../typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';
import { Foo } from '../models/foo' // model (relative to this ts file must include ./ if same folder)

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'src/views/app.html', //view (relative to the index page)
})
class App {
  foo: Foo;
  constructor() {
    this.foo = new Foo("bar");
  }
}

bootstrap(App);