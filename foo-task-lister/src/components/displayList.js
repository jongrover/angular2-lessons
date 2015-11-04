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
//model dependencies
var list_1 = require('../models/list');
var DisplayList = (function () {
    function DisplayList() {
        this.lists = list_1.List.all;
    }
    DisplayList.prototype.destroy = function (obj) {
        list_1.List.all[obj.list].tasks.splice(obj.task, 1);
    };
    DisplayList = __decorate([
        angular2_1.Component({
            selector: 'displaylist'
        }),
        angular2_1.View({
            templateUrl: 'src/views/displayList.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayList);
    return DisplayList;
})();
exports.DisplayList = DisplayList;
