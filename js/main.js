initDispos();
initTeams();
updateLimit();

/** ====================================
 * Functions dedicated to the GUI
 * =====================================
 */
function initDispos(){
    for(var i = 0; i < classes.length; i++){
        var img = document.createElement("img");
        img.setAttribute("onclick", "selectClass(" + i + ")");
        img.setAttribute("class", "item");
        img.setAttribute("src", "img/" + classes[i].getNom() + ".png");
        img.setAttribute("alt", classes[i].getNom());

        var tooltip = classes[i].getNom() + ", " + classes[i].getPoints() + "pt";
        if (classes[i].getPoints() > 1)
            tooltip += "s";
        img.setAttribute("title", tooltip);

        document.getElementById("classes").appendChild(img);
    }
}

function initTeams(){
    for(var i = 0; i < teams.length; i++){
        var div = document.createElement("div");
        div.setAttribute("class", "team");
        div.setAttribute("onclick", "selectTeam(" + i + ")");

        var score = document.createElement("div");
        score.setAttribute("class", "score");
        score.innerHTML = teams[i].getPoints();
        div.appendChild(score);

        for(var j = 0; j < PLAYER_PER_TEAM; j++){
            var img = document.createElement("img");
            img.setAttribute("class", "item");
            img.setAttribute("src", "img/empty.png");
            div.appendChild(img);
        }

        document.getElementById("teams").appendChild(div);
    }
    document.getElementsByClassName("team")[0].setAttribute("class", "team selected");;
}

function updateDispos(classNumber){
    var classe = classes[classNumber];
    var img = document.getElementById('classes')
                   .getElementsByTagName('img')[classNumber];
    
    if (classe.getTeam() == undefined)
        img.setAttribute("class", "item");
    else
        img.setAttribute("class", "item used");
}

function updateTeams(teamNumber){
    var teamDisplay = document.getElementsByClassName("team")[teamNumber]
    var imgs = teamDisplay.getElementsByTagName("img");
    var classesTeam = teams[teamNumber].getClasses();
    
    for(var i = 0; i < classesTeam.length; i++){
        imgs[i].setAttribute("onclick", "selectClass(" + classes.indexOf(classesTeam[i]) + ")");
        imgs[i].setAttribute("src", "img/" + classesTeam[i].getNom() + ".png");
        imgs[i].setAttribute("alt", classesTeam[i].getNom());

        var tooltip = classesTeam[i].getNom() + ", " + classesTeam[i].getPoints() + "pt";
        if (classesTeam[i].getPoints() > 1)
            tooltip += "s";

        imgs[i].setAttribute("title", tooltip); 
    }

    for(var i = classesTeam.length; i < PLAYER_PER_TEAM; i++){
        imgs[i].removeAttribute("onclick");
        imgs[i].setAttribute("src", "img/empty.png");
        imgs[i].removeAttribute("alt");
        imgs[i].removeAttribute("title");
    }

    teamDisplay.getElementsByClassName("score")[0].innerHTML = teams[teamNumber].getPoints(rules);
    teamDisplay.setAttribute("title", teams[teamNumber].getDetailedPoints(rules));
}

function updateLimit(){
    var score = 0;
    var scoreDisplay =  document.getElementById("score");
    for(var i = 0; i < teams.length; i++){
        if (teams[i].getPoints(rules) == INTERDIT ){
            score = INTERDIT;
            break;
        }
        else if (teams[i].getPoints(rules) == PILIER_MANQUANT ){
            score = PILIER_MANQUANT;
            break;
        }
        else
            score += teams[i].getPoints(rules);
    }
    scoreDisplay.innerHTML = score;

    var span = document.createElement("span");
    span.innerHTML = " / " + LIMIT_POINTS;
    scoreDisplay.appendChild(span);

    if (LIMIT_POINTS >= score)
        scoreDisplay.setAttribute("class", "global-score");
    else
        scoreDisplay.setAttribute("class", "global-score error");
}


/** ====================================
 * Actions on selection by user
 * =====================================
 */

function selectClass(classNumber){
    var classe = classes[classNumber];

    if (classe.getTeam() != undefined){
        classe.getTeam().removeClasse(classe);
        updateTeams(teams.indexOf(classe.getTeam()));
        classe.setTeam(undefined);
        autoSelectTeam();
    }
    else if (! teamSelected.isFull()){
        classe.setTeam(teamSelected);
        teamSelected.addClasse(classe);
        updateTeams(teams.indexOf(teamSelected));

        if (teamSelected.isFull())
            autoSelectTeam();
    }
    
    updateDispos(classNumber);
    updateLimit();
}

function autoSelectTeam(){
    var found = false;
    for(var i = 0; i < teams.length; i++){
        var index = (teams.indexOf(teamSelected) + i) % teams.length;

        if (! teams[index].isFull()){
            selectTeam(index);
            found = true;
            break;
        }
    }

    if (! found){
        document.getElementsByClassName("team")[teams.indexOf(teamSelected)]
                    .setAttribute("class", "team");
    }
}

function selectTeam(teamNumber){
    if (teamNumber >= 0 && teamNumber < teams.length && ! teams[teamNumber].isFull()){
        var teamsDisplay = document.getElementsByClassName("team");
        teamsDisplay[teams.indexOf(teamSelected)].setAttribute("class", "team");
        teamsDisplay[teamNumber].setAttribute("class", "team selected");
        teamSelected = teams[teamNumber];
    }
}