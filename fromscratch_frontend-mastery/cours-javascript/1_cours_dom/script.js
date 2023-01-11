
//alert("Hello World")

// SELECTEURS
// document.querySelector('h4').style.background = "green";

/*
const baliseHTML = document.querySelector('h4');
console.log(baliseHTML)
baliseHTML.style.background = "green"
*/

// Click Event
const questionContainer = document.querySelector('.click-event');
//console.log(questionContainer);
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById('btn-2');
//console.log(btn1, btn2);
const  response = document.querySelector('p');
//console.log(response);


/*
questionContainer.style.borderRadius = "100px"
//questionContainer.addEventListener('évènement', function)

questionContainer.addEventListener('click', () => {
    console.log("Click !");
});

//questionContainer.style.background = "green"
*/

questionContainer.addEventListener('click', () => {
    //questionContainer.classList.add("question-clicked");
    //questionContainer.classList.remove("question-clicked");
    questionContainer.classList.toggle("question-clicked")
})



btn1.addEventListener("click", () => {
   // console.log("click on Button 1!")
   //response.style.visibility = "visible"
   response.classList.add('show-response')
   response.style.background = "green"
})

btn2.addEventListener('click', () => {
    //console.log('Bouton 2 Cliqué')
    //response.style.visibility = "visible"
    response.classList.add('show-response')
    response.style.background = "red"

})

/*
Ordre de priorité en CSS
<div style >   #id   >   .class   >   baliseHTML

!important veut-dire que ça passe en priorité
*/





// -------------------------------------------------------------------- //
// Mouve Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener('mousemove', (e) => {
     //console.log("MOUSEMOVE !!!!!")
     //console.log(e.target)
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    //console.log(e);
})

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -50%)";
    mousemove.style.border = "2px solid red";
})

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0, 0, 0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});

response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(3deg)"
})



//----------------------------------------------------------------------//
// Key Press

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key")
//console.log(key)

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    console.log(audio.src)
    audio.play();
    
}


document.addEventListener("keypress", (e) => {
    //console.log("Yess !!")
    //console.log(e)
    //console.log(e.key)
    //key.textContent = "Voici du texte"
    key.textContent = e.key

    if (e.key === "j") {
        keypressContainer.style.background = "pink";
    } else if (e.key === "h") {
        keypressContainer.style.background = "teal";
    } else {
        keypressContainer.style.background = "red";
    }

    if (e.key === "z") ring(e.key);
})




// ---------------------------------------------------------------------
// Scrol Event

const nav = document.querySelector("nav");
//console.log(nav)

window.addEventListener('scroll', () => {
    //console.log("Test !")
    console.log(window.scrollY)

    if (window.scrollY > 120) {
        nav.style.top = 0
    } else {
        nav.style.top = "-50px"
    }

})





// ------------------------------------------------------------------

 const inputName = document.querySelector('input[type="text"]')
 //console.log(inputName);
 const select = document.querySelector("select")

let  pseudo = "";
let language = "";

 inputName.addEventListener("input", (e) => {
    //console.log("ohhh yes");
    //console.log(e.target.value);
    pseudo = e.target.value;
    console.log(pseudo);
    
 })

 select.addEventListener("input", (e) => {
    //console.log(e)
    language = e.target.value
    console.log(language)
 })