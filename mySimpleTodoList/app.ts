/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, NgFor, bootstrap } from 'angular2/angular2';

@Component({
  selector: 'todoapp'
})
@View({
  directives: [NgFor],
  template: `
    <div>
      <input #task>
      <button (click)="addTask(task)">Add Task</button>
    </div>
    <div>
      <ul>
        <li *ng-for="#task of tasks">{{ task }}</li>
      </ul>
    </div>
  `
})
class ToDoApp {
  tasks: Array<string>;
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task.value);
    task.value = '';
    console.log(this.tasks);
  }
}

bootstrap(ToDoApp);