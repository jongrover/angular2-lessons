/// <reference path="../../typings/angular2/angular2.d.ts" />

import {View, Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'src/app/app.html'
})
class App {
  myName: string;
  constructor(){
    this.myName = "Alice";
  }
}

bootstrap(App);