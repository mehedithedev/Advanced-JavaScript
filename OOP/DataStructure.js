const arrayOfFruits= ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']
const AppendFruites =(fruitName,index)=>{
    console.log(`${index} : ${fruitName}`)
}
arrayOfFruits.forEach(AppendFruites)