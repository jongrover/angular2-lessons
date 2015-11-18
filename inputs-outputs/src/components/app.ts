///<reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Foo} from './foo';

@Component({
  selector: 'app',
})
@View({
  directives: [Foo],
  template: `
    <p>{{ greet }}</p>
    <foo></foo>
   `
})
class App {
  greet: string;
  constructor(){
    this.greet = "Hello"; //private input (property) available to only this component.
  }
}

bootstrap(App);
