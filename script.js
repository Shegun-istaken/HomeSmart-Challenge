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