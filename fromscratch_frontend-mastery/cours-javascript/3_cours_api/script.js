console.log("Hello World\n")

//------------
// XMLHttpRequest
//------------

function reqListener() {
    console.log(this.responseText)
}

let req = new XMLHttpRequest()
req.onload = reqListener
// req.open('get', 'data.txt', true)
// req.open('get', 'data.json', true)

//req.open('get', "https://api.blablagues.net/?rub=blagues", true)
//req.send()


// Code de reponse Http : https://developer.mozilla.org/fr/docs/Web/HTTP/Status#:~:text=Les%20r%C3%A9ponses%20de%20succ%C3%A8s%20(%20200,serveur%20(%20500%20%2D%20599%20). 


//-------------
// FETCH 
//------------
// Theorie 
// fetch('monlien', "object d'options").then((response) => {
//     // console.log(response)
// }).catch((err) => console.log(err));

// fetch('data.txt').then((res) => console.log(res))
fetch('data.txt')
    .then((res) => res.text())
    // .then((data) => console.log(data))

// fetch('data.json').then((res) => console.log(res))
fetch("data.json")
    .then((res) => res.json())
    // .then((data) => console.log(data))

// fetch("https://facebook.com").then((res) => console.log(res))



const myHeaders = new Headers

const init = {
    method: "GET",
    headers : myHeaders,
    mode : "cors", // c'est cors qui gère les autorisation de requet
    cache : "default"
}

// fetch('data.json', init).then((res) => console.log(res))


//-------------------------------------------------
// CRUD => Create (POST), read (GET), update (PUT), Delete
const init2 = {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        pseudo: "thomson",
        age : 28,
        // message: "Yo le 2.0",
    }),
    mode: "cors",
    credentials: "same-origin" 
};

// fetch(' http://localhost:3000/posts', init2).then(() => 
//     console.log("data envoyée")
// )

// Mettre la requete dans une fonction pour éviter de le faire plusieurs fois
document.querySelector('form').addEventListener('submit', () => {
    fetch(' http://localhost:3000/users/', init2).then(() => 
    console.log("data envoyée")
)
})



//-------------
// Asynchrone 
//-------------
// La facon la plus primaire de faire l'asynchrone c'est d'utiliser la méthode .setTimeout()

// setTimeout(() => {
//     console.log("test") // "test" va etre appele 2s aprs l'excution du console
// }, 2000)

// Promise 
// fetch("monlien").then((res) => res) 
/* cela veut dire que le bout de code
-  .then((res) => res) : ne sera exécuté que lorsque
-  fetch("monlien") : on aura un retour de donné de fetch
*/

// async/await
async function fetchData() {
    await fetch('monlien')
    // attend que le await soit exécuté avant de faire la suite

    executeFonction()
}

const fetchData2 = async () => {
    await fetch('monlien')
    // attend que le await soit exécuté avant de faire la suite
    
    executeFonction()
}

//-------------
// LE JSON 
//-------------
console.log("\nLe JSON\n")

// Méthode .json() => méthode qui s'auto-résout en renvoyant le Body de la requête.
fetch("data.json") 
   // .then((res) => console.log(res)
    .then((res) => res.json())
    .then((data) => {
        //console.log(data)
        // console.log(JSON.stringify(data)) 
        let settings = JSON.stringify(data) // Stringify : converty en JSON
        console.log(JSON.parse(settings))  // Parse => transforme json en objet js 
    });



//------------
// Web API
//------------

// CLIENT STORAGE
//---------------
/*
-> Local Storage vs Cookies

Le local storage est a distingué des cookies. 
Les deux sont des choses que le stocke (ou qui transite) sur le navigateur. Il faut savoir que la capacité de stockage du local storage est bcp plus importante que les cookies:
- Cookies : 4 Ko en capacité de stockage et stockes des petites informations, 
            des chaines de charactères qui ne sont pas très longes
- Local Storage : 10 Mo en réglage par défaut pour chrome et firefox. Ici les
            données ne transite pas avec la personne qui a fait le site. Uniquement stocké coté client et pas en Back. Il es bcp utilisé pour le mode nuit
*/
// Local Storage
console.log("\nLe Local Storage\n")
localStorage.data = "Je stocke la data "

// console.log(localStorage.data)
// document.body.textContent = localStorage.data 

localStorage.removeItem("data")

// localStorage.user = "Thomas"

const obj = {
    name: "Denis",
    age: 22,
}

// Il faut passer des chaines de caractères
localStorage.user = JSON.stringify(obj)
console.log(JSON.parse(localStorage.user))


// Session Storage
console.log("\nLe Session Storage\n")
sessionStorage.dataSettings = "55px"
console.log(sessionStorage.dataSettings)
sessionStorage.clear()


// Les Cookies
document.cookie = "username=FromScratch"

// Bonne Pratique sur les cookies
document.cookie = "pseudo=FS;path=/;max-age=450000; expires=Thu, 31 Dec 2099 23:59:59 secure; samesite"
