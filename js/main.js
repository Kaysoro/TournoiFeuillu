initDispos();
initTeams();

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
        img.setAttribute("title", classes[i].getNom() + ", " + classes[i].getPoints() + "pts");

        document.getElementById("classes").appendChild(img);
    }
}

function initTeams(){
    for(var i = 0; i < teams.length; i++){
        var div = document.createElement("div");
        div.setAttribute("class", "team");
        div.setAttribute("onclick", "selectTeam(" + i + ")");

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
    var imgs = document.getElementsByClassName("team")[teamNumber]
                .getElementsByTagName("img");
    var classesTeam = teams[teamNumber].getClasses();
    
    for(var i = 0; i < classesTeam.length; i++){
        imgs[i].setAttribute("onclick", "selectClass(" + classes.indexOf(classesTeam[i]) + ")");
        imgs[i].setAttribute("src", "img/" + classesTeam[i].getNom() + ".png");
        imgs[i].setAttribute("alt", classesTeam[i].getNom());
        imgs[i].setAttribute("title", classesTeam[i].getNom() + ", " + classesTeam[i].getPoints() + "pts");
    }

    for(var i = classesTeam.length; i < PLAYER_PER_TEAM; i++){
        imgs[i].removeAttribute("onclick");
        imgs[i].setAttribute("src", "img/empty.png");
        imgs[i].removeAttribute("alt");
        imgs[i].removeAttribute("title");
    }
}

function updateLimit(){
    //TODO
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