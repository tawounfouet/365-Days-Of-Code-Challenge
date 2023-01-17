console.log("My User App\n")

lienApi = "https://randomuser.me/api/?results=24"

// fetch(lienApi).then((res) => console.log(res))

// fetch(lienApi)
//     .then((res) => res.json()
//     .then((data) => console.log(data))
// )


let userData 

// 1ere Méthode  - Asychrone avec setTimeout
const fetchUser1 = () => {
    fetch(lienApi)
        .then((res) => res.json())
        // .then((data) => console.log(data.results)))
        .then((data) => (userData = data.results))
    

    // console.log(userData) n'affiche car fetch n'a pas encore eu le temps récuperer les infos 

    setTimeout(() => {
        console.log(userData)
    }, 2000)
  
}
// fetchUser1()

// 2eme Méthode  - Asychrone avec async away
const fetchUser = async () => {
    await fetch(lienApi)
        .then((res) => res.json())
        .then((data) => (userData = data.results))
    
    console.log(userData)
}

const userDisplay = () => {
    fetchUser()

    document.body.innerHTML = userData.map((user) => {
        `
            <h3> ${user.name.first}</h3>
        
        
        `
    })
}

userDisplay()


