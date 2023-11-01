let randomNumber=parseInt((Math.random()*100)+1)
let inputField=document.querySelector('#guessField')
let submitbtn=document.querySelector('#subt')
let prevguesses=document.querySelector('.guesses')
let remainingGuess=document.querySelector('.lastResult')
let lowOrHi=document.querySelector('.lowOrHi')
let resultParas=document.querySelector('.resultParas')

let p=document.createElement('p')
let prevGuess=[]
let numberOfGuess=0

let playGame=true
if(playGame){
    submitbtn.addEventListener("click",function(e){
        e.preventDefault()
        let guessNum=parseInt(inputField.value)
        console.log(guessNum)
        validateGuess(guessNum)
    })
}
function validateGuess(guess){
    if(isNaN(guess) || guess<=0 || guess>=100){
        alert("please enter a valid number between 1 to 100")
    }else{
        prevGuess.push(guess)
        if(numberOfGuess>9){
            displayMessage(`game over. random number was ${randomNumber}.`)
            endGame()
        }else{
            cleanupGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('you guessed it right.')
        endGame()
    }else if(guess<randomNumber){
        displayMessage('your guess is TOO low.')
    }else{
        displayMessage('your guess is TOO high.')
    }
}

function cleanupGuess(guess) {
    inputField.value=""
    prevguesses.innerHTML += `${guess}, `
    numberOfGuess++
    remainingGuess.innerHTML=`${(11-numberOfGuess)}`

}
function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame() {
    inputField.value=""
    inputField.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML="<h2 id='newGame'>start new game</h2>"
    resultParas.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
    let newGameBtn=document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(){
        randomNumber=parseInt((Math.random()*100)+1)
        numberOfGuess=0
        prevGuess=[]
        prevguesses.innerHTML="" 
        remainingGuess.innerHTML=`${(11-numberOfGuess)}`
        inputField.removeAttribute('disabled')
        lowOrHi.innerHTML="" 
        resultParas.removeChild(p)
        playGame=true
    })
}
