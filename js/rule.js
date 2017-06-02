"use strict";
var INTERDIT = "Interdit";
var PILIER_MANQUANT = "Pilier absent"

var Rule = (function () {
    function Rule(classes, points) {
      this._points = points;
      this._classes = classes;
    }

    Rule.prototype.getPoints = function () {
    return this._points;
    };

    Rule.prototype.getClasses = function () {
    return this._classes;
    };
    
    return Rule;
}());