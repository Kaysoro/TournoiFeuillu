var LIMIT_POINTS = 14;
var PILIER_OBLIGATOIRE = true;

var classes = [
  new Classe('Crâ',        0)
, new Classe('Ecaflip',    1)
, new Classe('Eliotrope',  1)
, new Classe('Eniripsa',   3)
, new Classe('Enutrof',    2)
, new Classe('Féca',       3)
, new Classe('Huppermage', 2)
, new Classe('Iop',        1)
, new Classe('Ouginak',    1)
, new Classe('Osamodas',   3)
, new Classe('Pandawa',    1)
, new Classe('Roublard',   0)
, new Classe('Sacrieur',   3)
, new Classe('Sadida',     1)
, new Classe('Sram',       1)
, new Classe('Steamer',    1)
, new Classe('Xélor',      3)
, new Classe('Zobal',      1)
];

var rules = [
// Elio + Enu ou Panda : 1
  new Rule([classes[2],  classes[4]],  1)
, new Rule([classes[2],  classes[10]],  1)

// Enu + Xélor ou Sacrieur : 1
, new Rule([classes[4],  classes[12]],  1)
, new Rule([classes[4],  classes[16]],  1)

// Zobal + Steamer, Roub ou Sadi : 1
, new Rule([classes[17],  classes[11]],  1)
, new Rule([classes[17],  classes[13]],  1)
, new Rule([classes[17],  classes[15]],  1)

// Osa + Zobal, Féca, Sadi ou Panda : 1
, new Rule([classes[9],  classes[5]],  1)
, new Rule([classes[9],  classes[10]],  1)
, new Rule([classes[9],  classes[13]],  1)
, new Rule([classes[9],  classes[17]],  1)

// Trio Panda, Elio et Eca : 1
, new Rule([classes[1],  classes[2], classes[10]],  1)

// Double piliers (Eni, Sacri, Osa, Xel) : INTERDIT
, new Rule([classes[3],  classes[9]],  INTERDIT) 
, new Rule([classes[3],  classes[12]], INTERDIT)
, new Rule([classes[3],  classes[16]], INTERDIT) 
, new Rule([classes[9],  classes[12]], INTERDIT)
, new Rule([classes[12], classes[16]], INTERDIT)
, new Rule([classes[9],  classes[16]], INTERDIT)

// Double erodeurs (Iop, Eca, Sram, Roub, Ouginak) : INTERDIT
, new Rule([classes[7],  classes[1]],  INTERDIT)
, new Rule([classes[7],  classes[8]], INTERDIT)
, new Rule([classes[7],  classes[11]], INTERDIT)
, new Rule([classes[7],  classes[14]], INTERDIT)
, new Rule([classes[1], classes[8]], INTERDIT)
, new Rule([classes[1], classes[11]], INTERDIT)
, new Rule([classes[1],  classes[14]], INTERDIT)
, new Rule([classes[11],  classes[8]], INTERDIT)
, new Rule([classes[11],  classes[14]], INTERDIT)
, new Rule([classes[8],  classes[14]], INTERDIT)
];

var piliers = [classes[3], classes[9], classes[12], classes[16]];

var teams = [
  new Team('Team A')
, new Team('Team B')
];

var teamSelected = teams[0];