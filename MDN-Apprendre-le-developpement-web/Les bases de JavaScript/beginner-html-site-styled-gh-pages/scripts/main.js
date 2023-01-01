
// Un exemple « hello world »

let myHeading = document.querySelector('h1');
myHeading.textContent = "Bonjour tout le monde"

/*
 La raison pour laquelle nous avons placé l'élément <script> en bas du 
 fichier HTML est que le HTML est chargé par le navigateur dans l'ordre dans 
 lequel il apparaît dans le fichier. Si le JavaScript est chargé en premier 
 et qu'il est supposé affecter le HTML en dessous, il pourrait ne pas 
 fonctionner, car le JavaScript serait chargé avant le HTML sur lequel il 
 est supposé travailler. Par conséquent, placer JavaScript près du bas de la 
 page HTML est souvent la meilleure stratégie.
*/


// LES BASES DE JAVASCRIPT ACCELERE

/* Les Variables - Déclartion
Les variables sont des conteneurs dans lesquels on peut stocker des valeurs. 
Pour commencer, il faut déclarer une variable avec le mot-clé let
*/

let myVariable;
myVariable = "Bob";

let myVariableBis = "Bob"

let myVariableNew = 'Etienne';
myVariableNew = "Thomasa"


/* Les différentes types de variables 
Notez que les variables peuvent contenir des types différents de données : */

/* 
- Chaînes de charactères :
Une suite de caractères connue sous le nom de chaîne. Pour indiquer que
la valeur est une chaîne, il faut la placer entre guillemets "" ou ''. 
*/
let myString = 'Bob';
let firstName = "Thomas";

/*
- Nombre : Un nombre. Les nombres ne sont pas entre guillemets.
*/
let myNumber = 10;

/*
- Booléen  : Une valeur qui signifie vrai ou faux. true/false sont des 
mots-clés spéciaux en JS, ils n'ont pas besoin de guillemets..
*/
let myBoolean = true;
let otherBoolean = false;

/*
- Tableau : Une structure qui permet de stocker plusieurs valeurs dans
 une seule variable. Se Référer à chaque élément du tableau ainsi
  : myTable[0], myTable[1], etc.
*/
let myTable = [1, 'Bob', "Etienne", true, 10]

/*
- Objet : À la base de toute chose. Tout est un objet en JavaScript et
 peut être stocké dans une variable. Gardez cela en mémoire tout 
 au long de ce cours. Tous les exemples au dessus sont aussi des objets.
*/
let myObject = document.querySelector('h1')



// LES COMMENTAIRES
/* Il est possible d'intégrer des commentaires dans du code JavaScript, 
de la même manière que dans les CSS :
*/

/*
Tout ce qui est écrit ici est entre commentaires.
*/

// Voici un commentaire




// LES OPERTATEURS

/*
Addition :  + 
Soustraction : - 
multiplication, division :  *, /
Assignation : =
Égalité : ===
*/
6 + 9;
"Bonjour " + "monde !";

9 - 3;
8 * 2; // pour multiplier, on utilise un astérisque
9 / 3;

let myName = 'Thomas';

let myVar = 3;
myVar === 4 // Teste si deux valeurs sont égales et renvoie un booléen true/false comme résultat.

/* 
Négation , N'égale pas : !, !==
L'expression de base est vraie, mais la comparaison renvoie false parce que 
nous la nions : 
- let myVariable = 3; 
- !(myVariable === 3);

On teste ici que "myVariable n'est PAS égale à 3". Cela renvoie false, 
car elle est égale à 3.
let myVariable = 3;
myVariable !== 3;
*/
let myvar = 3
!(myvar === 3)  // Résulat Vraie
!(myvar !== 3)  // Résulta False



