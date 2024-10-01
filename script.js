

let papier = function(){
    
    let p = document.getElementById("wybortwoj")
    let p1 = document.getElementById("wynik")
    p.innerHTML="<h1>Ty wybrałeś papier.</h1>"
    
   let i= losuj()
    if(i==0)p1.innerHTML="<h1>Wynik potyczki: Remis</h1>"
    else if (i==1)p1.innerHTML="<h1>Wynik potyczki: Wygrałeś</h1>"
    else p1.innerHTML="<h1>Wynik potyczki: Przegrałeś</h1>"
}
let kamien = function(){
    let p = document.getElementById("wybortwoj")
    let p1 = document.getElementById("wynik")
    p.innerHTML="<h1>Ty wybrałeś kamień.</h1>"
    let i = losuj()
    if(i==0) p1.innerHTML="<h1>Wynik potyczki: Przegrałeś</h1>"
    else if (i==1) p1.innerHTML="<h1>Wynik potyczki: Remis</h1>"
    else p1.innerHTML="<h1>Wynik potyczki: Wygrałeś</h1>"
} 
let nozyce = function(){
    let p = document.getElementById("wybortwoj")
    let p1 = document.getElementById("wynik")
    p.innerHTML="<h1>Ty wybrałeś nożyce.</h1>"
    let i = losuj()
    if(i==0) p1.innerHTML="<h1>Wynik potyczki: Wygrałeś</h1>"
    else if (i==1) p1.innerHTML="<h1>Wynik potyczki: Przegrałeś</h1>"
    else p1.innerHTML="<h1>Wynik potyczki: Remis</h1>" 
}
let losuj= function(){
    let i = Math.floor( Math.random() * 3)
    let p = document.getElementById("wyborbota")
    
    if (i == 0)p.innerHTML="<h1>Bot wybrał papier.</h1>"
    else if(i==1)p.innerHTML="<h1>Bot wybrał kamień.</h1>"
    else p.innerHTML="<h1>Bot wybrał nożyce.</h1>"
    return i;
}