// tady je místo pro náš program

let jmeno = prompt("Your name and surname:");
let vek = prompt("Your age:");

document.body.innerHTML = "Your name is " + jmeno + " and you are " + vek + " years old.";

let barva = prompt("What is your favourite colour?");

let body = document.querySelector('body')
body.style.color = barva;
