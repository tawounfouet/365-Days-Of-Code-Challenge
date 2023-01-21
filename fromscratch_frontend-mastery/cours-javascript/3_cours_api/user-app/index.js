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

const userDisplay = async () => {
    await fetchUser()

    const dateParser = (date) => {
        let newDate = Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        return newDate
    };
    // <p> ${user.location.city}, ${dateParser(user.dob.date)}</p>

    const dayCalc = (date) => {
        let today = new Date()
        let todayTimestamp = Date.parse(today)
        let timestamp = Date.parse(date)

        return Math.ceil((todayTimestamp - timestamp) / 8.864e7)
    }



    document.body.innerHTML = userData
        .map((user) => 
                `
                <div class="card">
                    <img src=${user.picture.large} alt="photo de ${user.name.last}">
                    <h3> ${user.name.first} ${user.name.last}</h3>
                    <p> ${user.location.city} ${user.location.postcode}, ${(user.location.country)}</p>
                    <em>Membre depuis : ${dayCalc(user.registered.date)} jours</em>
                </div>
                `
            )
        .join("")
}

userDisplay()


