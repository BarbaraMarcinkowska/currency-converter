console.log("Cześć to ja Basia probuje coś działać");

let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector (".js-result");


let EURO = 4.46;
let USD = 4.07;
let GBP = 5.17;

formElement.addEventListener ("submit" , (event) => { 
    event.preventDefault(); 

let amount = +amountElement.value;
let currency = currencyElement.value;
let result; 

switch (currency) { 
    case "EURO" :
        result = amount / EURO; 
        break; 
    case "USD" :
        result = amount / USD; 
        break; 
    case "GBP" :
        result = amount / GBP; 
        break; 
}
resultElement.innerHTML = ` <strong> ${result.toFixed(2)} ${currency} </strong>`; 
})

// ${amount.toFixed(2)} PLN

//let button = document.querySelector(".button");
//let body = document.querySelector(".body");
//let nextColor = document.querySelector(".nextColor");

 
// button.addEventListener("click", () => {
   // body.classList.toggle ("inerBody");

  //  nextColor.innerText = body.classList.contains("inerBody") ? "ciemny" : "jasny";
// });