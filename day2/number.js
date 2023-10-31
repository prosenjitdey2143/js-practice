let num=230
console.log(num)
let num1=new Number(230)
console.log(num1)
console.log(`totatl price is ${num.toFixed(2)}rs`)//.ke baad kitne number chaiye
function fits(x,y){
    if(Number.isInteger(x/y)){
        return "its fit"
    }
    return "its not fit"
}
console.log(fits(11,5))
let netWorth=200000000
console.log(`bill gates total netWorth id ${netWorth.toLocaleString('en-IN')}`)
console.log(`bill gate has earn ${netWorth.toString().length} digit money in every month `)
let tateMoney=243.569
console.log(tateMoney.toPrecision(4))

//*****************************math*******************************/
console.log("-------math----------")
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(23.4))
console.log(Math.round(23.6))
console.log(Math.ceil(34.1))
console.log(Math.floor(35.8))
let numArr=[3,6,2,5,1]
console.log({...numArr})
console.log(Math.min({...numArr})) //ye array ke index ki sath aati hai so aye galti nhi karni
console.log(Math.min(3,6,1,8))
console.log(Math.max(3,6,1,8))
function gettingRandomValue(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(gettingRandomValue(10,20))