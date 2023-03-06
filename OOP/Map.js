// In this code we are gonna discuss about Map in JavaScript

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
const myMap= new Map()
// The above line of code will create a new Map object.
myMap.set('dog', 4) // Here we are setting the key and value of the Map.
// The key is dog and the value is 4.
myMap.set('cat', 3)
myMap.set('human', 2)
myMap.set('snake', 0)
// Below we are gonna print the Map.
console.log(myMap)
// Below we will get the value of each and every keys: 
console.log(myMap.get('dog')) // Outputs 4
console.log(myMap.get('cat'))  // Outputs 3
console.log(myMap.get('human')) // Outputs 2
console.log(myMap.get('snake')) // Outputs 0
// Below we are gonna check if the Map has a particular key or not:
// To do that we will use the has() method:
console.log(myMap.has('dog')) // It returns only true or false.
console.log(`It is ${myMap.has('dog')} that the Map has the key dog.`)
console.log(`It is ${myMap.has('Cow')} that the Map has the key Cow.`)
console.log(`It is ${myMap.has('cat')} that the Map has the key cat`) 
console.log(`It is ${myMap.has('human')} that the Map has the key human`)
console.log(`It is ${myMap.has('snake')} that the Map has the key snake`)
console.log(`It is ${myMap.has('lion')} that the Map has the key lion`)
// Below we are gonna delete a key from the Map by using the delete method: 
myMap.delete('cat')
console.log(myMap) // Here we can see that the cat key is deleted.
// Below we can get the number of key-value pairs in the map by using the size property:
console.log(`Here is the size of the Map: ${myMap.size}`)
// Below we are gonna clear the Map by using the clear() method:
myMap.clear()
console.log(`The map after clearing by using clear method ${myMap}`) // Here we can see that the Map is cleared.


