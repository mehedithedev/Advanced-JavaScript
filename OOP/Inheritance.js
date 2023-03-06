let bird={
    hasWings: true,
    canFly: true,
    canWalk: false,
    legs: 2,
    laysEggs: true,
}
// Here we are creating a new object from the bird object.
// The method is like this:
// let newObject= Object.create(oldObject)
// Here the newObject will inherit all the properties and methods of the oldObject.
// So, the newObject will be a child of the oldObject.

let Penguine= Object.create(bird)
console.log(Penguine)
console.log(`Penguine has wings: ${! Penguine.hasWings}`)
console.log(`Penguine can fly: ${! Penguine.canFly}`)
console.log(`Penguine can walk: ${! Penguine.canWalk}`)
console.log(`Penguine has ${Penguine.legs} legs`)
console.log(`Penguine lays eggs: ${Penguine.laysEggs}`)