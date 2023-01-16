// Rapple des type de données

let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux 
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0])
// console.log(array[Ø][3])

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
console.log(array2[4].nom)

let object = {
    pseudo: "Thomas",
    age: 27,
    technos: ["Javascript", "React", "NodJs", "Django"],
    admin: false,
}
// console.log(object)
// console.log(object.age)


// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
    {
      pseudo: "Denis",
      age: 33,
      technos: ["Javascript", "React", "NodeJs"],
      admin: false,
    },
    {
      pseudo: "Samia",
      age: 24,
      technos: ["CSS", "React", "NodeJs"],
      admin: false,
    },
    {
      pseudo: "Nikola",
      age: 42,
      technos: ["Php", "React", "NodeJs"],
      admin: true,
    },
  ];
//   console.log(data);
  

  //---------------------------
  // Les structures de controle
  //---------------------------

  // if else
if (data[0].age > data[1].age) {
    // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
    // valeur si faux
}
  
// if (valeur à tester) valeur si vrai

// Ternaire 
// valeur à tester ? si vrai : si faux

// While
let w = 0;
 
while (w < 10) {
    w++;
    console.log("La valeur de w est de de : " +w);
}
// console.log("\nDo while")

// Do while
let d = 0;

do {
    d++;
    console.log(d);   
} while (d < 5)

console.log("\nLes boucles For")
// Les boucles for 
for (const user of data) {
    document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
}

//console.log(data.length)
// on déclare la valeur de i / jusqu'ou on boucles /  on incremente i la condition 2 n'est oas remplie
for (i=0; i < data.length; i++) {
    console.log(i);
    console.log(data[i].technos)
    //document.body.innerHTML += "<h2>" + data[i].technos.join(" / ") + "</h2>";
}


console.log("\nLe Switch")
document.body.addEventListener('click', (e) => {
    console.log(e.target);

    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "red";
            break;
        case "python":
            document.body.style.background = "green";
            break;
        default:
            null;
    }
});

console.log("\n// Méthode String")
// Méthode String
let string2 = "Javascript est un language orienté objet"

console.log(typeof string2)
console.log(eval(parseInt("1") + 2));
console.log(typeof "42")
console.log(typeof parseInt("42"))
console.log(isNaN(string2));
console.log(isNaN(42));
console.log(isNaN("42"));



// Méthode Arrays - 01h30 

let array3 = ["Javacript", "PHP", "Python"]
let array4 = ["Ruby", "Go", "Scala"]

// --> Les spreads opérator
let newArray = [...array3, ...array4]
console.log(newArray)



// --> IMPORTANT //

// reduce :  fait des opérations des éléments de notre liste (addition dans le cas espece)
let arrayNumber = [4, 74, 28, 12, 1]
console.log(arrayNumber.reduce((x, y) => x + y))

// FILTER, SORT, MAP  : 01h50




// Méthodes Objets 02h02min







//---------------
// Les Dates en JS - 02h49min
//---------------

// Date classique
let date = new Date()
console.log(date)

// Timestamp 
let timestamp = Date.parse(date)
console.log(timestamp)

// IsoString 
let iso = date.toISOString()
console.log(date.toISOString());

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric"
    })
    return newDate
}

console.log(dateParser(date))



//-------------------------------
// Destructuring en JS - 02h59min
//-------------------------------
console.log("\nDESTRUCTURING")

let moreData = {
    destVar: ["Element 1", "Element 2"]
};
console.log(moreData.destVar[0])

const { destVar } = moreData
// console.log(destVar)
// console.log(moreData.destVar)

let array5 = [70, 80, 90];
console.log(array5[0])
console.log(array5[1])
console.log(array5[2])

let [x, y, z] = array5
console.log(x)
console.log(y)
console.log(z)
console.log("\n")

console.log(iso);
const dateDestructuring = (chaine) => {
    let newDate = chaine.split("T")[0]
    let [y, m, d]= newDate.split("-")
    return [d, m, y].join("/");
    // console.log(newDate)
}
console.log(dateDestructuring(iso))



//-------------------------------
// Les Datasets en JS - 03h12min
//-------------------------------
console.log("\nLES DATASETS")

const h3js = document.getElementById('javascript');
console.log(h3js);
console.log(h3js.id)
console.log(h3js.dataset)

const h3 = document.querySelectorAll("h3");

h3.forEach((language) => console.log(language.dataset.lang))


//-------------------------------
// Les REGEX - 03h16min
//-------------------------------
console.log("\nLES REGEX")

let mail = "from_scratch42@gmail.com"
console.log(mail.search(/from/))  /* ici on demande à la regex de trouver l'expression /  / dans la variable mail :  0 si trouve et -1 si rien trouvé  */
console.log(mail.search(/sdada/))

console.log(mail.replace(/from/, "de")) // Chercher un mot et le remplacer


console.log(mail.match(/Scratch/))
console.log(mail.match(/Scratch/i)) // avec le i on est plus sensible à la case (case_sen)
console.log(mail.match(/[zug]/))
console.log(mail.match(/[123]/))

// Chercher Tous les chiffres 
console.log(mail.match(/\d/))

// Matcher toutes les lettres 
console.log(mail.match(/[a-z]/))

// Controler un mail
console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i))

let separator = 26524849

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))