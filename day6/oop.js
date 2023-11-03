//object literals
const user={
    username:'hitesh',
    loggedIn:8,
    signedIn:true,
    getUserDetails:function(){
        console.log(`${this.username}`)
        console.log(this)
    }
}
// user.getUserDetails()

function userprofile(username,logincount,isloggedin){
    this.username=username
    this.logincount=logincount
    this.isloggedin=isloggedin
    this.greeting=function(){
        console.log(`hello dear ${this.username}`)
    }
    // return this
    //ismain agar return this na v karu thoh bhi aye implecitely humhe pura context return karta hai

}
const userOne=new userprofile('hitesh',6,true)
const userTwo=new userprofile('bittu',7,true)
//jab bhi humhe new use kartay hai woh hamesha ak empty object create karta hai and uske baad hum agar kuch bhi dete hai toh us context ka valu new jo object create hota hai usmain push kar deta hai
console.log(userOne.constructor)
console.log(userTwo)