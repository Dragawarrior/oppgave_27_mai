const inputName = document.getElementById("enterName")
const button = document.getElementById("button")
const output = document.getElementById("output")
button.addEventListener("click", ()=>{
    if (!inputName.value) {
        output.innerHTML = `Please enter a name`;
    } else {
        output.innerHTML = `Hello ${inputName.value}`
    }
})