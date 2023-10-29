// function callUser(userName){
//     console.log("enter user name" + userName)
// }
// callUser("hitesh")
const userData=(userName)=>{
    if(!userName){
        return console.log("please enter user name")
    }
    return console.log(`hello ${userName}. good to see you`)
}
userData("prosenjit dey")
const user=(userName="user")=>{
    return console.log(`hello ${userName}. good to see you`)
}
user("hitesh")

const addToCartDataPrice=(...price)=>{
    let netValue= price.reduce((acc,res)=>acc+res,0)//reduce method main hamesha ak initialvalue dena hi parta hai jismay samj ayy ke accumulator=0 hai.
   console.log(netValue)
}
addToCartDataPrice(200,300,400,500)
let employ={
    name:"prosenjit dey",
    workAt:"google(bangalor)",
    employId:21332,
    joinDate:"jan 2024",
    weekdays:["saturday","sunday"],
    speciality:["webdevlopment","android","dsa"]
}

const handleObject=(obj)=>{
    console.log(`hello ${obj?.name} thanks to work with us at ${obj?.workAt}`)
}
handleObject(employ)
handleObject({
    name:"debashis",
    workAt:"microsoft"
})

console.log(addTwo(3,4))
function addTwo(num1,num2){//implesite funtion
    return num1+num2
}
// console.log(addtwo2(7,3))//in this explicit function case hoisting is not working 
// let addtwo2=(num1,num2)=>num1+num2//explicite funtion

// let func=(num1,num2)=>(num1+num2)
// console.log(func(3,6))
let func =(num1,num2)=>{num1+num2}//when we use {} curly bresess in explicite function we have tuo use return
console.log(func(3,6))
let objFunc=()=>({name:'prosenjit dey'})//when use want tu return an object

// *************************THIS*********************

