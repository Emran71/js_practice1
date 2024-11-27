console.clear();
// Dom change Event handle
// const input = document.querySelector("input");
// input.addEventListener("change",changehandler);

// function changehandler(e) {
//     console.log(e.target);
// }


// var checkboxes = document.querySelectorAll("input[name=gender]");
// Array.from(checkboxes).map((program) =>{
//    program.addEventListener("change", namehandler);
// });
// function namehandler(e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }

//select DOM handle
// var options= document.querySelector("#car");
// options.addEventListener("change", optionhandle)
// function optionhandle(e){
//     console.log(e.target.value);
// }

// submit event handler
// var from = document.querySelector("form");
// var uname = from.querySelector("div #uname");

// var email = from.querySelector("div #email");

// var password = from.querySelector("div #password");

// from.addEventListener("submit", submithandler);

// function submithandler(e){
//     e.preventDefault();
//     var userdata ={
//         name: uname.value,
//         email: email.value,
//         password: password.value
//     }
//     console.log(userdata);
//     uname.value ="";
//     email.value ="";
//     password.value = "";



    
// }


// var btn = document.querySelectorAll(".btn");

// Array.from(btn).map((btn) => {
//     btn.addEventListener("click", function btnhandler(e){
//         console.log(e.target.textContent);
//     });
// });

var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var operator = document.querySelector("#operator");
var result = document.querySelector("#calculate");

result.addEventListener("click", calculateResult);
function calculateResult(){
    var num1Value = parseFloat(num1.value);
    var num2Value = parseFloat(num2.value);
    var operatorValue = operator.value;
    
    var resultValue;
    switch(operatorValue){
        case "+":
            resultValue = num1Value + num2Value;
            break;
        case "-":
            resultValue = num1Value - num2Value;
            break;
        case "*":
            resultValue = num1Value * num2Value;
            break;
        case "/":
            if(num2Value === 0){
                alert("Cannot divide by zero");
                return;
            }
            resultValue = num1Value / num2Value;
            break;
    }
    
    document.querySelector("#result").textContent = resultValue;
    num1.value = "";
    num2.value = "";
    operator.value = "+";
}






