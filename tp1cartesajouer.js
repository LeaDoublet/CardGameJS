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
