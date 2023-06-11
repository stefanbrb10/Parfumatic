window.addEventListener("DOMContentLoaded", function(){
    let tema = localStorage.getItem("tema");
    if(tema)
        document.body.classList.add("dark");
        
    document.getElementById("tema").onclick = function(){
        if(document.body.classList.contains("dark")){
            document.body.classList.remove("dark");
            localStorage.removeItem("tema");
        }
        else{
            document.body.classList.add("dark");
            localStorage.setItem("tema", "dark");
        }
    }
});