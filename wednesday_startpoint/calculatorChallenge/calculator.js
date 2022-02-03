`use strict`;
import * as DOM from './domchallenge.js';

DOM.addButton.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.subButton.onclick = () => sub(DOM.inputOne.value, DOM.inputTwo.value);
DOM.divButton.onclick = () => div(DOM.inputOne.value, DOM.inputTwo.value);
DOM.multButton.onclick = () => mult(DOM.inputOne.value, DOM.inputTwo.value);
DOM.eqlButton.onclick = () => showAnswer(int);
DOM.clearButton.onclick = () => clear();

function showAnswer(int){

    let addResult = document.createElement(`li`);
    addResult.innerHTML = int;
    DOM.outPut.appendChild(addResult)
}

function add (num1, num2){

    let result = 0;
    result = +num1 + +num2;
    showAnswer(result);
}

function sub (num1, num2){

    let result = 0;
    result = +num1 - +num2;
    showAnswer(result);
}

function div (num1, num2){

    let result = 0;
    result = +num1 / +num2;
    showAnswer(result);
}

function mult (num1, num2){

    let result = 0;
    result = +num1 * +num2;
    showAnswer(result);
}

function clear(){
    DOM.inputOne.value = "";
    DOM.inputTwo.value = "";
    document.getElementById(`list_output`).innerHTML = "";
}