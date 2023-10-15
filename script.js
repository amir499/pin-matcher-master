/*
    random number create korar jonno
    Math.random()
    Math.random()*100
    Math.random()*1000 
    Math.random()* 10000 
    Math.round(Math.random()*10000)
*/


function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4 ){
        return pin;
    }
    else{
        // console.log('pin not 3 digit found', pin)
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    //console.log(event.target.innerText)
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigis = digits.join('');
            typeNumberField.value = remainingDigis;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typeNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typeNumber = typeNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');
    if(typeNumber === currentPin){
       
       pinSuccessMessage.style.display = 'block';
       pinFailure.style.display = 'none';
    }
    else{
        
        pinFailure.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})