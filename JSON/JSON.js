const jsonString= '{"name":"John", "age":30, "city":"New York"}';
const jsonParse= JSON.parse(jsonString) // parse() method parses a JSON string, constructing the JavaScript value or object described by the string
console.log(jsonParse) // It's a regular Java Script object
console.log(jsonString) // It's a JSON string from which we can parse the object
// Compare this snippet from JavaScript\JSON\JSON.js:
console.log(jsonString.name)

//Now we will convert this JS object into a JSON string:
const convertedJSON = JSON.stringify(jsonParse) // stringify() method converts a JavaScript object or value to a JSON string
console.log(convertedJSON)