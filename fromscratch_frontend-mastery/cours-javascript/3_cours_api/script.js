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

setTimeout(() => {
    console.log("test") // "test" va etre appele 2s aprs l'excution du console
}, 2000)

// Promise 
fetch("monlien").then((res) => res) 
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