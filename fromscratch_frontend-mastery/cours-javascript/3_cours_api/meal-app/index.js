
const result = document.getElementById("result")
const form = document.querySelector('form')
const input = document.querySelector("input")
let meals = []

console.log(input)


async function fetchMeals(search) {
    await fetch("https://themealdb.com/api/json/v1/1/search.php?s="+ search)
        // .then((res) => console.log(res))
        .then((res) => res.json())
        // .then((data) => console.log(data.meals[0]))
        .then((data) => (meals = data.meals))
    
    console.log(meals)
    }

function mealsDisplay() {
    if (meals === null) {
        result.innerHTML = "<h2>Aucun résultat</h2>"
    } else {
        meals.length = 12
 
    result.innerHTML = meals.map(
        (meal) => {
            let ingredients = []

            for (i = 1; i < 21; i++ ) {
                if (meal[`strIngredient${i}`]) {
                    // console.log("true !")
                    let ingredient = meal[`strIngredient${i}`]
                    let mesure = meal[`strMeasure${i}`]

                    // console.log(ingredient + " - " + mesure)
                    // ingredients.push(ingredient + " - " + mesure)
                    ingredients.push(`<li>${ingredient} - ${mesure}</li>`)
                }
            }

            console.log(ingredients)

            return`
                <li class='card'> 
                    <h2> ${meal.strMeal}</h2>
                    <p>${meal.strArea}</p>
                    <img src=${meal.strMealThumb} alt="photo de ${meal.strMeal}
                    <ul>${ingredients.join("")}</ul>
                    
                </li>`
            }

    ).join("")
    }
}

input.addEventListener("input", (e) => {
//    console.log(e.target.value)
    fetchMeals(e.target.value)
    .then(() => mealsDisplay())
})



form.addEventListener('submit', (e) => {
    e.preventDefault()
    // fetchMeals().then(() => mealsDisplay())
    mealsDisplay()
})



