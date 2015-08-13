/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'todo'
})
@View({
  template: 
  `
    <ul>
      <li *ng-for="#todo of todos">
        {{ todo }}
      </li>
    </ul>
    <input #todotext (keyup)="doneTyping($event)">
    <button (click)="addTodo(todotext.value)">Add ToDo</button>
  `,
  directives: [NgFor]
})
class ToDoList {
  todos: Array<string>;

  constructor() {
    this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  doneTyping($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

bootstrap(ToDoList)