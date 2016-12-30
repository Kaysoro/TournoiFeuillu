"use strict";
var Rule = (function () {
    function Rule(classe1, classe2, points) {
      this._points = points;
      this._classe1 = classe1;
      this._classe2 = classe2;
    }

    Rule.prototype.getPoints = function () {
    return this._points;
    };

    Rule.prototype.getClasse1 = function () {
    return this._classe1;
    };

    Rule.prototype.getClasse2 = function () {
    return this._classe2;
    };
    
    return Rule;
}());