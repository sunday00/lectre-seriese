// @ts-ignore
let number1 = Math.ceil(Math.random() * 9);
// @ts-ignore
let number2 = Math.ceil(Math.random() * 9);
// @ts-ignore
let result = number1 * number2;

const word = document.createElement('div');
word.textContent = `${number1} * ${number2}`;
document.body.append(word);

// @ts-ignore
const form = document.createElement('form');
document.body.append(form);

const input = document.createElement('input');
input.type='number';
form.append(input);

// @ts-ignore
const button = document.createElement('button');
button.textContent = 'insert';
form.append(button);

// @ts-ignore
const resultDiv = document.createElement('div');
document.body.append(resultDiv);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if( result === Number(input.value) ){
        resultDiv.textContent = 'OK';
        number1 = Math.ceil(Math.random() * 9);
        number2 = Math.ceil(Math.random() * 9);
        result = number1 * number2;
        word.textContent = `${number1} * ${number2}`;
        input.value = '';
    } else {
        resultDiv.textContent = '... try again';
        input.value = '';
        input.focus();
    }
});