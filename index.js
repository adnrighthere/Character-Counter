const textareaEl = document.getElementById("textarea")
const totalEl = document.getElementById("total-counter")
const remainingEl =  document.getElementById("remaining-counter")

// keyup fires this function on every keypress
textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

// calling this function to set default values to 0
updateCounter()

function updateCounter(){
    totalEl.innerText = textareaEl.value.length
    remainingEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
}