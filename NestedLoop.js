// Example of Nested Loop

// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5; j++) {
//         console.log(i, j);
//     }
// }
// for(let i=0; i<2; i++){
//     console.log(`Here is the outer loop: ${i}`)
//     for(let j=0; j<10; j++){
//         console.log(`This is the inner part of that loop: ${j}`)
//     }
// }
// for (let firstNum=0; firstNum<3; firstNum++){
//     for(let secondNum=0; secondNum<5; secondNum++){
//         console.log(`${firstNum} times ${secondNum} equals is: ${firstNum*secondNum}`)
//     }
// }
// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < 7; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }

for(let i=0; i<11; i++){
    switch (i) {
        case 0:
            console.log(`Gold`)
            break;
        case 1:
            console.log(`Silver`)
            break;
        case 2:
            console.log(`Bronze`)
            break;
        default:
            console.log(i)
            break;
    }
}