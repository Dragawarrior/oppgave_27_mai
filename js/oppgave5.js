const button = document.getElementById("button")
const list = document.getElementById("list")

button.addEventListener("click", ()=>{
    const input = document.querySelectorAll('input [type="checkbox"]');
    console.log("Click");
    list.innerHTML = "";
    input.forEach((input) => {
        if (input.checked){
            const newLi = document.createElement("li");
            newLi.textContent = input.value;
            list.appendChild(newLi);
        } else {
            //console.log (`${input.value} has not been selected`)
        }
    })
})