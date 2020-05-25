"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function makeGender(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gender = "male";
            return _this;
        }
        return class_1;
    }(target));
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person = __decorate([
        makeGender
    ], Person);
    return Person;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal = __decorate([
        makeGender
    ], Animal);
    return Animal;
}());
var animal = new Animal();
animal.name = "KOMO";
animal.age = 11;
console.log(animal);
