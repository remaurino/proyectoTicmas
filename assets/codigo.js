    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector("header nav");
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const skillsList = document.getElementById("skills-list")
    const btnSkl = document.getElementsByClassName("button-skl");

     menuBtn.addEventListener("click", (event) =>{
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");
        main.classList.toggle("blur");
    })

     document.getElementById("nav-list").onclick = function(){
         nav.classList.remove("visible");
         main.classList.remove("blur")
    }

    document.getElementById("button").onclick = function(){
        document.getElementById("button-p").innerHTML = "Gracias por tu comentario"
    }

    console.log("hola");
