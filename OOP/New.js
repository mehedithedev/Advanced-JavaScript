function IceCream(flavor){
    this.flavor= flavor;
    this.meltIt= function(){
        console.log(`The ${this.flavor} icecream has melted`)
    }
}

let kiwiIceCream= new IceCream('kiwi')
console.log(kiwiIceCream.flavor, kiwiIceCream.meltIt())

// Defining string using New keyword: 
let fruit= new String('Apple')
console.log(fruit)

function newNumber(num){
    console.log(`The square of the number is: ${num*num}`)
}
newNumber(8)