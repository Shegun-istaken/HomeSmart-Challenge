let labe = document.createElement("label");
labe.innerText = ("ENTER MESSAGE")
labe.setAttribute("for", "message")
let target = document.querySelector(".textar");
let textarea = document.querySelector("textarea")

textarea.addEventListener("input", function(e){
    target.append(labe);
})

textarea.addEventListener("keyup", function(e){
    if (textarea.value.length == 0 ){
        labe.remove();
    }
})

menu = document.querySelector(".menu");
ex = document.querySelector(".x");
topbar=document.querySelector(".topbar");

menu.addEventListener("click", function(e){
    topbar.classList.toggle("no-show")
})

ex.addEventListener("click", function(e){
    topbar.classList.toggle("no-show")
})
