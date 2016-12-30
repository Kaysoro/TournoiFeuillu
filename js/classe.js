"use strict";
var Classe = (function () {
    function Classe(nom, points) {
      this._nom = nom;
      this._points = points;
      this._team = undefined;
    }

    Classe.prototype.getNom = function () {
    return this._nom;
    };

    Classe.prototype.getPoints = function () {
    return this._points;
    };

    Classe.prototype.getTeam = function () {
    return this._team;
    };

    Classe.prototype.setTeam = function (team) {
      this._team = team;
    };
    
    return Classe;
}());