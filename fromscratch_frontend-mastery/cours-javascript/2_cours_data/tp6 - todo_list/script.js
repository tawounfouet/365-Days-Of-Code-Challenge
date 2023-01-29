const form = document.querySelector('form')




//storage part
function storeList() {
    window.localStorage.todolist = list.innerHTML
}

// function getTodos() {
//     if (window.localStorage.todolist) {
//         list.innerHTML = window.localStorage.todoList
//     } else {
//         list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`
//     }
// }

function getTodos() {
    if (window.localStorage.todoList) {
      list.innerHTML = window.localStorage.todoList;
    } else {
      list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
    }
  }


window.addEventListener('load', getTodos())



// Add element
form.addEventListener("submit", (e) => {
    // console.log("test")
    e.preventDefault();
   
    // console.log(item.value)
    list.innerHTML += `<li>${item.value}</li>`;
    item.value = ""
    storeList()
})

// Remove element
list.addEventListener("click", (e) => {
    // console.log(e.target)
    // e.target.remove
    if (e.target.classList.contains("checked")) {
        e.target.remove()
    } else {
        e.target.classList.add("checked")
    }
    storeList()
})


