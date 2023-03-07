let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set); // 3
function count(...basket){
    console.log(basket.length)
}
count(10,9,8,7,6)