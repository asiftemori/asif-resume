const toggleButton = document.getElementById("toggle-edu") as HTMLButtonElement
const edu= document.getElementById("education") as HTMLElement

toggleButton.addEventListener("click",()=>{
    if (edu.style.display ==="none") {
        edu.style.display = "block"
    }else{
        edu.style.display = "none"
    }
});