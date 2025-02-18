const min = document.querySelector('#min');
const max = document.querySelector('#max');
const btn = document.querySelector('.btn');

const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');

const value = document.querySelector(".value-num");
let minNum = 0;
let maxNum = 0;
let valueNum = 0;


min.addEventListener('input', (e) => {
    let valueNumTemp = e.target.value;

    if (isNaN(valueNumTemp) || valueNumTemp === "") {
        valueNumTemp = 0;
    }
    else {
        minNum = min.value;
        valueNum = minNum;
    }
    value.textContent = minNum;
});

max.addEventListener('input', (e) => {
    let valueNumTemp = e.target.value;

    if (isNaN(valueNumTemp) || valueNumTemp === "") {
        valueNumTemp = 0;
    }
    else if(valueNumTemp < min.value) {
        maxNum = min.value;
    }
    else {
        maxNum = max.value;
    }
}); 

increment.addEventListener('click', () => {
    if (valueNum < maxNum) {
        valueNum++;
        value.textContent = valueNum;
    }
});

decrement.addEventListener('click', () => {
    if (valueNum > minNum) {
        valueNum--;
        value.textContent = valueNum;
    }
});

reset.addEventListener('click', () => {
    valueNum = minNum;
    value.textContent = valueNum;
});