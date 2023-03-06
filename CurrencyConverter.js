let currencyOne= 100
let rate= 0.5
let currencyTwo
convertCurrency= (amount, rate)=>{
    return amount*rate
}
currencyTwo= convertCurrency(currencyOne, rate)
console.log(currencyTwo)