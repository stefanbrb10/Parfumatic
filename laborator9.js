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
    document.getElementById("adauga").onclick = function(){
        var p = document.createElement("p");
        p.innerHTML = "ceva";
        document.body.appendChild(p);
        //document.body.insertBefore(p, document.getElementById("adauga"));
        //document.body.appendChild(document.getElementById("de_mutat"));
    }
    document.getElementById("sterge").onclick = function(){
        let paragrafe = document.getElementsByTagName("p");
        if(paragrafe.length){
            let ultimul = paragrafe[paragrafe.length - 1];
            ultimul.remove();
        }
    }
}