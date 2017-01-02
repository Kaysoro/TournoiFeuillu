"use strict";
var PLAYER_PER_TEAM = 4;

var Team = (function () {
    function Team(nom) {
      this._nom = nom;
      this._players = new Array();
      this._score = 0;
      this._scoreDetails = "";
      this._score_update = true;
    }
    
    Team.prototype.getNom = function () {
      return this._nom;
    };

    Team.prototype.calculatePoints = function (rules) {
      if (! this._score_update){
        this._score = 0;
        this._scoreDetails = "";

        // Calculate the points from classes
        for(var i = 0; i < this._players.length; i++){
          this._score += this._players[i].getPoints();
          this._scoreDetails += this._players[i].getNom() + " : "
              + this._players[i].getPoints() + "pt";
          
          if (this._players[i].getPoints() > 1)
             this._scoreDetails += "s";
           this._scoreDetails += "\n"
        }

        // Now we have to calculate the rules
        for(var i = 0; i < rules.length; i++){

          var founds = new Array();

          for(var k = 0; k < rules[i].getClasses().length; k++)
            founds.push(false);

          for(var j = 0; j < this._players.length; j++){
            for(var k = 0; k < rules[i].getClasses().length; k++)
              if (rules[i].getClasses()[k] == this._players[j])
                founds[k] = true;

              var found = true;
              for(var k = 0; k < founds.length; k++)
                if (! founds[k]){
                  found = false;
                  break;
                }

              if (found){
                if (rules[i].getPoints() != INTERDIT && this._score != INTERDIT)
                  this._score += rules[i].getPoints();
                else
                  this._score = INTERDIT;
                this._scoreDetails += rules[i].getClasses()[0].getNom();

                for(var k = 1; k < founds.length; k++)
                  this._scoreDetails += " + " + rules[i].getClasses()[k].getNom();

                this._scoreDetails += " : " + rules[i].getPoints();
                if (rules[i].getPoints() != INTERDIT){
                  this._scoreDetails += "pt";
                  if (rules[i].getPoints() > 1)
                    this._scoreDetails += "s";
                }
                
                this._scoreDetails += "\n"
                break;
            }
          }
        }
        this._score_update = true;
      }
      return this._score;
    };

    Team.prototype.getPoints = function (rules) {
      if (! this._score_update)
        this.calculatePoints(rules);
      return this._score;
    };

    Team.prototype.getDetailedPoints = function (rules) {
      if (! this._score_update)
        this.calculatePoints(rules);
      return this._scoreDetails;
    };

    Team.prototype.getClasses = function () {
      return this._players;
    };

    Team.prototype.removeClasse = function (classe) {
      if (this._players.length > 0){
        var number = this._players.indexOf(classe);
        this._players.splice(number, 1);
        this._score_update = false;
      }
    };

    Team.prototype.addClasse = function (classe) {
      if (! this.isFull()){
        this._players.push(classe);
        this._score_update = false;
      }
    };

    Team.prototype.isFull = function () {
      return this._players.length == PLAYER_PER_TEAM;
    };

    return Team;
}());