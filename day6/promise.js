//promise 1
let promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed')
})

//promise2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('async task2 complete')
})

//promise3
let promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 3')
        resolve({user:"bittu",email:"google@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})
//promise 4
new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
    if(!error){
        resolve({username:'hitesh',id:123})
    }else{
        reject('ERROR: something went wrong')
    }
    },1000)
})
.then(function(user){
    let {username}=user
    return username
})
.then(function(user){
    console.log(user)
})
.catch(function(err){
    console.log(err)
})
.finally(function(){
    console.log('promise will eather resolve or reject')
})

//promise 5
let promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({id:123,name:"code"})
        }else{
            reject('Error: something went wrong')
        }
    },1000)
})

let completePromise=async()=>{
    try{
        let response=await promiseFive
    console.log(response)
    }catch(error){
        console.log(error)
    }
}
completePromise()

async function getAllUsers(){
   let response= await fetch('https://random-data-api.com/api/v2/users')
//    console.log(response)
   let data= await response.json()
   console.log(data)
}
// getAllUsers()

fetch('https://random-data-api.com/api/v2/users')
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})