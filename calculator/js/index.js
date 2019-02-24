var oneBtn = document.getElementById('1');
var twoBtn = document.getElementById('2');
var threeBtn = document.getElementById('3');
var fourBtn = document.getElementById('4');
var fiveBtn = document.getElementById('5');
var sixBtn = document.getElementById('6');
var sevenBtn = document.getElementById('7');
var eightBtn = document.getElementById('8');
var nineBtn = document.getElementById('9');
var zeroBtn = document.getElementById('0');


var clearBtn = document.getElementById('clear');
var backspaceBtn = document.getElementById('backspace');
var displayValElement = document.getElementById('calc-screen');
 
var displayValElements = '0';
var pendingVal;
var evalStringArray = [];

var calcNumBtns = document.getElementsByClassName('num');
var calcOperatorBtns = document.getElementsByClassName('operator');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];


var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if(displayVal === '0')
        displayVal= '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
          displayValElement.innerText=displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
    
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

        case '*':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;

        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join('   '));
            displayVal = evaluation + ' ';
            displayValElement.innerText= displayVal;
            evalStringArray=[];
            break;
        
        default:
            break;
    }
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
    calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
    let lengthofDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthofDisplayVal - 1);

    if (displayVal === '')
     displayVal = '0';

    displayValElement.innerText = displayVal;
}

