let one=document.getElementById('first_number');
let two=document.getElementById('second_number');
let output=document.getElementById('output');

function addition(){
    result = (Number(one.value) + Number(two.value));
    if(result < 0){
        output.style.color = 'red';
    }
    else{
        output.style.color = 'black';
    }
    output.innerHTML = String(result);
}
function subtraction(){
    result = (Number(one.value) - Number(two.value));
    if(result < 0){
        output.style.color = 'red';
    }
    else{
        output.style.color = 'black';
    }
    output.innerHTML = String(result);

}
function multiplication(){
    result = (Number(one.value) * Number(two.value));
    if(result < 0){
        output.style.color = 'red';
    }
    else{
        output.style.color = 'black';
    }
    output.innerHTML = String(result);
}
function division(){
    result = (Number(one.value) / Number(two.value));
    if(result < 0){
        output.style.color = 'red';
    }
    else{
        output.style.color = 'black';
    }
    output.innerHTML = String(result);
}
function power(){
    let baseValue = Number(one.value);
    let exponent = Number(two.value);
    let finalValue = 1;
    if(exponent >= 0){
        for (let i = 1; i <= exponent; i++){
            finalValue *= baseValue;
        }
    }
    else{
        for (let i = 1; i < -exponent; i++){
            finalValue *= baseValue;
        }
        finalValue = 1/finalValue
    }
    if (finalValue < 0){
        output.style.color = 'red';
    }
    else{
        output.style.color = 'black';
    }
    output.innerHTML = String(finalValue);
}

function clearAll(){
    one.value = "";
    two.value = "";
    output.innerHTML = "";
}