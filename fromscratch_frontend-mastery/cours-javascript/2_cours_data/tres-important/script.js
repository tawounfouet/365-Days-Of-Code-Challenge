
// IMPORTANT - Méthodes Très Utilisés

// Méthod reduce 
let array_number = [4, 75, 28, 12, 1]
console.log(array_number)
console.log(array_number.reduce((x, y) => x + y))


// Méthode Push
array_number.push("Coucou")
array_number.push(17)
console.log(array_number)


// FILTER, SORT, MAP  : 01h50

console.log(array_number.filter((number) => number > 10))


console.log(array_number.sort())
console.log(array_number.sort((a, b) => b - a))
console.log(array_number.sort((a, b) => a - b))


console.log(array_number.filter((number) => number > 10).sort(
    (a, b) => a - b
))


// MAP 

array_number.map((number) => console.log(number))

array_number.map((number) => (document.body.innerHTML += `<li> ${number} <li>`))

document.body.innerHTML = array_number
    .map((number) => `<li> ${number} </li>`)
    .join("")