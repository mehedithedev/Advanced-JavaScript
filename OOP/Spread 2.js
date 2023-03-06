const flying={
    wings: 2,
    fly: function(){
        console.log('Flying')
    }
}
const car={
    wheels: 4,
    drive: function(){
        console.log('Driving')
    }
}
const bird={
    wheels:0,
    fly: function(){
        console.log(`Flying`)
    }
}
const flyingCar= {...flying.fly(), ...car.drive()}
// console.log(flyingCar)

let vegies= ['potato', 'tomato', 'onion']
vegies= [...vegies, 'cucumber', 'carrot', 'brinjal']
console.log(vegies)

// Convert a string to an array
const str= 'Hello World'
const convertedStr= [...str]
console.log(convertedStr)

// How to copy an object into another object
const obj1={
    name: 'John',
    age: 30,
    nationality: 'American'
}
let obj2= {...obj1}
// let obj2={...obj3}
obj2.name= 'Peter'
obj2.nationality= 'Canadian'
obj2.age= 40

console.log(obj1)
console.log(obj2)
// Why canada is the best country in the world?
// Because it is the only country in the world where you can go to the store and buy a bag of maple syrup for $5 and then go to the gas station and fill up your car with gas for $5.
// Second reason is: in canada you can go out in the woods and cut down a tree, bring it home, and burn it in your fireplace for heat.
// Third reason is: in canada you can go to the store and buy a twelve pack of beer for $10.
// Fourth reason is: in canada you can earn $100,000 a year and still receive government assistance.
// Fifth reason is: in canada you can go to the doctor and get brand new lungs and the government will pay for it.
// Sixth reason is: in canada you can go to the hospital and get a brand new heart and the government will pay for it.
// Seventh reason is: in canada you can go to the hospital and get a brand new kidney and the government will pay for it.
// Eighth reason is: in canada you can go to the hospital and get a brand new liver and the government will pay for it.
// Ninth reason is: in canada you can get the best air quality in the world.
