const button = document.getElementById("button")
const body = document.querySelector("body")

button.addEventListener("click", ()=> {
    const r = document.getElementById("r").value;
    const g = document.getElementById("g").value;
    const b = document.getElementById("b").value;
    console.log(r, g, b);
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
})