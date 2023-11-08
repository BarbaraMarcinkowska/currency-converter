
    const welcome = () => {
      console.log("Cześć to ja Basia probuje coś działać.Pozdrawiam Wszystkich :)");
    }

    welcome(); 

{
const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const amountElement = document.querySelector(".js-amount");
const resultElement = document.querySelector (".js-result");

 const calculateResult = (amount, currency) => { 
    const EURO = 4.46;
    const USD = 4.07;
    const GBP = 5.17;

    switch (currency) { 
        case "EURO":
            return amount / EURO; 
           
        case "USD":
            return amount / USD; 
            
        case "GBP":
            return amount / GBP;   
    }
};
calculateResult (); 

//const EURO = 4.46;
//const USD = 4.07;
//const GBP = 5.17;

formElement.addEventListener ("submit" , (event) => { 
    event.preventDefault(); 

const amount = +amountElement.value;
const currency = currencyElement.value;

const result = calculateResult (amount, currency); 

//switch (currency) { 
   // case "EURO" :
     //   result = amount / EURO; 
       // break; 
   // case "USD" :
   //     result = amount / USD; 
   //     break; 
   // case "GBP" :
    //    result = amount / GBP; 
    //    break; 
//}
resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
}) 

}