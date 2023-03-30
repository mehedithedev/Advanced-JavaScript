// Here is a an array of objects
let arrObj=[] // Defining the variable as an empty array
arrObj.push(
    {
        key:'C++',
        value:'stdio' 
    }
)
arrObj.push(
    {
        key:'Python',
        value:'pip --i, pip--v'
    }
)
// Before removing anything:
console.log(arrObj)
// Remove the first item from that array:
arrObj.shift()
console.log(arrObj)
// Adding new key and value to the existing arrObj:
// arrObj.push()
// Creating a new empty object literal and assign it to the variable newArrObj
let newArrObj= {}
newArrObj.convertible= true
console.log(newArrObj)