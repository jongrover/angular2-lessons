///<reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Foo} from './foo.ts';

class Person {
  name: string;
  constructor() {
    this.name = "Bob";
  }
}


@Component({
  selector: 'app'
})
@View({
  directives: [Foo],
  template: `
    <p>{{ greet }}</p>
    <input type="text" [value]="num">
    <foo [person]="person"></foo>
   `
})
class App {
  greet: string; // private input (property) available to only this component.
  num: number;
  person: Person; // public input (property)
  constructor(){
    this.greet = "Hello";
    this.num = 4;
    this.person = new Person();
  }
}

bootstrap(App);
