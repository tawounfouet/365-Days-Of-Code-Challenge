

const header = document.getElementById('header')
const content = document.getElementById("content")

// console.log(header, content)

fetch("https://api.blablagues.net/?rub=blagues")
// .then((res) =>  console.log(res)
.then((res) => res.json())
// .then((data) => console.log(data))
// .then((data) => console.log(data.data.content.text_head))
// .then((data) => document.body.textContent = data.data.content.text_head)
// .then((data) => (header.textContent = data.data.content.text_head))
/*
.then((data) => {
    console.log(data.data.content)

    header.textContent = data.data.content.text_head
    content.textContent = 
        data.data.content.text !== ""
            ? data.data.content.text
            : data.data.content.text_hidden
    
})
*/


function getJoke() {
    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
        const joke = data.data.content
        console.log(joke)
        header.textContent = joke.text_head
        content.textContent = joke.text !== ""  
                                 ? joke.text 
                                 : joke.text_hidden;
                            
    });
}



getJoke();

document.body.addEventListener('click', getJoke)