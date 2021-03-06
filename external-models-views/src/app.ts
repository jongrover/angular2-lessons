/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Person} from './models/person'; // relative to this file and must include ./

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'src/views/person.html' //relative to index.html
})
class App {
  person: Person;
  constructor() {
    this.person = new Person('Simon');
  }
}

bootstrap(App);