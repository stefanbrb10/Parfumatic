a = 10;

function f(){
    alert(123);
    let a = 20;
    console.log(a);
    console.log(window.a);
}

f()
window.onload = function(){
document.getElementById("abc").innerHTML - "<b> altceva </b>" //va fi la grila
// am pus window onload pt ca la momentul executarii elementul cu id abc nu era creat
let v = document.getElementsByClassName("pgf")
console.log(v.length);
let buton = document.getElementsByTagName("button")[0];
buton.onclick = function(){
    document.getElementById("abc").style.backgroundColor = "red";
}
}