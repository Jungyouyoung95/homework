let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");
const plus = document.querySelector("#plus");
const sub = document.querySelector("#sub");
const multiple = document.querySelector("#multiple");
const divide = document.querySelector("#divide");


function add(){
    let result = parseInt(num1.value) + parseInt(num2.value);
    document.querySelector("#result").value = result;
}

function minus(){
    let result = parseInt(num1.value) - parseInt(num2.value);
    document.querySelector("#result").value = result;
}

function multiply(){
    let result = parseInt(num1.value) * parseInt(num2.value);
    document.querySelector("#result").value = result;
}

function devision(){
    let result = parseInt(num1.value) / parseInt(num2.value);
    document.querySelector("#result").value = result;
}

plus.addEventListener("click", add);
sub.addEventListener("click", minus);
multiple.addEventListener("click", multiply);
divide.addEventListener("click", devision);

