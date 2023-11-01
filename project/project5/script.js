
let randomColor=function(){
    let hex='012345678abcdef'
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}//for hex code
let createRGB=function(){
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    let a=Math.random().toFixed(1)
    let color=`rgba(${r},${g},${b},${a})`
    return color
} //for rgba code
console.log(randomColor())
let intervelId;
let startChangeColor=function(){
    function changeBackgroundColor(){
        document.querySelector('.main').style.backgroundColor=createRGB()
    }
    if(!intervelId){
        intervelId=setInterval(changeBackgroundColor,1000)
    }
    
}
let stopChangeColor=function(){
    clearInterval(intervelId)
    intervelId=null
}
document.querySelector('#start').addEventListener('click',startChangeColor)
document.querySelector('#end').addEventListener('click',stopChangeColor)