
//--------------------------------------------------------
// Intro et Rappels des Objets en JavaScript
//--------------------------------------------------------

const obj = {
    // index : value
    pseudo: "From Scratch",
    ville: "Bordeaux",
    admin: false,

    // direBonjour() {
    //     console.log("Bonjour je suis " + this.pseudo)
    // }

    direBonjour: function() {
        console.log("Bonjour je suis " + this.pseudo)
    }

}
console.log(obj)
console.log(typeof obj)

let array = [1, 2, 3]
console.log(array)

console.log(document.body)
console.log(typeof document.body)


console.log(typeof null)

// Ajouter
obj.age = 24 
console.log(obj)

// Supprimer
delete obj.ville
console.log(obj)

// Modifier
obj.pseudo = "Thomson"
console.log(obj)

// Checker si propriété existe
console.log("pseudo" in obj)
console.log("ville" in obj)

// Parcourir l'objet
for (const key in obj) {
    //console.log(key)
    //console.log(obj[key])
    // console.log(key + ' : ' + obj[key])
}
console.log(obj.direBonjour())




//--------------------------------------------------------
// 18:08 - Les méthodes des objets en JS
//--------------------------------------------------------
console.log("\nLes Méthode des objets")
console.log(obj)

// Obtenir les clés
const keys = Object.keys(obj)
console.log(keys)

// Obtenir les valeurs
const values = Object.values(obj)
console.log(values)

const nestedArray = Object.entries(obj)
console.log(nestedArray)

const obj2 = {
    taille: "1m80",
    poids: "75kg"
}

// Fusionner objects
const fusion = Object.assign({}, obj, obj2)
console.log(fusion)

// Empecher les modifications 
//const newObj = Object.freeze(obj)
const newObj = Object.seal(obj)
newObj.pseudo = "Test"
newObj.adresse = "29 avenue du code"
console.log(newObj)


//------------------------------------------------------------------------
// 27:30 - Les différents constructeurs d'objets --> Construire des objets
//-----------------------------------------------------------------------

//-----------------------
// Funtion constructeur
function User(pseudo, ville) {
    this.pseudo = pseudo
    this.ville = ville

    this.getcity = function () {
        console.log(this.pseudo + " habite à " + this.ville)
    }
}
console.log(User)

const user1 = new User("Thomson", "Montreuil")
const user2 = new User("Denis", "Nantes")
console.log(user1, user2)

console.log(user1.getcity())

//-----------------------
// Factory functions
function User3(pseudo, ville) {
    return {
        pseudo,
        ville
    }
}
const user4 = User3('FS', "nice")
console.log(user4)


//--------------------------
// Class

class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo
        this.ville = ville
    }
    // Ajouter les méthodes à notre class
    sayMyName = function() {
        console.log("Bonjour je suis " + this.pseudo)
    }
}


//------------------------------------------------------------------------
// 38:20 - Les prototypes
//-----------------------------------------------------------------------
console.log("\n Les Prototypes en JS")
const user5 = new Utilisateur("Samia", "Lyon")

Utilisateur.prototype.sayCity = function () {
    console.log("J'habite à " + this.ville)
}
console.log(user5)

let array2 = [1, 2, 4]
console.log(array2) 
console.log(array2.filter) 

Object.assign(Utilisateur.prototype, {
    method1(){
        // Ma méthode
    },
    methode2(){
        // Ma méthode
    }
})

console.log(user5)



//------------------------------------------------------------------------
// 49:28 - L'héritage 
//-----------------------------------------------------------------------
console.log("\n L'Heritage en JS")
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    saySomething(text) {
        console.log(this.name + " dit : " + text)
    }
}

class Dog extends Animal {
    run() {
        console.log("Le chien court !")
    }
}

class Cat extends Animal {
    hunt() {
        console.log("J'ai tué un oiseau")
    }
}


const bingo = new Dog("Bingo", 5)
console.log(bingo)

const miao = new Cat("Minou", 2)
console.log(miao)