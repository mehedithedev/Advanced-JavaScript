// In this problem you have to reverse a string
// The first step is to create a function that takes a string as a parameter
// The second step is to split the string into an array
// The third step is to reverse the array
// The fourth step is to join the array
// The fifth step is to return the reversed string
// At last we have to call the function and pass a string as a parameter

// How to use split method on js: 
// let str= 'Hello World'
// let splittedStr= str.split(' ')
// console.log(splittedStr)
const strReverse= (str)=>{
    return (str.split(' '))
}
let splittedStr= strReverse('Hello World')
console.log(splittedStr)
// How to use reverse method on js:
// let arr= [1, 2, 3, 4, 5]
// let reversedArr= arr.reverse()
// console.log(reversedArr)
const arrReverse= (arr)=>{
    return (arr.reverse())
}
let reversedArrow= arrReverse(splittedStr)
console.log(reversedArrow)
// How to use join method on js:
// let arr= [1, 2, 3, 4, 5]
// let joinedArr= arr.join(' ')
// console.log(joinedArr)

let arrJoin = (revArr)=>{
    return (revArr.join(' ')) // Why should I use ' ' in this line of code?
}
let joinedArr= arrJoin(reversedArrow)
console.log(joinedArr)
    // The answer is that if we don't use ' ' in this line of code, the output will be like this: HelloWorld
    // But if we use ' ' in this line of code, the output will be like this: Hello World
    // Another reason is that if we don't use ' ' in this line of code, the output will be like this: Hello,World
    // It happens because the default value of join method is ','
    // What is the default value of join method?
    // Why is this the default value?
    // The answer is that the default value of join method is ',' because the default value of split method is ','
    // What is the default value of split method?
    // Why is this the default value?
    // The answer is that the default value of split method is ',' because the default value of join method is ','

