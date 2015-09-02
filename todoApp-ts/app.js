var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var TodoStore_1 = require('services/TodoStore');
var TodoApp = (function () {
    function TodoApp(todoStore) {
        this.todoStore = todoStore;
    }
    TodoApp.prototype.add = function ($event, newtodo) {
        if ($event.which === 13) {
            this.todoStore.add(newtodo.val);
            newtodo.value = '';
        }
    };
    TodoApp.prototype.toggleTodoState = function (todo) {
        todo.done = !todo.done;
    };
    TodoApp = __decorate([
        angular2_1.Component({
            selector: 'app',
            componentServices: [TodoStore_1.TodoStore]
        }),
        angular2_1.View({
            templateUrl: 'templates/todo.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [(typeof TodoStore !== 'undefined' && TodoStore) || Object])
    ], TodoApp);
    return TodoApp;
})();
angular2_1.bootstrap(TodoApp);
