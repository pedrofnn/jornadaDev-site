const menuIcon = document.getElementById("menu_icon");
const navBar = document.querySelector("nav");
menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("visible")
});
const form = document.querySelector("form");
if(form){
    const allInputs = form.querySelectorAll(".input-underline");
    const allLabels = form.querySelectorAll(".input-underline ~ label");
    Array.from(allInputs).forEach((e, id) => {
        if(e.value){
            allLabels[id].classList.add("input-focus")
        }
        e.addEventListener("focusout", ()=>{ 
            if(e.value){
                allLabels[id].classList.add("input-focus")
            } else{
                allLabels[id].classList.remove("input-focus")
            }
        });
    });
}