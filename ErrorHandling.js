try{
    // console.log(a+b)
    throw new ReferenceError // This syntax can be used to throw a custom made error
}
catch(err){
    console.log(`Here is an error which will stop the code from execution`)
    console.log(`Here is the error messege: ${err}`)
    
}
console.log(`The code is still running`)