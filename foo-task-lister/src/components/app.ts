/// <reference path="../../typings/angular2/angular2.d.ts" />
import { Component, View, bootstrap } from 'angular2/angular2';
//child components
import { NewList } from './newList';
import { NewTask } from './newTask';

@Component({
    selector: 'app'
})
@View({
  templateUrl: 'src/views/app.html',
  directives: [NewList, NewTask]
})
class App {
}

bootstrap(App);