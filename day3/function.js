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
console.log(this) //when we console THIS at nodejs that return an empty object 
// when we console THIS at browser console that return us window object

let student={
    name:"ricky",
    class:5,
    greatting:function(){
        console.log(`hello ${this.name}. welcome to the class`)
        console.log(this)
    }
}
console.log(student.greatting())

function checkThis(){
    
    console.log(this)
}
checkThis();


// ***************************IIFE*******************************
// (immediate invoke function expression)

(function chai(){//named iife
    console.log('DB CONNECTED')
})();
((name)=>console.log(`DB Connected ${name}`))('hitesh')//unnamed iife

// *************************CONTROL FLOW***********************
//falsy VALUE
//0,"",FALSE,NULL,UNDEFINE,-0,Nan bigint 0n

//Truthy value
//"0","-0",[],{},function(){}

if([]){
    console.log('truty value')
}
if(function(){}){
    console.log('empty function is a truthy value')
}

let arr=[]
if(arr.length==0){
    console.log('array length is zero')
}
let obj={}
if(Object.keys(obj).length==0){
    console.log('object length is zero')
}

//nullish coalescing operator ??:null undefine

let val1;
val1=5??null

val1=10??5
val1=null??5

console.log(val1)