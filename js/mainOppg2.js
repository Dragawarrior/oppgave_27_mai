const calcDropdown = document.getElementById("calculator_dropdown")
const button = document.getElementById("button")
const output = document.getElementById("output")
const math = document.getElementById("math")

calcDropdown.addEventListener("change", ()=>{
    if (calcDropdown.value == "add"){
        math.innerHTML = " + ";
    } else if (calcDropdown.value == "subtract"){
        math.innerHTML = " - ";
    } else if (calcDropdown.value == "multiply"){
        math.innerHTML = " * ";
    } else if (calcDropdown.value == "divide"){
        math.innerHTML = " / ";
    } else {
        console.log("Error")
    }
})

function results(x){
    output.innerHTML = x ;
};

button.addEventListener("click", ()=>{
    const num1 = Number(document.getElementById("number_1").value);
    const num2 = Number(document.getElementById("number_2").value);
    let result;

    if (calcDropdown.value == "add"){
        result = num1 + num2;
        results(result);
    } else if (calcDropdown.value == "subtract"){
        result = num1 - num2;
        results(result);
    } else if (calcDropdown.value == "multiply"){
        result = num1 * num2;
        results(result);
    } else if (calcDropdown.value == "divide"){
        result = num1 / num2;
        results(result);
    } else {
        console.log("Error, no valid value")
    }
})