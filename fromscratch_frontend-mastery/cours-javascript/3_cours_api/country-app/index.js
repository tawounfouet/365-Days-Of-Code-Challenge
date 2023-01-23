
// alert("Hello Wirld")

const countriesContainter = document.querySelector('.countries-container') 
const btnSort = document.querySelectorAll(".btnSort")
let countriesData = [];                              
let sortMethod = "alpha";


console.log(btnSort)

console.log(countriesContainter)

async function fetchCountries() {
    await fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => countriesData = data)

    console.log(countriesData)
    countriesDisplay()

}
// fetchCountries()

function countriesDisplay() {
    countriesContainter.innerHTML = countriesData
    .filter((country) => 
        country.translations.fra.common.toLowerCase()
                                       .includes(inputSearch.value.toLowerCase()))
    .sort((a,b) => {
        if (sortMethod === "maxToMin") {
            return b.population - a.population
        } else if (sortMethod === "minToMax") {
            return a.population - b.population
        } else if (sortMethod === "alpha") {
            return a.translations.fra.common.localeCompare(b.translations.fra.common)
            
        }

    })
    .slice(0,inputRange.value)
    .map((country) =>
        `
        <div class="card">
            <img src=${country.flags.svg} alt="drapeau ${country.translations.fra.common}">
            <h2>${country.translations.fra.common}</h2>
            <h4>${country.capital}</h4>
            <p>${country.population.toLocaleString()}<p/>
        </div>
        ` 
    ).join("")

}


window.addEventListener("load", fetchCountries)
inputSearch.addEventListener("input", countriesDisplay)
inputRange.addEventListener('input', () => {
    countriesDisplay()
    rangeValue.textContent = inputRange.value
})

btnSort.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // console.log(e.target.id)
        sortMethod = e.target.id
        countriesDisplay()
    })
})