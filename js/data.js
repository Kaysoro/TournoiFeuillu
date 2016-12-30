var LIMIT_POINTS = 14;

var classes = [
  new Classe('Crâ',        0)
, new Classe('Ecaflip',    1)
, new Classe('Eliotrope',  3)
, new Classe('Eniripsa',   2)
, new Classe('Enutrof',    2)
, new Classe('Féca',       3)
, new Classe('Huppermage', 1)
, new Classe('Iop',        1)
, new Classe('Osamodas',   4)
, new Classe('Pandawa',    1)
, new Classe('Roublard',   0)
, new Classe('Sacrieur',   3)
, new Classe('Sadida',     2)
, new Classe('Sram',       1)
, new Classe('Steamer',    1)
, new Classe('Xélor',      4)
, new Classe('Zobal',      1)
];

var rules = [
  new Rule(classes[1],  classes[4],  1) // Enu   Eca   1
, new Rule(classes[2],  classes[4],  1) // Enu   Elio  1
, new Rule(classes[4],  classes[7],  1) // Enu   Iop   1
, new Rule(classes[4],  classes[11], 1) // Enu   Sacri 1
, new Rule(classes[4],  classes[15], 1) // Enu   Xel   1
, new Rule(classes[1],  classes[2],  1) // Eca   Elio  1
, new Rule(classes[2],  classes[9],  1) // Dada  Elio  1
, new Rule(classes[1],  classes[12], 1) // Sadi  Eca   1
, new Rule(classes[5],  classes[12], 1) // Sadi  Feca  1
, new Rule(classes[8],  classes[12], 1) // Sadi  Osa   1
, new Rule(classes[12], classes[13], 1) // Sadi  Sram  1
, new Rule(classes[12], classes[16], 1) // Sadi  Zob   1
, new Rule(classes[14], classes[16], 1) // Stea  Zob   1

, new Rule(classes[3],  classes[8],  2) // Eni   Osa   2
, new Rule(classes[3],  classes[11], 2) // Eni   Sacr  2
, new Rule(classes[3],  classes[15], 2) // Eni   Xel   2
, new Rule(classes[8],  classes[11], 2) // Osa   Sacr  2
, new Rule(classes[11], classes[15], 2) // Xel   Sacr  2
, new Rule(classes[8],  classes[15], 2) // Xel   Osa   2
];

var teams = [
  new Team('Team A')
, new Team('Team B')
];

var teamSelected = teams[0];