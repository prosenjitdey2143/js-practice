let array=['reema','rekha','jaya','shusma']
console.log(array.indexOf('jaya'))
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
let index = cities.indexOf('Edinburgh');
// let arr = cities.splice(index,1);
// console.log(arr)
if(index!=-1){
    cities.splice(index,1)//splice se item delete v kar sakte hai or us tukra ko kis variable main save karke v rakh sakte hai
}
console.log(cities)
for(let city of cities){
    console.log(city)
}
function double(number){
    return number *3
}
let num=[1,2,3,4,5]
let change=num.map(function(val){
    return val*2
})
let numDouble=num.map(double)
console.log(change)
console.log(numDouble)
let charecter8=cities.filter((city)=>city.length>8)
console.log(charecter8)
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let makearr=data.split(',')
console.table(makearr)
let newData=makearr.join('-')
console.log(newData)
console.log(makearr.toString())//isse v join jaisa kaam kar sakta hu but toString hamesha , add karke string banata hai