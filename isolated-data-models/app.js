/// <reference path="typings/angular2/angular2.d.ts" />
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
var angular2_1 = require('angular2/angular2');
//Model
var IsolatedModel = (function () {
    function IsolatedModel(value) {
        this.prop = value;
    }
    return IsolatedModel;
})();
// Child Component
var Child = (function () {
    function Child() {
        this.model = new IsolatedModel("Foo");
    }
    Child = __decorate([
        angular2_1.Component({
            selector: 'child'
        }),
        angular2_1.View({
            template: "<p>{{ model.prop }}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], Child);
    return Child;
})();
// Main App Component
var App = (function () {
    function App() {
        this.title = 'My App';
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "\n    <div class=\"parent\">\n      <h1>{{ title }}</h1>\n      <child></child>\n    </div>\n  ",
            directives: [Child]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);
