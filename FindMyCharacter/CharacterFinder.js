let  CharaceterFinder = (word, match)=>{
// Defining different condition: 
    let condition1= typeof(word)=='string' && word.length>=2
    let condition2= typeof(match)=='string' && match.length==1


    // Checks if the input given by the user is a string and is the length is below 3 charters
    if (condition1== true && condition2==true){
         // Check if the charecter is found in the word
        if(word.match(match)==match){
        // Retrive the value of index of the matched charecter
        let indexOfMatch= word.match(match).index
        console.log(`The charecter ${match} has been found on index : ${indexOfMatch}`)
        } 
        // Prints if the charecter is not found in the word
        else{
        console.log(`The letter ${match} entered is not found in the word ${word}`)
        }
    } else{
        console.log('Please enter a valid input')
    }
   
// End of the function
}

let userWord= prompt('Enter the word you want to check if the charecter is found in it. It should have more then 3 charters')
let userMatch= prompt('Enter only one charter to check if it is on the word')
CharaceterFinder(userWord, userMatch)
