//*****************************string*****************************/
let userName="sunder"
console.log(userName)
let name=new String("hitesh")
console.log(name)

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.charCodeAt(3))
console.log(`google ceo name is ${userName} and last name is ${name}`)
let fullName=name.concat(" ",userName)
console.log(fullName)
let sentense="my name is prosenjit dey and i live in kolkata."
console.log(sentense.endsWith("."))
console.log(String.fromCharCode(105))
const phase = 'The quick lazy brown fox jumps over the lazy dog.';
let word="dog"
let word2="lazy"
console.log(`the word "${word}" ${phase.includes(word)?'is':'is not'} present in the phase `)
console.log(name.indexOf('t'))
console.log(`the word "${word2}" is present from the first at ${phase.indexOf('lazy')} position`)
console.log(`the word "${word2}" is present from the last at ${phase.lastIndexOf('lazy')} position`)
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
let regex = /[A-Z]/g
const found = paragraph.match(regex)
console.log(found)
let fighter = "cornor mcgregor"
console.log(fighter.padEnd(35,"."))
let num = '5'
console.log(num.padStart(2,"0"))
let num2 = "256555889874556"
let last4Digt = num2.slice(-4)
console.log(last4Digt.padStart(num2.length,"#"))
let userNumber = "9163253013"
let phnLast4Digt = userNumber.slice(-4)
console.log(`prosenjit dey phone number id ${phnLast4Digt.padStart(userNumber.length,"*")}`)
let filePath = String.raw`C:\Development\profile\aboutme.html`
console.log(`the file path is ${filePath}`)
let repeatedWord = "fuck you bitch! "
console.log(`i would like to say ${repeatedWord.repeat(4)}`)
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('lazy','ferocious'))
console.log(p.replaceAll('lazy','ferocious'))
console.log(p.slice(-5))
console.log(p.slice(5))
console.log(p.slice(4,19))
console.log(p.slice(-9))
console.log(p.slice(-10,-5))
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split(" "))
const inputStr="     prajesh rawat"
console.log(inputStr)
console.log(inputStr.trim())