"use strict";
exports.__esModule = true;
var Sale = /** @class */ (function () {
    function Sale() {
        this.observers = [];
    }
    Sale.prototype.addObserver = function (ob) {
        this.observers.push(ob);
    };
    Sale.prototype.notifyObservers = function () {
        console.log('Notifying clients:');
        this.observers.map(function (observer) { return observer.sendEmail(); });
    };
    return Sale;
}());
exports.Sale = Sale;
