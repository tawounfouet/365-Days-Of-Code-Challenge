
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
    //console.log(window.scrollY)

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
//console.log(inputName);
const form = document.querySelector("form")

let  pseudo = "";
let language = "";

 inputName.addEventListener("input", (e) => {
    //console.log("ohhh yes");
    //console.log(e.target.value);
    pseudo = e.target.value;
    //console.log(pseudo);
    
 })

 select.addEventListener("input", (e) => {
    //console.log(e)
    language = e.target.value
    //console.log(language)
 })

 form.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log("Le formulaire a été soumis")
    //console.log(cgv.checked);

    if (cgv.checked) {
        // Afficher le contenu des variables
        //document.querySelector('form > div').textContent
        document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage préféré : ${language}</h4>
        `;
    } else {
        alert("Veuillez accepter les CGV")
    }
 });





 // ----------------------------------------------------------------------
 // Load Event 
 window.addEventListener("load", () => {
    //console.log("Document Chargé !")
 })




 // ----------------------------------------------------------------------
 // ForEach 
 const boxes = document.getElementsByClassName("box")
 //console.log(boxes)

 /*
 boxes.addEventListener('click', () => console.log('test'))

-->  Uncaught TypeError: boxes.addEventListener is not a function
On ne peut pas ajouter un event listiner sur trois éléments à la fois 
 */

/*
boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        console.log(e.target)
    });
});
*/

boxesQuery = document.querySelectorAll(".box");
//console.log(boxesQuery);

boxesQuery.forEach((box) => {
    box.addEventListener('click', (e) => {
        //console.log(e.target)
        e.target.style.transform = "scale(0.7)";
    });
});


//---------------------------------------------------------------------
// addEventListener vs onClick
// document.body.onclick = function () {
//     console.log("Click !");
// };

// document.body.onscroll = () => {
//     console.log("Scroll !");
// };

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)
document.addEventListener("click", 
    () => {
        console.log("click 1")
    },
    false
);

// Usecapture -- Pour passer devant tous les évènements
document.addEventListener("click", 
    () => {
        console.log("click 2")
    },
    true
);

// Pour en savoir plus sur le 3e argument true/false
// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/#:~:text=That%20third%20argument%2C%20true%20%3F,That's%20called%20useCapture%20.



// ----------------------------------------------------------------------
// Stop propagation
questionContainer.addEventListener('click', (e) => {
    //alert("Test !");
    e.stopPropagation();

})

// removeEventListiner





// --------------------------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY)
// window.open("http://google.com", "cours js", height=600, width=800)
// window.close()

// confirm 
btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment vous tromper ?")
})


// prompt  
btn1.addEventListener("click", () => {
    //prompt("Entrez votre nom !");
    let answer = prompt("Entrez votre nom !");

    //questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>"
    questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>"
});

// setTimeout
setTimeout(() => {
    // logique à exécuter
    questionContainer.style.borderRadius = "300px"
}, 2000); 


// setIntervalle
let interval = setInterval(() => {
    document.body.innerHTML += `
        <div class='box> 
            <h2>Nouvelle Boite</h2>
        </div>
    `;
}, 1000);

document.body.addEventListener("click", () => {
    //e.target.remove(); // retirer un élément du DOM
    clearInterval(interval);
});


// Location
// console.log(location.href)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.search)
// location.replace("https://awf-fitness.com")

// window.onload = () {
//     location.href = "http://awf-fitness.com"
// }


// Navigator 
//console.log(navigator.userAgent);


// Geolocatisation 

//https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

/*
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);
  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
*/

console.log(window.history)
//window.history.back()
// history.go(-2)


// ---------------------------------------------------------------------
const after = document.querySelector('.nav::after');

console.log(after);


// ----------------------------------------------------------------------
// Set property
window.addEventListener("mousemove", (e) => {
    console.log(e)
    nav.style.setProperty("--x", e.layerX, + "px")
    nav.style.setProperty("--y", e.layerY, + "px")

})