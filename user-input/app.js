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
var ToDoList = (function () {
    function ToDoList() {
        this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
    }
    ToDoList.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    ToDoList.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    ToDoList = __decorate([
        angular2_1.Component({
            selector: 'todo'
        }),
        angular2_1.View({
            template: "\n    <ul>\n      <li *ng-for=\"#todo of todos\">\n        {{ todo }}\n      </li>\n    </ul>\n    <input #todotext (keyup)=\"doneTyping($event)\">\n    <button (click)=\"addTodo(todotext.value)\">Add ToDo</button>\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], ToDoList);
    return ToDoList;
})();
angular2_1.bootstrap(ToDoList);
