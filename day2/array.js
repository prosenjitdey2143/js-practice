let arr= [5, 12, 8, 130, 44];
console.log(arr)
console.log(arr.length)
arr.push(34)
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(2)
console.log(arr)
console.log(arr.at(3))
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3=array1.concat(array2)
console.log(array3)

let arr2=[0,4,8,2]
console.log(arr2.fill(5))// change in original array
console.log(arr2)
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

let fruitsLen=fruits.filter((elem)=>elem.length>=6);
console.log(fruitsLen)
function filterquery(arr,query){
    return arr.filter((elem) =>elem.toLowerCase().includes(query.toLowerCase()) )//agar condition true hoga tabbhi add karega
}
console.log(filterquery(fruits,"na"))
let arrStr=fruits.join("__")
console.log(arrStr)
fruits.forEach((elem)=>console.log(elem))
console.log(fruits.indexOf("banana"))
let fruitsReverse=fruits.reverse()
console.log(fruitsReverse)
fruitsReverse.splice(1,0,"guava")
console.log(fruitsReverse)
fruitsReverse.splice(4,1)
console.log(fruitsReverse)