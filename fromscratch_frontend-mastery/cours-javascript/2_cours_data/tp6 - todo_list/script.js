const form = document.querySelector('form')

// Add element
form.addEventListener("submit", (e) => {
    // console.log("test")
    e.preventDefault();
   
    // console.log(item.value)
    list.innerHTML += `<li>${item.value}</li>`;
    item.value = ""
})

list.addEventListener("click", (e) => {
    // console.log(e.target)
    // e.target.remove
    if (e.target.classList.contains("checked")) {
        e.target.remove()
    } else {
        e.target.classList.add("checked")
    }
})

