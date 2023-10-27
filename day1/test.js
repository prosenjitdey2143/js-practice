console.log("hello world");
const userPassword="gitadey143"
let userName="gita dey"
let userId=22312
let temp=null
/*
console.table([userPassword,userId,userName])
console.log(typeof null) //null ka datatype hai object
console.log(typeof undefined) //undefined ka datatype hai undefined
*/

let score="-123"
let scoreInNumber=Number(score)

/*
console.log(typeof(scoreInNumber))
console.log(scoreInNumber)
*/
let loggedIn=null
let booleanLoggedIn=Boolean(loggedIn)
/*
console.log(typeof(booleanLoggedIn))
console.log(booleanLoggedIn)
*/
let userAge=18
let stringUserAge=String(userAge)
let addAge=stringUserAge+18

console.log(typeof(stringUserAge))
console.log(stringUserAge)
console.log(addAge)
console.log(typeof addAge)

//**********************datatypes ***********************/
//primitive(7)--string, number, boolean, null, undefined, bigInt,symbol
let name="chotelal"
let roll=23
let fathersName
let isStudent=true
let isGraduate=null
let studentSymbol=Symbol("23")
let timeSpentInSecond=859555774566552256n

// console.table([name,roll,fathersName,isStudent,isGraduate,studentSymbol,timeSpentInSecond])
console.log(typeof timeSpentInSecond)

//refference or non-primitive(3)--array, object, function
let employies=["bittu","sona","gita"]
let myObj={
    name:"gita",
    age:23
}
let data=()=>{
    console.log(myObj.name)
}

console.log(typeof data)