// STRUCTURE CONDITIONNELLES
/*Les structures conditionnelles sont des éléments du code qui permettent de 
tester si une expression est vraie ou non et d'exécuter des instructions 
différentes selon le résultat. La structure conditionnelle utilisée 
la plus fréquemment est if ... else. Par exemple :
*/
let iceCream = 'chocolat';
if (iceCream === 'chocolat') {
    alert("J'adore la glace au chocolat !");   
} else {
    alert("Ooooh, mais j'aurais préféré au chocolat.");
}
/*
L'expression contenue dans if ( ... ) correspond au test 
ci, on utilise l'opérateur d'égalité (décrit plus haut) pour comparer 
la variable iceCream avec la chaîne de caractères chocolat pour voir  si elles sont égales. 
- Si cette comparaison renvoie true, le premier bloc de code sera exécuté. 
- Sinon, le premier bloc est sauté et c'est le code du second bloc, celui présent après else, qui est exécuté.
*/



// LES FONCTIONS
/*
Les fonctions sont un moyen de compacter des fonctionnalités en vue 
de leur réutilisation.
Quand vous avez besoin de la procédure, vous pouvez appeler une fonction, 
par son nom, au lieu de ré‑écrire la totalité du code chaque fois.
Nous avons déjà utilisé des fonctions plus haut, par exemple :
*/
let myQuerySelector = document.querySelector('h1');
alert("Bonjour");

// Definition de notre propre function qui prend deux arguments et les multiplie
function multiply(num1, num2) {
    let result = num1 * num2
    return result
}
// Utlisation de la fonction defini
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
/*
L'instruction return indique au navigateur qu'il faut renvoyer la variable 
result en dehors de la fonction afin qu'elle puisse être réutilisée par 
ailleurs. Cette instruction est nécessaire car les variables définies à 
l'intérieur des fonctions sont uniquement disponibles à l'intérieur de ces 
fonctions. C'est ce qu'on appelle une portée 
*/



// LES EVENEMENTS 
/*
Pour qu'un site web soit vraiment interactif, vous aurez besoin d'événements.
Les événements sont des structures de code qui « écoutent » ce qui se passe dans 
le navigateur et déclenchent du code en réponse. Le meilleur exemple est l'événement cliquer, 
déclenché par le navigateur quand vous cliquez sur quelque chose avec la souris. 
À titre de démonstration, saisissez ces quelques lignes dans la console,
puis cliquez sur la page en cours
*/
document.querySelector('html').addEventListener('click', function()
{
    alert("Aie, arrêtez de cliquer !!");
});

/*Il existe plein de méthodes pour « attacher » un événement à un élément. 
Dans cet exemple, nous avons sélectionné l'élément HTML concerné et nous
avons défini un gestionnaire onclick qui est une propriété qui est égale à 
une fonction anonyme (sans nom) qui contient le code à exécuter quand 
l'utilisateur clique.
*/
// On pourra noter que :
document.querySelector('html').addEventListener('click', function() 
{});
// est équivalent à :
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {});
// La première syntaxe est simplement plus courte.


// BOOSTER NOTRE SITE WEB
/*
Maintenant que nous avons vu quelques bases en JavaScript, nous allons ajouter 
quelques fonctionnalités intéressantes à notre site pour voir ce qu'il est 
possible de faire.
*/

// Ajouter un changeur d'image
let myImage = document.querySelector('img')

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/Firefox_Nightly_logo.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});


// Ajouter un message d'accueil personnalisé
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
/*
Ajoutons maintenant les fonctionnalités pour avoir ce message d'accueil personnalisé
*/
function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName)
    myHeading.textContent = 'Mozilla est cool, ' + myName;
}
/*
Ajoutons ensuite ce bloc if ... else. Ce code correspond à l'étape d'initialisation
car il sera utilisé la première fois que la page est chargée par
l'utilisateur :
*/
if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = "Mozilla est cool, " + storedName;
}
/*
Enfin, on associe le gestionnaire onclick au bouton. De cette façon, 
quand on clique sur le bouton, cela déclenchera l'exécution de la fonction 
setUserName(). Ce bouton permet à l'utilisateur de modifier 
la valeur s'il le souhaite:
*/
myButton.addEventListener('click', function() {
    setUserName();
});