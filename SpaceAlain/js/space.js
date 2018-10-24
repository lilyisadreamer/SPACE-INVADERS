var fenetre = document.getElementById("fenetre");
var div_vaisseau;
var div_mechant;
document.getElementById("boutonJouer").addEventListener("click", fonctionLancerLaGame);
document.onkeydown = function (event) {
    if (event.keyCode == 39) fonctionVaisseauGauche();
    if (event.keyCode == 37) fonctionVaisseauDroite();
    if (event.keyCode == 32) fonctionVaisseauTire();
    if (event.keyCode == 13) ;
}

function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width))
    );
}//Fonction Collision

function fonctionVaisseauDroite() {
    if (parseInt(window.getComputedStyle(div_vaisseau).left) > 0) {
        div_vaisseau.style.left = parseInt(window.getComputedStyle(div_vaisseau).left) - 10 + "px";
    }
}//Fonction pour déplacer gauche

function fonctionVaisseauGauche() {
    if ((parseInt(window.getComputedStyle(div_vaisseau).left) < 1500)) {
        div_vaisseau.style.left = parseInt(window.getComputedStyle(div_vaisseau).left) + 10 + "px";
    }
}//Fonction pour déplacer droite

function fonctionVaisseauTire() {
    var div_laser = document.createElement("div");
    div_laser.setAttribute("class", "laser");
    div_laser.style.left = div_vaisseau.style.left;
    div_laser.style.bottom = 0;
    fenetre.append(div_laser);
    var intervalLaser = setInterval(function () {
        fonctionBougeLaser(intervalLaser, div_laser);
    }, 50);
}

function fonctionBougeLaser(intervalLaser, div_laser) {
    div_laser.style.bottom = parseInt(window.getComputedStyle(div_laser).bottom) + 100 + "px";
    if (parseInt(window.getComputedStyle(div_laser).bottom) >= 2000) {
        clearInterval(intervalLaser);
    }
}

function fonctionLancerLaGame() {
    var button = document.getElementById("boutonJouer");
    button.setAttribute("id", "destructionBouton");
    var mechantContainer = document.createElement("section");
    mechantContainer.setAttribute("id", "mechantContainer")
    div_vaisseau = document.createElement("div");
    div_vaisseau.setAttribute("id", "vaisseau");
    div_vaisseau.setAttribute("class", "vaisseau");
    fenetre.append(div_vaisseau);
    fenetre.append(mechantContainer);
    for (j = 0; j < 8; j++) {
        div_mechant = document.createElement("div");
        div_mechant.setAttribute("id", "mechant" + j);
        div_mechant.setAttribute("class", "mechant");
        div_mechant.style.left = 50 * j + 50 + "px";
        mechantContainer.append(div_mechant);
    }
    var sens = "gauche";
    var intervalMob = setInterval(function () {
        sens = fonctionBougerMechant(intervalMob, mechantContainer, sens);
    }, 60);
}

function fonctionBougerMechant(intervalMob, mechantContainer, sens) {
    var mechantContainerTop = parseInt(mechantContainer.offsetTop);
    var mechantContainerLeft = parseInt(mechantContainer.offsetLeft);
    var longueurDeplacementHorizontal = 3;
    var longueurDeplacementVertical = 1;
    var nombreDeDeplacement = 100;

    mechantContainer.style.top = mechantContainerTop + longueurDeplacementVertical + "px";
    
    if (mechantContainerTop == fenetre.offsetHeight-100) {
        clearInterval(intervalMob);
    }

    if (sens == "gauche"){
        mechantContainer.style.left = mechantContainerLeft - longueurDeplacementHorizontal + "px";
        if (mechantContainerLeft <= 0) {
            sens = "droite"
        }
    }
    else if (sens == "droite") {
        mechantContainer.style.left = mechantContainerLeft + longueurDeplacementHorizontal + "px";
        if (mechantContainerLeft >= longueurDeplacementHorizontal*nombreDeDeplacement){
            sens="gauche";
        }
    }
    return sens;
}



div.onclick = function () {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      div.style.bottom = timePassed / +3 + "px";

      
        div.x = parseInt(div.style.left);
        div.y = parseInt(div.style.bottom);
        div.width = 5;
        div.height = 5;

        div_mechant.x = parseInt(div_mechant.style.left);
        div_mechant.y = parseInt(div_mechant.style.bottom);
        div_mechant.width = 75;
        div_mechant.height = 20;

        console.log(div.x,div.y,"div");
        console.log(div_mechant.x,div_mechant.y,"div_mechant");
        if(isCollide(div,div_mechant)) {
            div.style.display = "none";
            div_mechant.style.display = "none";
            alert("collision");
        }
      if (timePassed > 2080) clearInterval(timer);
    }, 20);
  }
















































// function fonctionBougerMechant(intervalMob, mechantContainer) {
//     if (parseInt(window.getComputedStyle(mechantContainer).top) <= 800 ) {
//         if (parseInt(window.getComputedStyle(mechantContainer).left) >= 1200) {
//             mechantContainer.style.left = parseInt(window.getComputedStyle(mechantContainer).left) - 100 + "px"
//         }
//         if (parseInt(window.getComputedStyle(mechantContainer).top) >= parseInt(window.getComputedStyle(mechantContainer).top) + 100) {
//             mechantContainer.style.top = parseInt(window.getComputedStyle(mechantContainer).top) + 100 + "px"
//         }
//         if (parseInt(window.getComputedStyle(mechantContainer).left) <= 0) {
//             mechantContainer.style.left = parseInt(window.getComputedStyle(mechantContainer).left) + 100 + "px"
//         }
//         if (parseInt(window.getComputedStyle(mechantContainer).top) >= parseInt(window.getComputedStyle(mechantContainer).top) + 100) {
//             mechantContainer.style.top = parseInt(window.getComputedStyle(mechantContainer).top) + 100 + "px"
//         }
//     }
//     console.log(parseInt(mechantContainer.op));
//     if (mechantContainer.style.bottom == 0 + "px") {
//         clearInterval(intervalMob);
//     }
// }








