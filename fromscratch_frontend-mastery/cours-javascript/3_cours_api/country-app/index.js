
// alert("Hello Wirld")

const countriesContainter = document.querySelector('.contries-container')
let countriesData = [];

//console.log(countriesContainter)

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
    countriesContainter.innerHTML = countriesData.map((country) =>
    
        `
        <div class="card">
            <h2>${country.translations.fra.common}</h2>
        </div>
        ` 
    )

}


window.addEventListener("load", fetchCountries)