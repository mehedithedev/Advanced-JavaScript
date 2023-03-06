let purchase1={
    items: 23,
    stateTax: 4.5,
    federalTax: 20,
    total: function(){
        let toPay= purchase1.items * purchase1.stateTax+ purchase1.federalTax
        console.log(``)
    }
}
purchase1.total()

// Using this keyword: 
let purchase2={
    items: 23,
    stateTax: 4.5,
    federalTax: 20,
    total: function(){
        let toPay= this.items * this.stateTax+ this.federalTax
        console.log(`Total to pay: ${toPay} taka only.`)
    }
}
purchase2.total()