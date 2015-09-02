/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {TodoStore} from 'services/TodoStore';

@Component({
  selector: 'app',
  componentServices: [TodoStore]
})
@View({
  templateUrl: 'templates/todo.html',
  directives: [NgFor]
})
class TodoApp {

  

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
  }
  add ($event,newtodo){
    if($event.which === 13){
      this.todoStore.add(newtodo.val);
      newtodo.value = '';
    }
  }
  toggleTodoState(todo){
    todo.done = !todo.done;
  }
}

bootstrap(TodoApp);