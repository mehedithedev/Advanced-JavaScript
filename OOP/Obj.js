let obj ={
    key: 1,
    value: 4
}
let output= {...obj};
output.value -= obj.key;
console.log(output.value); // 3
// The above code is equivalent to:
// let obj ={
//     key: 1,
//     value: 4
// }
// let output= Object.assign({}, obj);
//By this code, we are creating a new object and copying the properties of the obj object to the new object.