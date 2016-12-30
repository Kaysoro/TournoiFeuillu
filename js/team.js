"use strict";
var PLAYER_PER_TEAM = 4;

var Team = (function () {
    function Team(nom) {
      this._nom = nom;
      this._players = new Array();
    }
    
    Team.prototype.getNom = function () {
      return this._nom;
    };

    Team.prototype.getPoints = function () {
      var score = 0;
      for(var i = 0; i < this._players.length; i++)
        score += this._players[i].getPoints();
      return score;
    };

    Team.prototype.getClasses = function () {
      return this._players;
    };

    Team.prototype.removeClasse = function (classe) {
      if (this._players.length > 0){
        var number = this._players.indexOf(classe);
        this._players.splice(number, 1);
      }
    };

    Team.prototype.addClasse = function (classe) {
      if (! this.isFull()){
        this._players.push(classe);
      }
    };

    Team.prototype.isFull = function () {
      return this._players.length == PLAYER_PER_TEAM;
    };

    return Team;
}());