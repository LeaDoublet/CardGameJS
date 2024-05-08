// tableau contenant les 52 cartes d'un jeu
const jeu = [  "01_carreau","02_carreau","03_carreau","04_carreau","05_carreau","06_carreau","07_carreau","08_carreau","09_carreau","10_carreau","11_carreau","12_carreau","13_carreau",
			"01_coeur","02_coeur","03_coeur","04_coeur","05_coeur","06_coeur","07_coeur","08_coeur","09_coeur","10_coeur","11_coeur","12_coeur","13_coeur",
			"01_pique","02_pique","03_pique","04_pique","05_pique","06_pique","07_pique","08_pique","09_pique","10_pique","11_pique","12_pique","13_pique",
			"01_trefle","02_trefle","03_trefle","04_trefle","05_trefle","06_trefle","07_trefle","08_trefle","09_trefle","10_trefle","11_trefle","12_trefle","13_trefle"];

/**
 * Ecrire le code JavaScript permettant d’afficher le « 4 de pique » ; l’id étant le nom de la carte 
 * c’est à dite le nom du fichier sans l’extension .gif :
	<img id="04_pique" src="cartes/04_pique.gif"/>
 */
// Création de l'élément img
let imgCarte = document.createElement('img');

// Attribution de l'ID correspondant à la carte
imgCarte.id = '04_pique';

// Spécification du chemin de l'image
imgCarte.src = 'cartes/04_pique.gif';

// Sélection de l'élément conteneur dans lequel vous souhaitez afficher la carte
let conteneurCartes = document.getElementById('cartes');

// Ajout de l'image au conteneur des cartes
conteneurCartes.appendChild(imgCarte);

function ajouterCarte(nomCarte) {
    // Création de l'élément img
    let imgCarte = document.createElement('img');
    // Attribution de l'ID correspondant à la carte
    imgCarte.id = nomCarte;
    // Spécification du chemin de l'image
    imgCarte.src = 'cartes/' + nomCarte + '.gif';
    // Sélection de l'élément conteneur dans lequel on souhaite afficher la carte
    let conteneurCartes = document.getElementById('cartes');
    // Ajout de l'image au conteneur des cartes
    conteneurCartes.appendChild(imgCarte);
}
ajouterCarte("08_carreau");

function retournerCarteVerso(nomCarte) {
    //On regarde si la carte existe en recherchant son élément img par son ID
    let carte = document.getElementById(nomCarte);
    if (carte) {
        // On vérifie si la carte n'est pas déjà retournée côté verso
        if (!carte.classList.contains('verso')) {
            // Changer le chemin de l'image pour afficher le verso
            carte.src = 'cartes/verso.gif';
            // On ajoute une classe pour indiquer que la carte est retournée côté verso
            carte.classList.add('verso');
        } else {
            console.log("La carte est déjà retournée côté verso.");
        }
    } else {
        console.log("La carte avec le nom " + nomCarte + " n'existe pas.");
    }
}
retournerCarteVerso("08_carreau");

function retournerCarteRecto(nomCarte) {
    // On vérifie si la carte existe en recherchant son élément img par son ID
    let carte = document.getElementById(nomCarte);
    if (carte) {
        // On vérifie si la carte est retournée côté verso
        if (carte.classList.contains('verso')) {
            // Changer le chemin de l'image pour afficher le recto
            carte.src = 'cartes/' + nomCarte + '.gif';
            // On enleve la classe qui indique que la carte est retournée côté verso
            carte.classList.remove('verso');
        } else {
            console.log("La carte est déjà retournée côté recto.");
        }
    } else {
        console.log("La carte avec le nom " + nomCarte + " n'existe pas.");
    }
}

retournerCarteRecto("08_carreau");

function carteHasard() {
    // Générer un index aléatoire pour choisir une carte du jeu
    let indexAleatoire = Math.floor(Math.random() * jeu.length);
    // Récupérer la carte correspondante à l'index aléatoire
    let carteAleatoire = jeu[indexAleatoire];
    return carteAleatoire;
}

function afficherCarte() {
    let carteAleatoire = carteHasard();

    // Créer un élément img pour afficher la carte
    let carteImg = document.createElement('img');
    carteImg.src = "cartes/" + carteAleatoire + ".gif";
    carteImg.alt = carteAleatoire;

    // Ajouter l'élément img à la div avec l'id "cartes" dans le HTML
    document.getElementById('cartes').appendChild(carteImg);
}

afficherCarte();
