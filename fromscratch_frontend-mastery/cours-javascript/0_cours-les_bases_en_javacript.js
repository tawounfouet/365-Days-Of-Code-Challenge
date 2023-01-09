/*
0:00 - Intro 
1:45 - Qu'est-ce que JavaScript 
5:54 - Popularité de JS
9:52 - Où s'écrit le JS
19:45 - La syntaxe 
27:45 - Les variables 
36:53 - La concaténation 
41:24 - Les types de données  
46:51 - Les opérateurs / opérateurs d'affectation
53:23 - Les structures de contrôle 
1:02:27 - Les fonctions 
1:12:15 - La portée des variables
*/


// Afficher les données
alert("Yo !");
console.log(document.body);
document.body.textContent = "Cours Javascript";
document.body.innerHTML += "<h1>Cours Javascript</h1>";

//--------------------------------------
// Variables
var maVieilleVariable = "Coucou je suis un vielle variable";

// Const = valeur immuable
const prenom = "julien";

// Let = peut évoluer au fil du code
let cours = "Ceci est un cours blbalblabalbalabalbal";
cours = "test";

//------------------------------------
// Fonction classique
function faireQuelqueChose() {
  console.log("Je fais un quelque chose");
}

faireQuelqueChose();

function addition(a, b) {
  console.log(a + b);
}
addition(21, 484885);

// Struture des fonctions de base
function nomFonction() {
  // Algo des choses à faire
}

const nomDeLaFonction = () => {
  // Algo des choses à faire
};

//--------------------------------------
// Les événements

const maBalise = document.querySelector(".maBalise");

maBalise.addEventListener("type d'événement", fonction);

maBalise.addEventListener("click", () => {
  // La fonction s'éxecute au click sur la balise
});

//--------------------------------------
// Les structures contrôles

if (maVariable > 200) {
  // Valeur si vrai
} else {
  // Valeur si faux
}

for (let i = 0; i < tableau.length; i++) {
  // Algo des choses à effectuer à chaque tour de boucle
}
Footer
