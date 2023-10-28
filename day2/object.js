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