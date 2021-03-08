"use strict";

const theShow = document.querySelector(".text") ;
let textC = document.querySelector("#cooltext").textContent.split("") ;
const iteration = textC.length ;
let prog = 0 ;
document.querySelector("#cooltext").textContent = "" ;
init();

function init () {
    console.log("brt");
    console.log(textC);
    
    console.log("brt the loop starts");
    textC.forEach(loop);

}

function loop ( letterr ) {
    var newSpan = document.createElement("span");
    console.log(prog);
    newSpan.textContent = textC[prog] ;
    
    newSpan.classList.add("letter");
    const delay = 0.1 * prog ;
    newSpan.style.setProperty("--delay",delay);
    if (letterr === " "){
        newSpan.style.width = ("1vw");
    }
    theShow.appendChild(newSpan);
    prog += 1 ;
    




}