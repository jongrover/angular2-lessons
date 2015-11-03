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
/// <reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
// model dependencies
var task_1 = require('../models/task');
var NewTask = (function () {
    function NewTask() {
    }
    NewTask.prototype.createTask = function (description) {
        this.task = new task_1.Task(description);
        description.value = "";
    };
    NewTask = __decorate([
        angular2_1.Component({
            selector: 'newtask'
        }),
        angular2_1.View({
            templateUrl: 'src/views/task.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewTask);
    return NewTask;
})();
exports.NewTask = NewTask;
