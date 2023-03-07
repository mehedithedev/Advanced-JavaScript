let headingSelector= document.querySelector('h1')
let buttonClick= document.querySelector('button')
let newHeading = document.createElement('h2').innerText= 'I am a new heading'

const triggureByClick = ()=> {
    console.log('I am clicked')
    document.createElement('h2').innerText= 'I am a new heading'
}
buttonClick.addEventListener('click', triggureByClick)