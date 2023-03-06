const LetterFinder= (word, match)=>{
    for(let i=0; i<word.length; i++){
        let enteredWord= word[i]
        if(enteredWord==match){
            console.log(`Found the ${match} at: ${i}`)
        } else{
            console.log(`...No match found at: ${i}`)
        }
    }
}
LetterFinder('Mehedi Hasan is a software engineer', 't')