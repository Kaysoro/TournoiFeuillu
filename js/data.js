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
// Elio + Enu ou Eca ou Dada : 1
  new Rule([classes[2],  classes[4]],  1)
, new Rule([classes[1],  classes[2]],  1)
, new Rule([classes[2],  classes[9]],  1)

// Enu + Xel ou Sacri : 1
, new Rule([classes[4],  classes[11]], 1)
, new Rule([classes[4],  classes[15]], 1)

// Zobal + Steamer ou Sadi : 1
, new Rule([classes[12], classes[16]], 1) 
, new Rule([classes[14], classes[16]], 1)

// Osa + Sadi : 1
, new Rule([classes[8],  classes[12]], 1)

// Eni + Feca : 1
, new Rule([classes[3],  classes[5]], 1)

// Panda + Enu + Iop ou Eca
, new Rule([classes[4],  classes[9], classes[7]], 1)
, new Rule([classes[4],  classes[9], classes[1]], 1)

// Sadi + Feca + Sram ou Eca
, new Rule([classes[12],  classes[5], classes[13]], 1)
, new Rule([classes[12],  classes[5], classes[1]], 1)

// Double piliers (Eni, Sacri, Osa, Xel) : INTERDIT
, new Rule([classes[3],  classes[8]],  INTERDIT) 
, new Rule([classes[3],  classes[11]], INTERDIT)
, new Rule([classes[3],  classes[15]], INTERDIT) 
, new Rule([classes[8],  classes[11]], INTERDIT)
, new Rule([classes[11], classes[15]], INTERDIT)
, new Rule([classes[8],  classes[15]], INTERDIT)

// Double erodeurs (Iop, Eca, Sram, Roub) : INTERDIT
, new Rule([classes[7],  classes[1]],  INTERDIT) 
, new Rule([classes[7],  classes[13]], INTERDIT)
, new Rule([classes[7],  classes[10]], INTERDIT)
, new Rule([classes[1],  classes[13]], INTERDIT)
, new Rule([classes[1], classes[10]], INTERDIT)
, new Rule([classes[10],  classes[13]], INTERDIT)
];

var teams = [
  new Team('Team A')
, new Team('Team B')
];

var teamSelected = teams[0];