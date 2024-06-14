const form = document.getElementById("radiobuttons");
const output = document.getElementById("output");
const colorbox = document.getElementById("colorbox");
const color = ["cl-red","cl-blue","cl-yellow"];

form.addEventListener("change", ()=> {
    const selectedRadio = form.elements["choose-color"];
    colorbox.classList.remove("cl-red","cl-yellow","cl-blue");
    colorbox.classList.add(`cl-${selectedRadio.value}`);
    output.innerHTML = `You have chosen ${selectedRadio.value}`;
})