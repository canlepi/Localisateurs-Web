//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function afficherMasquerMenu(){
    if(menu_visible==false){//si c'est caché
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//le menu se cache une fois qu'une option est sélectionnée
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//A partir d'une barre particulière identifiée par son id, les barres sont créées.
function creerBarre(id_barre){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barre.appendChild(div);
    }
}

//Toutes les barres générales sont sélectionnées pour une manipulation ultérieure
let html = document.getElementById("html");
creerBarre(html);
let javascript = document.getElementById("javascript");
creerBarre(javascript);
let wordpress = document.getElementById("wordpress");
creerBarre(wordpress);
let photoshop = document.getElementById("photoshop");
creerBarre(photoshop);
let php = document.getElementById("php");
creerBarre(php);
let ilustrator = document.getElementById("ilustrator");
creerBarre(ilustrator);

//Maintenant, le nombre de barres qui vont être peintes pour chaque barre est enregistré.
//Pour ce faire un tableau est utilisé, chaque position appartient à un élément.
// Il commence à -1 car il n'y a pas de barre peinte au démarrage.
let compteurs = [-1,-1,-1,-1,-1,-1];
//Cette variable servira de référence pour savoir si l'animation a été exécutée
let plein = false;

//fonction qui applique les animations de la section compétences
function effetCompetences(){
    var competences = document.getElementById("competences");
    var distance_skills = window.innerHeight - competences.getBoundingClientRect().top;
    if(distance_skills>=300 && plein==false){
        plein = true;
        const intervalHtml = setInterval(function(){
            peindreBarre(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            peindreBarre(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            peindreBarre(wordpress, 13, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            peindreBarre(photoshop, 15, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            peindreBarre(php, 16, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            peindreBarre(ilustrator, 11, 5, intervalIlustrator);
        },100);
    }
}

//remplissage d'une barre particulière avec la quantité spécifiée
function peindreBarre(id_barre, quantite, indice, interval){
    compteurs[indice]++;
    x = compteurs[indice];
    if(x < quantite){
        let elements = id_barre.getElementsByClassName("e");
        elements[x].style.backgroundColor = "#d2652f";
    }else{
        clearInterval(interval)
    }
}
//détection du défilement de la souris pour appliquer l'animation de la barre
window.onscroll = function(){
    effetCompetences();
}