console.log('hola');

// const menuBtn = document.querySelector("menu");
// const navbar = document.querySelector("nav");

//      menuBtn = addEventListener("click", () => {
//      nav.classList.add("visible");
//     //  menuBtn.classList.toggle("salir");
//  })

//  menuBtn.classList.toggle("salir");




    window.addEventListener("DOMContentLoaded", (event) => {
       const menuBtn = document.getElementById("menu");
       const nav = document.querySelector("header nav");
       const body = document.querySelector("body");

       menuBtn.addEventListener("click", (event) =>{
         nav.classList.remove("hidden") || nav.classList.toggle("visible");
         body.classList.toggle("no-scroll");
       })
 
       nav.addEventListener("click", () => {
         nav.classList.toggle("hidden");
       }) 
  } )









