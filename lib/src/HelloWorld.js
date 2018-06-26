"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.helloWorld = function () {
        return this.speak("Hello World");
    };
    HelloWorld.prototype.speak = function (words) {
        return words;
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
exports.default = HelloWorld;
