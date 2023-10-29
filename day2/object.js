//singleton

let mySym=Symbol("key1")
let user={
    name:"prosenjit dey",
    workAt:"google(bangalor)",
    employId:21332,
    joinDate:"jan 2024",
    [mySym]:"key symbol",
    weekdays:["saturday","sunday"],
    speciality:["webdevlopment","android","dsa"]

}

console.log(user.workAt)
console.log(user["name"])
console.log(typeof user[mySym])
user.speciality.push("hr")
console.log(user.speciality)
user.callToAction=function(){
    console.log(`${this.name} is specialist on ${this.speciality.join(",")} `)
}
console.log(user.callToAction())
let obj1={
    name:"emp1",
    id:342
}
let obj2={
    email:"emp2@gmail.com",
    codeid:534
}
// let finalObj={...obj1 , ...obj2}
finalObj=Object.assign({},obj1,obj2)
console.log("final---",finalObj)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty("collage"))