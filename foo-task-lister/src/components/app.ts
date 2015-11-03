/// <reference path="../../typings/angular2/angular2.d.ts" />
import { Component, View, bootstrap } from 'angular2/angular2';
//child components
import { NewTask } from './newTask';

@Component({
    selector: 'app'
})
@View({
  templateUrl: 'src/views/app.html',
  directives: [NewTask]
})
class App {
}

bootstrap(App);