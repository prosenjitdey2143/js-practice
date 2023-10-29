let marvel=['tony','steve','thor','hulk','panther']
for(let index of marvel){
    console.log(index)
}
for(let [val,i,j,k] of marvel){
    console.log(`${val}  ${i}  ${j}  ${k}`)
}

let user={
    name:"prosenjit dey",
    workAt:"google(bangalor)",
    employId:21332,
    joinDate:"jan 2024",
    weekdays:["saturday","sunday"],
    speciality:["webdevlopment","android","dsa"]

}

// for(let [key] of user){// forOf loop object main work nahi karta
//     console.log(key)
// }

for(let key in user){
    console.log(user[key] )
}

for(let index in marvel){// forIn loop array main bhi kaam karta hai beacause array main v key rehta hai index k form main 
    console.log(marvel[index])
}

marvel.forEach((val)=>(console.log(val)))

marvel.forEach((val,index,arr)=>{
    console.log(`${val} ${index} ${arr}`)
})
// user.forEach((val,index)=>{//forEach object main kaam nahi karta
//     console.log(user[index]`)
// })

// let returnArr=marvel.forEach((item)=>{ return item})// forEach kabhi kuch bhi return nahi karta
// console.log(returnArr)
// kabhi humhe array or array of objects se kuch data return toh chaiye hote hai kisi variable main save karne k liye
//useke liye hum filter ya map ki use kar sakte hai 

let returnArr=marvel.filter((val)=>val.includes('to'))
console.log(returnArr)

let numArr=[1,2,3,4,5,6,7,8,9,10]
let upperArr=numArr.filter((val)=>{ return val>=5})
console.log(upperArr)

let books=[
    {titile:'book1',genre:"science",publish:2000},
    {titile:'book2',genre:"history",publish:1997},
    {titile:'book3',genre:"science",publish:1958},
    {titile:'book4',genre:"geography",publish:1999},
    {titile:'book5',genre:"bioscience",publish:1997},
    {titile:'book6',genre:"science",publish:2004},
    {titile:'book7',genre:"history",publish:1994},
    {titile:'book8',genre:"science",publish:2001},
]

// let filterBook=books.filter((book)=>book.titile!="book2")
let filterBook=books.filter((book)=>{return book.publish>=2000})
console.log(filterBook)

let number=[1,2,3,4,5,6,7,8,9,10]
// let multiplyNum=number.map((item)=>item*10)
// let multiplyNum=number.map((item)=>item>5)//is case pai map true or false return kar deta hai as a value
// let multiplyNum=number.map((item)=>item*10).map((item)=>{return item+1})// ismain first map jo single valu return karta hai woh second map ko milta hai
let multiplyNum=number.map((item)=>item*10).map((item)=>{return item+1}).filter((item)=>(item>40))
console.log(multiplyNum)

let batch=[1,2,3,4,5,6,7,8,9,10]
let initialvalue=0
let batchSum=batch.reduce((accumulator,cuurent)=>accumulator+cuurent,initialvalue)
console.log(batchSum)

let shoppingCart=[
    {course:"js",price:999},
    {course:"python",price:1999},
    {course:"react",price:5999},
    {course:"dsa",price:2999}
]

let totalPrice=(shoppingCart.reduce((acc,current)=>acc+current.price,0))
console.log(`your total cost ${totalPrice}, including 18% gst ${Math.round(totalPrice+=(totalPrice*18)/100)}`)
