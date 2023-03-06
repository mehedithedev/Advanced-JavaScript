// The following code can be used to check if a certain charter is available on a predefined variable. 
var demoString= 'Here is a string to check a charter using Match method'
let found =demoString.match('d')
console.log(found)
let notFound= demoString.match('z')
console.log(notFound)

// Path: Match.js
// Compare this snippet from FunctionRecursion.js:
// let recursion=()=>{
//     console.log("Hello World")
