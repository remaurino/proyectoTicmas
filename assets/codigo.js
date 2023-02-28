    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector("header nav");
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const button = document.getElementsByClassName("button");


     menuBtn.addEventListener("click", (event) =>{
        nav.classList.toggle("visible");
        body.classList.toggle("no-scroll");
        main.classList.toggle("blur");
    })

  
  
    document.getElementById("button").onclick = function(){
       document.getElementById("button-p").innerHTML = "Gracias por tu comentario"
   }

