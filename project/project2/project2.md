##project2
Bmi Calculator

solution code
```javascript
let form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    let height=parseInt(document.querySelector('#height').value)
    let weight=parseInt(document.querySelector('#weight').value)
    let results=document.querySelector('#results')
    let weightMap=document.querySelector('#weight-map')
    let bmi;
    if(height=="" || height<=0 || isNaN(height)){
        results.innerHTML="<span>please enter a valid height"
    }else if(weight=="" ||weight<=0||isNaN(weight)){
        results.innerHTML="<span>please enter a valid weight"
    }else{
        bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`your Bmi is <span>${bmi}</span>`
    }

    if(bmi<=18.6){
        weightMap.innerHTML="You are under weight"
    }else if(bmi>=24.9){
        weightMap.innerHTML="You are under weight"
    }else{
        weightMap.innerHTML="You are perfect"
    }

})
```